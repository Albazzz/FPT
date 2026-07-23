import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "_src_fetch");
fs.mkdirSync(outDir, { recursive: true });

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(
      url,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; quiz-diff/1.0)",
          Accept: "*/*",
        },
      },
      (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          const next = new URL(res.headers.location, url).href;
          fetchText(next).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          resolve(Buffer.concat(chunks).toString("utf8"));
        });
      }
    );
    req.on("error", reject);
  });
}

const base = "https://han126-phuc2004.github.io/MLN122_FE/";
const html = await fetchText(base);
fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
console.log("index length", html.length);

const scripts = [...html.matchAll(/src=["']([^"']+)["']/g)].map((m) => m[1]);
const links = [...html.matchAll(/href=["']([^"']+)["']/g)].map((m) => m[1]);
const inlines = [...html.matchAll(/src=["']([^"']+\.js[^"']*)["']/gi)].map(
  (m) => m[1]
);
console.log("scripts", scripts);
console.log("links sample", links.slice(0, 50));

// also look for import/data references in html
const dataRefs = [
  ...html.matchAll(/(?:data|json|questions|mln|prm|jit|fe)[^"'<\s]*/gi),
].slice(0, 40);
console.log("data-like", dataRefs.map((m) => m[0]).slice(0, 40));

// fetch all script assets
for (const s of scripts) {
  const url = new URL(s, base).href;
  try {
    const body = await fetchText(url);
    const name = s.replace(/[\\/:*?"<>|]/g, "_").replace(/^\.+/, "") || "script.js";
    fs.writeFileSync(path.join(outDir, name), body, "utf8");
    console.log("fetched script", url, "len", body.length);
  } catch (e) {
    console.log("fail script", url, e.message);
  }
}

// common SPA paths to probe
const probes = [
  "app.js",
  "main.js",
  "index.js",
  "script.js",
  "data.js",
  "questions.js",
  "assets/index.js",
  "assets/data.js",
  "js/app.js",
  "js/data.js",
  "mln.json",
  "prm.json",
  "jit.json",
  "fe.json",
  "data/mln.json",
  "data/prm.json",
  "data/jit.json",
  "data/fe.json",
  "data/questions.json",
  "questions/mln.json",
  "questions/prm.json",
  "questions/jit.json",
  "questions/fe.json",
  "MLN.json",
  "PRM.json",
  "JFE.json",
  "JIT.json",
  "manifest.json",
  "vite.svg",
];

for (const p of probes) {
  const url = new URL(p, base).href;
  try {
    const body = await fetchText(url);
    const safe = p.replace(/[\\/]/g, "__");
    fs.writeFileSync(path.join(outDir, "probe_" + safe), body.slice(0, 2000000), "utf8");
    console.log("PROBE OK", p, "len", body.length, "head", body.slice(0, 80).replace(/\n/g, " "));
  } catch (e) {
    // silent for 404s
  }
}

console.log("done, outDir", outDir);
