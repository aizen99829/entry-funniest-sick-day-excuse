import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FINAL_EXCUSE =
  "I can't come in today — my bed filed a formal complaint about my absence, and HR (my cat) approved the leave on the spot.";

const ENTRY_PATH = "/output/entry.txt";
const MAX_ENTRY_LENGTH = 200;

function writeEntry(): void {
  if (FINAL_EXCUSE.includes("\n") || FINAL_EXCUSE.length >= MAX_ENTRY_LENGTH) {
    throw new Error("Entry must be a single line under 200 characters.");
  }
  mkdirSync(dirname(ENTRY_PATH), { recursive: true });
  writeFileSync(ENTRY_PATH, FINAL_EXCUSE + "\n", "utf8");
}

writeEntry();
