# Vietnamese localization style guide

Use this guide to make English-to-Vietnamese localization sound as though it was originally written in Vietnamese. Context and technical accuracy take priority over literal word matching.

## Priorities

Apply these priorities in order:

1. Preserve the feature's meaning and the reader's intended action.
2. Write natural, concise Vietnamese that is easy to scan.
3. Keep terminology consistent throughout the project.
4. Preserve variables, code, links, tags, and technical syntax exactly.
5. Follow the English wording closely only when doing so does not make Vietnamese awkward.

## Voice and mechanics

- Use clear, friendly, professional, broadly understood Vietnamese.
- Address the reader as “bạn” only when direct address is useful. Avoid “quý khách”, “người dùng”, and “chúng tôi” when the sentence does not need a subject.
- Prefer active phrasing. Avoid overusing “được”, “đã được”, “tiến hành”, and “thực hiện”.
- Do not reproduce English Title Case. Use Vietnamese sentence case, except for proper names, abbreviations, and official feature names.
- Use the single ellipsis character `…`, not three periods `...`, in translated prose. Do not change literal code or syntax.
- Do not add a period to a short label, button, or heading. Use normal punctuation for complete sentences.
- Preserve names such as GitHub, OAuth, JavaScript, Markdown, YAML, AVIF, WebP, API names, configuration properties, file extensions, error codes, and units such as KB, MB, GB, and TB.
- Read the Vietnamese result independently from the source. Rewrite any phrase that still sounds like English syntax with Vietnamese words substituted into it.

## UI and action wording

- Buttons and menu actions should use short verbs: “Lưu”, “Xóa”, “Đổi tên”, “Tải lên”.
- Translate `New` as “Tạo mới” when it starts a creation flow.
- Translate `Done` as “Xong” and `Later` as “Để sau” when used as short actions.
- Use “Đang …” for an operation in progress: “Đang lưu…”, “Đang tải…”.
- Prefer “Đã …” for a completed result: “Đã lưu khóa API.”
- Write destructive confirmations as “Bạn có chắc chắn muốn … không?” and name what will be affected when the context requires it.
- Translate `Couldn’t …` or `Failed to …` as “Không thể …”, not “Đã thất bại khi …”.
- Translate `Please try again` as “Vui lòng thử lại.” and `Please try again later` as “Vui lòng thử lại sau.”
- Error messages should state what could not be done and add a next step only when supported by the source or product behavior.
- Do not add nouns already obvious from the interface. For example, prefer “Đổi tên” to “Đổi tên tệp” when the dialog already makes the object clear.
- Accessibility text may be longer than a visible label. Preserve enough context for a screen-reader user to understand position, state, or result.

## Preferred terminology

Use these as defaults after checking the surrounding context and any project-specific glossary.

| English               | Preferred Vietnamese            | Context                                                                                   |
| --------------------- | ------------------------------- | ----------------------------------------------------------------------------------------- |
| entry / entries       | bài viết                        | For editorial content. Use “mục nội dung” if the system also manages non-article records. |
| collection            | chuyên mục                      | For CMS content grouping; avoid the literal “bộ sưu tập” in this context.                 |
| asset                 | tệp                             | Use “ảnh” when it is certainly an image and “tệp phương tiện” for a Media group.          |
| asset library         | thư viện tệp                    | Avoid “thư viện tài sản”.                                                                 |
| repository            | kho mã nguồn                    | “Kho Git” is acceptable in compact, clearly technical contexts.                           |
| backend / Git backend | dịch vụ Git                     | Avoid the literal “phần phụ trợ” when referring to GitHub, GitLab, or Forgejo.            |
| branch                | nhánh                           | Standard Git terminology.                                                                 |
| commit                | bản cập nhật / lần cập nhật     | Keep `commit` in deeply technical documentation where precision requires it.              |
| slug                  | đường dẫn tĩnh                  | In technical docs, introduce it once as “slug (đường dẫn tĩnh)” if useful.                |
| publish               | xuất bản                        | For content or changes.                                                                   |
| deploy                | triển khai                      | Keep distinct from “xuất bản”.                                                            |
| draft                 | bản nháp                        | Noun or status.                                                                           |
| editorial workflow    | quy trình biên tập              | Use sentence case unless it is an official feature name.                                  |
| local workflow        | quy trình cục bộ                | “Chế độ làm việc cục bộ” may be more natural in explanatory prose.                        |
| pending deletion      | đang chờ xóa                    | Use as a status.                                                                          |
| discard changes       | hủy thay đổi                    | Prefer this to “bỏ thay đổi” or “bỏ qua”.                                                 |
| cancel                | hủy                             | For a dialog or unfinished operation.                                                     |
| clear                 | xóa nội dung / xóa lựa chọn     | Select by the object being cleared; do not automatically treat it as `delete`.            |
| remove                | gỡ / loại bỏ                    | Use “gỡ” for a link, key, or attached item. Use “xóa” only when data is deleted.          |
| delete                | xóa                             | For destructive deletion.                                                                 |
| restore               | khôi phục                       | For data or versions.                                                                     |
| replace               | thay thế                        | For files and values.                                                                     |
| settings              | cài đặt                         | “Thiết lập” can appear naturally in prose, but do not mix terms arbitrarily.              |
| preferences           | tùy chọn                        | Use “Cài đặt” if it names the entire Settings dialog.                                     |
| menu                  | trình đơn                       | Keep the project's established choice if it consistently uses `menu`.                     |
| toolbar               | thanh công cụ                   | Also use in accessibility text.                                                           |
| sidebar               | thanh bên                       | Avoid “thanh cạnh”.                                                                       |
| preview               | bản xem trước                   | For content, images, and files.                                                           |
| field                 | trường                          | In forms and configuration.                                                               |
| label                 | nhãn                            | Do not translate as “tên” when it is an interface label.                                  |
| placeholder           | phần giữ chỗ                    | Keep `placeholder` in technical prose when clearer; never translate placeholder syntax.   |
| authentication        | xác thực                        | Keep distinct from authorization.                                                         |
| authorization         | cấp quyền / ủy quyền            | Prefer “cấp quyền” for user-facing actions and “ủy quyền” for technical OAuth contexts.   |
| access token          | mã truy cập                     | Keep consistent across the document.                                                      |
| Personal Access Token | mã truy cập cá nhân             | Preserve capitalization only when the product treats it as an official name.              |
| API key               | khóa API                        | Avoid “mã API”.                                                                           |
| clipboard             | bộ nhớ tạm                      | Common operating-system terminology.                                                      |
| browser console       | bảng điều khiển của trình duyệt | Prefer this natural construction.                                                         |
| stock photo           | ảnh có sẵn / ảnh stock          | Prefer “ảnh có sẵn” for general audiences.                                                |
| accessibility         | trợ năng                        | Standard software terminology.                                                            |
| screen reader         | trình đọc màn hình              | Avoid “bộ đọc màn hình”.                                                                  |
| webhook               | webhook                         | Keep the technical term.                                                                  |
| hook URL              | URL webhook                     | Never translate it literally as “URL móc”.                                                |

## Important distinctions

- `publish` is “xuất bản”; `deploy` is “triển khai”. They describe different operations.
- `cancel` stops the current operation; `discard changes` abandons edits; `clear` empties a value or selection; `remove` detaches something; `delete` destroys data. Translate according to the actual effect.
- Use “tệp” as the general word for a file. Do not use “tài sản” merely because the English source says `asset`.
- Prefer “Không tìm thấy kết quả nào.” for `No results found.`
- Prefer “Đăng nhập bằng {$service}” for `Sign in with {$service}` when a placeholder of that form appears in prose. Preserve the placeholder exactly.
- Avoid mechanical constructions such as “được cung cấp bởi” when “Phát triển bởi”, “Vận hành bởi”, or another active phrase is more accurate. Do not choose among them without knowing the relationship.

## Context wins

Do not apply a glossary entry blindly. Inspect headings, nearby paragraphs, screenshots, comments, and existing Vietnamese files. If a word changes meaning by context, translate the intended action or object rather than enforcing a one-to-one mapping. When the correct wording depends on an unseen interface or unknown product behavior, retain the smallest ambiguous technical term and flag it for review.
