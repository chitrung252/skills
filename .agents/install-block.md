# Canonical installation commands

Use these commands verbatim in user-facing documentation. Change them here first, then update every copy.

## Install from this repository

```bash
npx skills@latest add chitrung252/skills
```

## Install one skill for Codex

```bash
npx skills@latest add chitrung252/skills \
  --skill en-vi-localizer \
  --agent codex
```

Add `--global` to install at user scope.

## Update installed skills

```bash
npx skills@latest update
```

Update only this skill with:

```bash
npx skills@latest update en-vi-localizer
```
