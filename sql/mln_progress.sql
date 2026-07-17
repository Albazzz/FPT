-- Run once in Neon SQL Editor (optional — API also auto-creates table)
CREATE TABLE IF NOT EXISTS mln_progress (
  id TEXT PRIMARY KEY DEFAULT 'default',
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO mln_progress (id, data)
VALUES ('default', '{}'::jsonb)
ON CONFLICT (id) DO NOTHING;
