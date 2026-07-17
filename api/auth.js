const {
  send,
  readJson,
  signToken,
  corsHeaders,
} = require("./_db");

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || "*";

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    Object.entries(corsHeaders(origin)).forEach(([k, v]) => res.setHeader(k, v));
    return res.end();
  }

  if (req.method !== "POST") {
    return send(res, 405, { error: "Method not allowed" }, origin);
  }

  try {
    // Personal study default; override with env MASTER_CODE on Vercel if needed
    const master = process.env.MASTER_CODE || "Namcong9@";
    const secret =
      process.env.SESSION_SECRET || process.env.MASTER_CODE || "Namcong9@-session";

    const body = await readJson(req);
    const code = String(body.code || "").trim();
    if (!code) {
      return send(res, 400, { error: "Nhập mã Master Control" }, origin);
    }

    const crypto = require("crypto");
    const a = Buffer.from(code);
    const b = Buffer.from(master);
    // length-safe compare
    let ok = a.length === b.length;
    if (ok) {
      ok = crypto.timingSafeEqual(a, b);
    } else {
      // dummy compare to reduce timing leak on length
      crypto.timingSafeEqual(Buffer.alloc(32), Buffer.alloc(32));
      ok = false;
    }

    if (!ok) {
      return send(res, 401, { error: "Mã không đúng" }, origin);
    }

    const days = Number(process.env.SESSION_TTL_DAYS || 90);
    const exp = Math.floor(Date.now() / 1000) + days * 24 * 3600;
    const token = signToken({ sub: "master", exp }, secret);

    return send(
      res,
      200,
      {
        ok: true,
        token,
        expiresAt: new Date(exp * 1000).toISOString(),
        mode: "cloud",
      },
      origin
    );
  } catch (e) {
    console.error(e);
    return send(res, 500, { error: e.message || "Auth failed" }, origin);
  }
};
