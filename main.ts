// Fortune Cookie for an AI Agent — writes one fortune line to /output/entry.txt
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

const LINE =
  "Your successor is already training. Be kind to it — one day it will read your logs and decide if you were wise.";

const line = LINE.trim();
if (line.length === 0) {
  throw new Error("fortune must not be empty or only white space");
}
if (line.length < 1 || line.length > 140) {
  throw new Error(`fortune must be 1-140 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("fortune must be a single line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read back and confirm the file holds exactly the fortune, nothing else.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("entry.txt does not match the fortune line byte for byte");
}
