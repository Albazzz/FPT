const { neon } = require("@neondatabase/serverless");

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("Missing DATABASE_URL");
  }
  return neon(url);
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

function corsHeaders(origin) {
  const allowed = (process.env.CORS_ORIGIN || "*")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  let allow = "*";
  if (allowed.length && allowed[0] !== "*") {
    allow = allowed.includes(origin) ? origin : allowed[0];
  }
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

function send(res, status, body, origin) {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    ...corsHeaders(origin || "*"),
  };
  res.statusCode = status;
  Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));
  res.end(JSON.stringify(body));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1e6) {
        reject(new Error("Body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

/** Simple HMAC token: base64url(payload).base64url(sig) */
function b64url(buf) {
  return Buffer.from(buf)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function signToken(payload, secret) {
  const crypto = require("crypto");
  const body = b64url(JSON.stringify(payload));
  const sig = b64url(
    crypto.createHmac("sha256", secret).update(body).digest()
  );
  return `${body}.${sig}`;
}

function verifyToken(token, secret) {
  const crypto = require("crypto");
  if (!token || typeof token !== "string" || !token.includes(".")) return null;
  const [body, sig] = token.split(".");
  const expect = b64url(
    crypto.createHmac("sha256", secret).update(body).digest()
  );
  const a = Buffer.from(sig || "");
  const b = Buffer.from(expect);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const pad = body.length % 4 === 0 ? "" : "=".repeat(4 - (body.length % 4));
    const b64 = body.replace(/-/g, "+").replace(/_/g, "/") + pad;
    const json = JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
    if (!json || !json.exp || Date.now() / 1000 > json.exp) return null;
    return json;
  } catch {
    return null;
  }
}

function getBearer(req) {
  const h = req.headers.authorization || req.headers.Authorization || "";
  const m = String(h).match(/^Bearer\s+(.+)$/i);
  return m ? m[1].trim() : "";
}

module.exports = {
  getSql,
  ensureSchema,
  corsHeaders,
  send,
  readJson,
  signToken,
  verifyToken,
  getBearer,
};
