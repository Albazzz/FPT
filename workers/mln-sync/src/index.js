/**
 * Cloudflare Worker — MLN Master Control API
 * Deploy: git push → GitHub Action (wrangler)
 * Routes: /api/auth  /api/progress  /api/health
 */
import { neon } from "@neondatabase/serverless";

const DEFAULT_MASTER = "Namcong9@";

function corsHeaders(origin, env) {
  const allowed = (env.CORS_ORIGIN || "*").split(",").map((s) => s.trim());
  let allow = "*";
  if (allowed.length && allowed[0] !== "*") {
    allow = allowed.includes(origin) ? origin : allowed[0];
  }
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json; charset=utf-8",
  };
}

function json(env, origin, status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(origin, env),
  });
}

function b64url(bytes) {
  let bin = "";
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  for (let i = 0; i < arr.length; i++) bin += String.fromCharCode(arr[i]);
  const b64 = btoa(bin);
  return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function hmacSign(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return b64url(new Uint8Array(sig));
}

async function signToken(payload, secret) {
  const body = b64url(new TextEncoder().encode(JSON.stringify(payload)));
  const sig = await hmacSign(secret, body);
  return `${body}.${sig}`;
}

async function verifyToken(token, secret) {
  if (!token || !token.includes(".")) return null;
  const [body, sig] = token.split(".");
  const expect = await hmacSign(secret, body);
  if (sig.length !== expect.length) return null;
  let ok = true;
  for (let i = 0; i < sig.length; i++) if (sig[i] !== expect[i]) ok = false;
  if (!ok) return null;
  try {
    const pad = body.length % 4 === 0 ? "" : "=".repeat(4 - (body.length % 4));
    const b64 = body.replace(/-/g, "+").replace(/_/g, "/") + pad;
    const json = JSON.parse(atob(b64));
    if (!json?.exp || Date.now() / 1000 > json.exp) return null;
    return json;
  } catch {
    return null;
  }
}

function getBearer(req) {
  const h = req.headers.get("Authorization") || "";
  const m = h.match(/^Bearer\s+(.+)$/i);
  return m ? m[1].trim() : "";
}

function getSql(env) {
  if (!env.DATABASE_URL) throw new Error("Missing DATABASE_URL secret");
  return neon(env.DATABASE_URL);
}

async function ensureSchema(sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS mln_progress (
      id TEXT PRIMARY KEY DEFAULT 'default',
      data JSONB NOT NULL DEFAULT '{}'::jsonb,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`
    INSERT INTO mln_progress (id, data)
    VALUES ('default', '{}'::jsonb)
    ON CONFLICT (id) DO NOTHING
  `;
}

async function handleAuth(req, env, origin) {
  const master = env.MASTER_CODE || DEFAULT_MASTER;
  const secret = env.SESSION_SECRET || env.MASTER_CODE || `${DEFAULT_MASTER}-session`;
  let body = {};
  try {
    body = await req.json();
  } catch {
    return json(env, origin, 400, { error: "Invalid JSON" });
  }
  const code = String(body.code || "").trim();
  if (!code) return json(env, origin, 400, { error: "Nhập mã Master Control" });
  if (code !== master) return json(env, origin, 401, { error: "Mã không đúng" });

  const days = Number(env.SESSION_TTL_DAYS || 90);
  const exp = Math.floor(Date.now() / 1000) + days * 24 * 3600;
  const token = await signToken({ sub: "master", exp }, secret);
  return json(env, origin, 200, {
    ok: true,
    token,
    expiresAt: new Date(exp * 1000).toISOString(),
    mode: "cloud",
  });
}

async function handleProgress(req, env, origin) {
  const secret = env.SESSION_SECRET || env.MASTER_CODE || `${DEFAULT_MASTER}-session`;
  const payload = await verifyToken(getBearer(req), secret);
  if (!payload) {
    return json(env, origin, 401, {
      error: "Chưa đăng nhập cloud hoặc token hết hạn",
    });
  }

  const sql = getSql(env);
  await ensureSchema(sql);

  if (req.method === "GET") {
    const rows = await sql`
      SELECT data, updated_at FROM mln_progress WHERE id = 'default' LIMIT 1
    `;
    const row = rows[0] || { data: {}, updated_at: null };
    return json(env, origin, 200, {
      data: row.data || {},
      updatedAt: row.updated_at,
    });
  }

  if (req.method === "PUT") {
    let body = {};
    try {
      body = await req.json();
    } catch {
      return json(env, origin, 400, { error: "Invalid JSON" });
    }
    const data = body.data;
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return json(env, origin, 400, { error: "data must be an object" });
    }
    const raw = JSON.stringify(data);
    if (raw.length > 500000) {
      return json(env, origin, 413, { error: "Payload too large" });
    }
    const rows = await sql`
      INSERT INTO mln_progress (id, data, updated_at)
      VALUES ('default', ${raw}::jsonb, now())
      ON CONFLICT (id) DO UPDATE
        SET data = EXCLUDED.data, updated_at = now()
      RETURNING data, updated_at
    `;
    const row = rows[0];
    return json(env, origin, 200, {
      ok: true,
      data: row.data,
      updatedAt: row.updated_at,
    });
  }

  return json(env, origin, 405, { error: "Method not allowed" });
}

async function handleHealth(env, origin) {
  try {
    const sql = getSql(env);
    await ensureSchema(sql);
    const rows = await sql`SELECT 1 AS ok`;
    return json(env, origin, 200, {
      ok: true,
      db: rows[0]?.ok === 1,
      hasMaster: true,
      platform: "cloudflare-worker",
    });
  } catch (e) {
    return json(env, origin, 500, { ok: false, error: e.message });
  }
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "*";
    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin, env) });
    }

    const url = new URL(req.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    try {
      if (path === "/api/health" || path === "/health") {
        return await handleHealth(env, origin);
      }
      if (path === "/api/auth" || path === "/auth") {
        if (req.method !== "POST") {
          return json(env, origin, 405, { error: "Method not allowed" });
        }
        return await handleAuth(req, env, origin);
      }
      if (path === "/api/progress" || path === "/progress") {
        if (req.method !== "GET" && req.method !== "PUT") {
          return json(env, origin, 405, { error: "Method not allowed" });
        }
        return await handleProgress(req, env, origin);
      }
      return json(env, origin, 404, {
        error: "Not found",
        routes: ["/api/health", "/api/auth", "/api/progress"],
      });
    } catch (e) {
      return json(env, origin, 500, { error: e.message || "Server error" });
    }
  },
};
