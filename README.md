# Codex Skills

Repository này chứa các skill Codex có thể tái sử dụng.

## Markdown EN → VI Localizer

`localization-en-vi` chứa skill dịch file Markdown từ tiếng Anh sang tiếng Việt tự nhiên, đồng thời giữ nguyên cấu trúc Markdown, code, URL, placeholder và thuật ngữ kỹ thuật.

Skill đi kèm cẩm nang giọng văn và glossary EN → VI dành cho nội dung sản phẩm/CMS, bao gồm các cách dùng tự nhiên như “chuyên mục”, “kho mã nguồn”, “đường dẫn tĩnh”, “hủy thay đổi”, “trợ năng” và “trình đọc màn hình”.

### Cài cho một project

Chạy tại thư mục gốc của project:

```bash
npx skills@latest add chitrung252/skills \
  --skill markdown-en-vi-localizer \
  --agent codex
```

Skill sẽ được cài vào `.agents/skills/markdown-en-vi-localizer`.

### Cài cho tài khoản hiện tại

```bash
npx skills@latest add chitrung252/skills \
  --skill markdown-en-vi-localizer \
  --agent codex \
  --global
```

CLI `skills` sẽ cài skill vào thư mục skill toàn cục của Codex.

### Sử dụng

```text
Use $markdown-en-vi-localizer to translate docs/getting-started.en.md into Vietnamese.
```

Nếu không chỉ định file đích, skill tạo file kế bên với hậu tố `.vi.md`, ví dụ `README.md` → `README.vi.md`.

## License

[MIT](LICENSE)
