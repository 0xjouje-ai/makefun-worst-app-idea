// SPDX-License-Identifier: MIT
// Writes the worst app idea ever pitched to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "FridgeCam Pro streams a live feed of your fridge's interior to your phone, so busy professionals can check whether they have milk without enduring the twelve-step walk to the kitchen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
