-- Device visitors (Quiz Hub) — auto-created by StudyCloud.ensureSchema
-- Manual: chạy trong Neon SQL Editor nếu CREATE từ browser bị chặn.

CREATE TABLE IF NOT EXISTS site_visits (
  device_id TEXT PRIMARY KEY,
  first_seen TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_seen TIMESTAMPTZ NOT NULL DEFAULT now(),
  hit_count INT NOT NULL DEFAULT 1,
  user_agent TEXT,
  last_subject TEXT
);

-- Tổng thiết bị
-- SELECT COUNT(*) FROM site_visits;

-- Active 24h
-- SELECT COUNT(*) FROM site_visits WHERE last_seen > now() - interval '1 day';
