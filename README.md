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
  --skill markdown-en-vi-localizer \
  --agent codex
```

Thêm `--global` nếu muốn dùng skill trong mọi project.

## Skills

- [`markdown-en-vi-localizer`](./skills/localization-en-vi-md/SKILL.md): Dịch và hiệu đính Markdown từ tiếng Anh sang tiếng Việt tự nhiên, đồng thời bảo toàn cấu trúc, code, liên kết, placeholder và thuật ngữ kỹ thuật.

## License

[MIT](LICENSE)
