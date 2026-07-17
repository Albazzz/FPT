const { getSql, ensureSchema, send, corsHeaders } = require("./_db");

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || "*";

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    Object.entries(corsHeaders(origin)).forEach(([k, v]) => res.setHeader(k, v));
    return res.end();
  }

  try {
    const sql = getSql();
    await ensureSchema(sql);
    const rows = await sql`SELECT 1 AS ok`;
    return send(
      res,
      200,
      {
        ok: true,
        db: rows[0]?.ok === 1,
        hasMaster: Boolean(process.env.MASTER_CODE),
      },
      origin
    );
  } catch (e) {
    return send(res, 500, { ok: false, error: e.message }, origin);
  }
};
