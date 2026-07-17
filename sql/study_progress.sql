-- Chạy 1 lần trong Neon Console → SQL Editor nếu browser báo "study_progress does not exist"

CREATE TABLE IF NOT EXISTS study_progress (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO study_progress (id, data) VALUES
  ('mln', '{}'::jsonb),
  ('jl', '{}'::jsonb),
  ('wedjfe', '{}'::jsonb)
ON CONFLICT (id) DO NOTHING;

-- kiểm tra
SELECT id, data, updated_at FROM study_progress;
