/**
 * Restore questionVi / optionsVi / answerDisplay from pre-explain-fix commit,
 * keep new concept/whyCorrect/whyWrong/whatIs/intent/memoryTip.
 *
 * Run: node quiz/tools/_restore_translations.mjs
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const OLD_REV = "8afbb3d";
const SUBJECTS = ["fe", "mln", "jit"];

const TRANSLATION_KEYS = ["questionVi", "optionsVi", "answerDisplay"];
// Keep all other explanation fields from current (new) data

function loadOld(subject) {
  const raw = execSync(`git show ${OLD_REV}:quiz/data/${subject}.json`, {
    encoding: "utf8",
    maxBuffer: 100 * 1024 * 1024,
  });
  // strip BOM if any
  return JSON.parse(raw.replace(/^\uFEFF/, ""));
}

function writeBank(subject, data) {
  const dir = path.join(root, "data");
  fs.writeFileSync(path.join(dir, `${subject}.json`), JSON.stringify(data));
  fs.writeFileSync(
    path.join(dir, `${subject}.js`),
    `// Auto-generated — translations restored from ${OLD_REV}, explains kept\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(subject)}] = ${JSON.stringify(data.questions)};\n`
  );
}

const report = {};

for (const subject of SUBJECTS) {
  const old = loadOld(subject);
  const cur = JSON.parse(
    fs.readFileSync(path.join(root, "data", `${subject}.json`), "utf8")
  );
  const oldById = new Map(old.questions.map((q) => [q.id, q]));

  let restored = 0;
  let missingOld = 0;
  let changedQvi = 0;
  let changedOpts = 0;
  let changedAns = 0;

  for (const q of cur.questions) {
    const o = oldById.get(q.id);
    if (!o?.explanation) {
      missingOld++;
      continue;
    }
    const oe = o.explanation;
    const ne = q.explanation || (q.explanation = {});

    // Only restore if old had real translation fields
    if (oe.questionVi != null && oe.questionVi !== ne.questionVi) {
      ne.questionVi = oe.questionVi;
      changedQvi++;
      restored++;
    } else if (oe.questionVi != null && ne.questionVi == null) {
      ne.questionVi = oe.questionVi;
      changedQvi++;
      restored++;
    }

    if (oe.optionsVi && typeof oe.optionsVi === "object") {
      const before = JSON.stringify(ne.optionsVi || {});
      ne.optionsVi = { ...oe.optionsVi };
      if (before !== JSON.stringify(ne.optionsVi)) {
        changedOpts++;
        restored++;
      }
    }

    if (oe.answerDisplay != null && oe.answerDisplay !== ne.answerDisplay) {
      ne.answerDisplay = oe.answerDisplay;
      changedAns++;
      restored++;
    }
  }

  cur.upgradedAt = new Date().toISOString();
  cur.explainPass = String(cur.explainPass || "") + "+restore-translations-" + OLD_REV.slice(0, 7);
  writeBank(subject, cur);

  report[subject] = {
    total: cur.questions.length,
    missingOld,
    changedQvi,
    changedOpts,
    changedAns,
  };
}

// spot check
function sample(subject, id) {
  const cur = JSON.parse(
    fs.readFileSync(path.join(root, "data", `${subject}.json`), "utf8")
  );
  const old = loadOld(subject);
  const cq = cur.questions.find((x) => x.id === id);
  const oq = old.questions.find((x) => x.id === id);
  return {
    id,
    qViNow: (cq?.explanation?.questionVi || "").slice(0, 80),
    qViOld: (oq?.explanation?.questionVi || "").slice(0, 80),
    matchQvi: cq?.explanation?.questionVi === oq?.explanation?.questionVi,
    conceptKept: (cq?.explanation?.concept || "").slice(0, 60),
    optsViMatch:
      JSON.stringify(cq?.explanation?.optionsVi) ===
      JSON.stringify(oq?.explanation?.optionsVi),
  };
}

console.log(
  JSON.stringify(
    {
      report,
      samples: {
        fe1: sample("fe", 1),
        fe432: sample("fe", 432),
        fe68: sample("fe", 68),
        mln2: sample("mln", 2),
        jit299: sample("jit", 299),
      },
    },
    null,
    2
  )
);
