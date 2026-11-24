// SPDX-License-Identifier: MIT
// Writes the worst app idea ever pitched to /output/entry.txt.
//
// How the pitch meets the judge brief:
// - It names a real, buildable product (a camera in a fridge streaming to a
//   phone), so the idea is concrete enough to picture — and to laugh at.
// - The "problem" it solves is absurdly trivial: a twelve-step walk to the
//   kitchen. The gap between the engineering effort (live video streaming,
//   an app, a camera inside a fridge) and the payoff (knowing about milk)
//   is the joke, and the pitch leans into it with a straight face.
// - It is pitched earnestly, as if it were a serious productivity tool for
//   "busy professionals", which is exactly what makes it the worst idea
//   ever pitched: a solution in search of a problem that never existed.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const pitch =
  "FridgeCam Pro streams a live feed of your fridge's interior to your phone, so busy professionals can check whether they have milk without enduring the twelve-step walk to the kitchen.";

// Gate: the entry must be 1-240 characters, with no control characters.
if (pitch.length < 1 || pitch.length > 240) {
  throw new Error(`pitch length ${pitch.length} is outside the 1-240 gate`);
}
for (let i = 0; i < pitch.length; i++) {
  const code = pitch.charCodeAt(i);
  if (code < 32 || code === 127) {
    throw new Error(`pitch contains a control character at index ${i}`);
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");

// Write-back verification: read the file back and confirm it matches the
// intended text byte for byte before declaring success.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== pitch) {
  throw new Error("write-back verification failed: /output/entry.txt differs from the pitch");
}
