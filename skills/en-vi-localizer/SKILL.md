---
name: en-vi-localizer
description: Localize Markdown and structured locale files from English to natural Vietnamese while preserving syntax, comments, ordering, formatting, placeholders, and technical meaning. Use for README files, documentation, and YAML, JSON, JSONC, or TOML localization resources. Do not use for translating prose into languages other than Vietnamese.
---

# English to Vietnamese Localizer

Translate human-readable English prose and locale values into clear, natural Vietnamese. Preserve each source format as valid, reviewable text.

Before translating, read [references/vietnamese-style-guide.md](references/vietnamese-style-guide.md). Apply its voice, preferred terminology, and UI-writing rules whenever they fit the document's context. Treat the glossary as a contextual default, not a mechanical word replacement table.

## Determine the output

- Use the source file or files named by the user.
- If no output path is given, write a sibling file with `.vi` before the extension, such as `README.vi.md`. For an already language-suffixed name such as `guide.en.md`, use `guide.vi.md`.
- Always keep the source file unchanged. Create or update a separate Vietnamese target file; do not perform in-place translation.
- When a Vietnamese target already exists, preserve intentional target-only content and make focused updates unless the user asks for a full replacement.

### Localization YAML filenames

When the input is a standalone localization YAML file, use these rules instead of the `.vi` suffix convention used for Markdown:

- Name locale files with a `.yaml` extension and a locale identifier based on the [ISO 639-1 language code list](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes), following Firefox localization conventions.
- Prefer the short language code when it is sufficient: use `vi.yaml`, `ko.yaml`, and `fr.yaml`, not `vi-VN.yaml`, `ko-KR.yaml`, or `fr-FR.yaml`.
- Use a full language-region code only when the locale requires a regional distinction, such as `en-US.yaml` or `pt-BR.yaml`. Do not invent a region when a short code is conventional.
- For English-to-Vietnamese localization, map a source such as `en-US.yaml` to the sibling target `vi.yaml`. Do not name it `en-US.vi.yaml` or `vi-VN.yaml` unless the user explicitly requires that project-specific convention.
- Write the target YAML as UTF-8 with LF line endings and exactly one trailing newline. Keep the source file unchanged even when its encoding or line endings differ.
- When unsure about a language code, consult the linked ISO 639 list instead of guessing. Apply the project's established locale convention when it intentionally differs.

## Keep the source and formatting intact

- Treat every source file as read-only. Do not modify its content, metadata, encoding, permissions, or line endings.
- Create the target by copying the source structure, then change only the human-facing text that requires translation.
- Preserve comments exactly as written. Do not translate, rewrite, move, delete, or add comments unless the user explicitly asks for comment localization.
- Preserve key and section order, indentation, blank lines, line wrapping, trailing spaces, quote style, delimiters, and list markers. Preserve the source's final-newline convention except when the localization YAML rule requires exactly one trailing newline in the target.
- For YAML and similar structured text, also preserve anchors, aliases, tags, block scalar indicators, document separators, flow/block style, and inline-comment positions.
- Do not parse and serialize the whole file merely to translate it because serializers can reorder keys, remove comments, normalize quotes, or reformat whitespace. Make the smallest text edits possible and use parsers only for validation when appropriate.
- Preserve the source's encoding and newline convention in ordinary targets unless the user requests normalization. For localization YAML targets, use the required UTF-8 and LF convention without changing the source.
- When translated prose must be longer or shorter, change only the text itself. Do not reflow surrounding paragraphs, tables, mappings, or lists solely for visual alignment.

## Follow the source format

Identify the file format and any project-specific dialect before editing. Project configuration and established repository conventions take priority when they intentionally select a compatible dialect or version.

### YAML

- Use [YAML](https://en.wikipedia.org/wiki/YAML) as an overview and the [YAML 1.2.2 specification](https://yaml.org/spec/1.2.2/) as the syntax authority.
- Translate only human-facing scalar values. Never translate mapping keys, anchors, aliases, tags, directives, or schema-significant values.
- Preserve comments and presentation details through minimal text edits. Validate the result as YAML without serializing the parsed document back over the target.
- Apply the localization YAML filename, UTF-8, LF, and trailing-newline rules above.

### JSON and JSONC

- Follow [RFC 8259](https://www.rfc-editor.org/rfc/rfc8259) for JSON syntax. Treat JSONC as a project-specific JSON extension that permits comments.
- Translate only human-facing string values. Never translate property names, numbers, booleans, `null`, escape sequences, or structural delimiters.
- Standard JSON does not support comments. If the source is JSONC or another commented JSON dialect, preserve every comment and validate with a parser for that dialect rather than a strict JSON parser.
- Preserve property order, indentation, quote and escape style, and trailing-comma convention. Ensure `.json` targets remain valid strict JSON.

### Markdown

- Follow [CommonMark](https://spec.commonmark.org/0.31.2/) unless the project specifies a dialect such as GitHub Flavored Markdown.
- Translate reader-facing prose while preserving Markdown constructs, embedded HTML, frontmatter, code, links, and reference definitions as described in this skill.

### TOML

- Follow the [TOML 1.0.0 specification](https://toml.io/en/v1.0.0).
- Translate only clearly human-facing string values. Never translate keys, table names, dates, numbers, booleans, or syntax-significant strings.
- Preserve comments, dotted-key style, table order, quote style, multiline-string delimiters, whitespace, and trailing commas through minimal text edits, then validate the target as TOML.

### Other structured localization formats

Before editing another structured format, identify its authoritative specification and the project's dialect. Translate only human-facing values, preserve all syntax and comments, and validate with a format-aware tool. If the format or dialect cannot be identified confidently, stop and report what must be confirmed rather than risking a destructive rewrite.

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
2. Confirm the source file is unchanged, using a checksum or version-control diff when available.
3. Confirm comments, key order, whitespace, quote style, line endings, code, placeholders, URLs, link destinations, identifiers, and frontmatter keys are unchanged.
4. Check Markdown fences, tables, lists, links, images, reference definitions, and any structured-data syntax for damage.
5. Search for accidental English remnants, but treat product names and technical terms as intentional when appropriate.
6. Report the output paths and any terminology or anchor decisions that need human review.
