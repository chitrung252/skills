#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const args = new Set(process.argv.slice(2));

if (args.has("--help") || args.has("-h")) {
  console.log(`Install the Markdown EN to VI Codex skill.

Usage:
  npx locationzation-en-vi             Install for the current user
  npx locationzation-en-vi --project   Install in the current project
  npx locationzation-en-vi --force     Replace an existing installation

Options:
  --project   Install to .agents/skills in the current directory
  --force     Replace the existing skill directory
  -h, --help  Show this help`);
  process.exit(0);
}

const knownArgs = new Set(["--project", "--force"]);
const unknownArgs = [...args].filter((arg) => !knownArgs.has(arg));

if (unknownArgs.length > 0) {
  console.error(`Unknown option: ${unknownArgs.join(", ")}`);
  console.error("Run with --help to see supported options.");
  process.exit(1);
}

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(packageRoot, "locationzation-en-vi");
const skillsRoot = args.has("--project")
  ? join(process.cwd(), ".agents", "skills")
  : join(homedir(), ".agents", "skills");
const destination = join(skillsRoot, "locationzation-en-vi");

if (!existsSync(source)) {
  console.error("The packaged skill files are missing. Please reinstall the npm package.");
  process.exit(1);
}

if (existsSync(destination)) {
  if (!args.has("--force")) {
    console.error(`Skill already exists at ${destination}`);
    console.error("Run again with --force to replace it.");
    process.exit(1);
  }

  rmSync(destination, { recursive: true, force: true });
}

mkdirSync(skillsRoot, { recursive: true });
cpSync(source, destination, { recursive: true });

console.log(`Installed markdown-en-vi-localizer to ${destination}`);
console.log("Invoke it in Codex with $markdown-en-vi-localizer.");
