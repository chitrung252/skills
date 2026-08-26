---
name: markdown-en-vi-localizer
description: Localize Markdown files from English to natural Vietnamese while preserving Markdown structure, code, links, identifiers, placeholders, and technical meaning. Use for translating or maintaining Vietnamese versions of README files, documentation, guides, changelogs, and other .md content. Do not use for translating prose into languages other than Vietnamese.
---

# Markdown EN to VI Localizer

Translate the human-readable English prose in Markdown files into clear, natural Vietnamese. Preserve the document as valid, reviewable Markdown.

Before translating, read [references/vietnamese-style-guide.md](references/vietnamese-style-guide.md). Apply its voice, preferred terminology, and UI-writing rules whenever they fit the document's context. Treat the glossary as a contextual default, not a mechanical word replacement table.

## Determine the output

- Use the source file or files named by the user.
- If no output path is given, write a sibling file with `.vi` before the extension, such as `README.vi.md`. For an already language-suffixed name such as `guide.en.md`, use `guide.vi.md`.
- Do not overwrite the source unless the user explicitly asks for an in-place translation.
- When a Vietnamese target already exists, preserve intentional target-only content and make focused updates unless the user asks for a full replacement.

## Translate selectively

Translate prose written for readers, including headings, paragraphs, list text, blockquotes, image alt text, table prose, callout titles, and human-readable link labels.

Keep these elements unchanged unless the user specifically requests otherwise:

- YAML/TOML frontmatter keys, while translating only clearly human-facing string values
- fenced and indented code blocks
- inline code, commands, file paths, package names, API names, identifiers, flags, and environment variables
- link and image destinations, reference identifiers, HTML tags and attributes, badges, raw URLs, and email addresses
- template syntax and placeholders such as `{{ name }}`, `${VALUE}`, `%s`, `{0}`, and `:param`
- product names, trademarks, version numbers, and established technical terms that Vietnamese developers normally retain in English

Never translate text inside an element merely because it contains English. Protect the element first, then translate the surrounding prose.

## Preserve structure and meaning

- Retain heading levels, list nesting, task states, tables, callouts, footnotes, reference definitions, comments, and intentional whitespace.
- Do not add, remove, summarize, reorder, or reinterpret content.
- Preserve emphasis and link boundaries. A translated sentence may be reordered for natural Vietnamese, but its Markdown constructs must remain attached to the correct meaning.
- Preserve relative and absolute link targets. If translated headings change generated anchors, update only same-document fragment links that point to those headings, using the renderer's usual slug rules when they are clear. Otherwise leave the target unchanged and report the uncertainty.
- Keep terminology consistent across all files in the same request. Prefer terminology already used in an existing Vietnamese version or glossary.
- When repository terminology does not already decide the wording, prefer the translations in the Vietnamese style guide.
- Use natural Vietnamese rather than word-for-word translation. Match the source tone and audience, keep technical meaning exact, and avoid unnecessarily formal or promotional language.
- Use Vietnamese punctuation and sentence flow while retaining code-adjacent punctuation when changing it would make a command or identifier ambiguous.

## Handle ambiguity

Inspect nearby content and repository terminology before choosing a translation. Keep a term in English when translating it would be less precise or unfamiliar to the intended technical audience. If a genuinely consequential ambiguity cannot be resolved from context, leave the smallest affected term unchanged and mention it in the handoff rather than guessing.

## Verify the result

Review the source and target together before finishing:

1. Confirm every reader-facing English passage was handled and no source content disappeared.
2. Confirm code, placeholders, URLs, link destinations, identifiers, and frontmatter keys are unchanged.
3. Check Markdown fences, tables, lists, links, images, and reference definitions for structural damage.
4. Search for accidental English remnants, but treat product names and technical terms as intentional when appropriate.
5. Report the output paths and any terminology or anchor decisions that need human review.
