const {
  getSql,
  ensureSchema,
  send,
  readJson,
  verifyToken,
  getBearer,
  corsHeaders,
} = require("./_db");

function authOrFail(req, res, origin) {
  const secret =
    process.env.SESSION_SECRET || process.env.MASTER_CODE || "Namcong9@-session";
  const token = getBearer(req);
  const payload = verifyToken(token, secret);
  if (!payload) {
    send(res, 401, { error: "Chưa đăng nhập cloud hoặc token hết hạn" }, origin);
    return null;
  }
  return payload;
}

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || "*";

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    Object.entries(corsHeaders(origin)).forEach(([k, v]) => res.setHeader(k, v));
    return res.end();
  }

  try {
    if (!authOrFail(req, res, origin)) return;

    const sql = getSql();
    await ensureSchema(sql);

    if (req.method === "GET") {
      const rows = await sql`
        SELECT data, updated_at FROM mln_progress WHERE id = 'default' LIMIT 1
      `;
      const row = rows[0] || { data: {}, updated_at: null };
      return send(
        res,
        200,
        {
          data: row.data || {},
          updatedAt: row.updated_at,
        },
        origin
      );
    }

    if (req.method === "PUT") {
      const body = await readJson(req);
      const data = body.data;
      if (!data || typeof data !== "object" || Array.isArray(data)) {
        return send(res, 400, { error: "data must be an object" }, origin);
      }
      // keep payload bounded
      const raw = JSON.stringify(data);
      if (raw.length > 500000) {
        return send(res, 413, { error: "Payload too large" }, origin);
      }

      const payload = JSON.stringify(data);
      const rows = await sql`
        INSERT INTO mln_progress (id, data, updated_at)
        VALUES ('default', ${payload}::jsonb, now())
        ON CONFLICT (id) DO UPDATE
          SET data = EXCLUDED.data,
              updated_at = now()
        RETURNING data, updated_at
      `;
      const row = rows[0];
      return send(
        res,
        200,
        {
          ok: true,
          data: row.data,
          updatedAt: row.updated_at,
        },
        origin
      );
    }

    return send(res, 405, { error: "Method not allowed" }, origin);
  } catch (e) {
    console.error(e);
    return send(res, 500, { error: e.message || "Progress failed" }, origin);
  }
};
