# Codex Skills

Repository này chứa các skill Codex có thể tái sử dụng.

## Markdown EN → VI Localizer

`locationzation-en-vi` chứa skill dịch file Markdown từ tiếng Anh sang tiếng Việt tự nhiên, đồng thời giữ nguyên cấu trúc Markdown, code, URL, placeholder và thuật ngữ kỹ thuật.

Skill đi kèm cẩm nang giọng văn và glossary EN → VI dành cho nội dung sản phẩm/CMS, bao gồm các cách dùng tự nhiên như “chuyên mục”, “kho mã nguồn”, “đường dẫn tĩnh”, “hủy thay đổi”, “trợ năng” và “trình đọc màn hình”.

### Cài cho một project

Clone repository rồi sao chép skill vào thư mục skill của project:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL> /tmp/codex-skills
mkdir -p .agents/skills
cp -R /tmp/codex-skills/locationzation-en-vi .agents/skills/
```

Nếu project của bạn đang dùng quy ước `.codex/skills`, hãy thay `.agents/skills` trong lệnh trên bằng `.codex/skills`.

### Cài cho tài khoản hiện tại

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL> /tmp/codex-skills
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R /tmp/codex-skills/locationzation-en-vi "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Thay `<YOUR_GITHUB_REPOSITORY_URL>` bằng URL repository sau khi bạn public lên GitHub.

### Sử dụng

```text
Use $markdown-en-vi-localizer to translate docs/getting-started.en.md into Vietnamese.
```

Nếu không chỉ định file đích, skill tạo file kế bên với hậu tố `.vi.md`, ví dụ `README.md` → `README.vi.md`.

## License

[MIT](LICENSE)
