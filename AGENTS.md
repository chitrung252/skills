# Repository rules

This repository contains reusable agent skills under `skills/`.

## Skill structure

- Store each skill at `skills/<skill-name>/SKILL.md`.
- Keep the folder name identical to the `name` in the skill frontmatter.
- Keep skill names lowercase and hyphen-separated.
- Keep detailed, conditional guidance in the skill's `references/` directory and link it from `SKILL.md`.
- Keep `agents/openai.yaml` consistent with the skill name, description, scope, and invocation behavior.

## Repository indexes

- Every public skill must have a one-line entry in the top-level `README.md` with its name linked to its `SKILL.md`.
- Copy installation and update commands from [`.agents/install-block.md`](./.agents/install-block.md) so user-facing instructions stay consistent.
- When a skill is renamed, update its folder, frontmatter name, UI metadata, README entry, install examples, and references in the same change.

## Validation

- Confirm each skill folder matches its frontmatter `name`, has `agents/openai.yaml`, and is linked from the top-level `README.md`.
- Run `npx skills@latest add . --list` when discovery behavior changes.
- Do not commit generated installations such as `.agents/skills/` or `skills-lock.json` inside example projects.

Skills are model-invoked by default. Make a skill explicit-only only when that interaction model is intentional, and keep the relevant frontmatter and `agents/openai.yaml` policy in sync.
