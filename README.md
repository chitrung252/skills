# Agent Skills

[![skills.sh](https://skills.sh/b/chitrung252/skills)](https://skills.sh/chitrung252/skills)

Bộ sưu tập agent skills mình sử dụng trong các dự án thực tế với Codex và những coding agent tương thích.

Mỗi skill được thiết kế nhỏ gọn, tập trung vào một công việc cụ thể, dễ tùy chỉnh và có thể kết hợp với các skill khác. Repository sẽ tiếp tục được bổ sung khi những workflow mới đủ ổn định để tái sử dụng.

## Cài đặt

```bash
npx skills@latest add chitrung252/skills
```

Chọn skill cần cài và coding agent bạn đang sử dụng. Để cài trực tiếp một skill cho Codex:

```bash
npx skills@latest add chitrung252/skills \
  --skill en-vi-localizer \
  --agent codex
```

Thêm `--global` nếu muốn dùng skill trong mọi project.

## Skills

- [`en-vi-localizer`](./skills/en-vi-localizer/SKILL.md): Dịch và hiệu đính Markdown cùng các file locale YAML, JSON, JSONC và TOML từ tiếng Anh sang tiếng Việt tự nhiên mà không làm thay đổi cấu trúc kỹ thuật.

## License

[MIT](LICENSE)
