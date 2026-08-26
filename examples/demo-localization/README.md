# Skill installation demo

Run this command from this directory to install the localization skill for Codex:

```bash
npx skills@latest add chitrung252/skills \
  --skill en-vi-localizer \
  --agent codex \
  --copy \
  --yes
```

The installer writes the skill to `.agents/skills/en-vi-localizer`. The generated installation files are ignored by Git so they do not create duplicate discoverable skills inside this repository.
