# Feature: 50 bài tập JavaScript (dễ → khó) + theo dõi tiến độ

## Objective

Bổ sung **50 bài tập viết hàm** từ file Excel `JavaScript_50_Bai_Tap_Thuan_Tu_De_Den_Kho.xlsx` vào menu workshop `javascripting`, để học viên làm bài trong terminal và **tự theo dõi tiến độ** (checkmark) mỗi khi `verify` đạt.

## Target Users

- Học viên Việt Nam học JS cơ bản → trung cấp qua terminal workshop
- Giảng viên dùng fork local làm bài tập lớp (tiếng Việt)

## Quyết định đã chốt (Discovery)

| # | Câu hỏi | Quyết định |
|---|---------|------------|
| 1 | Menu vs bài cũ | **A** — Append 50 bài sau 20 bài hiện có; giữ nguyên bài cũ |
| 2 | Format verify | **A** — Học viên export hàm; runner gọi test cases |
| 3 | Ngôn ngữ | **A** — Chỉ tiếng Việt (MVP) |
| 4 | Solution | **A** — Full code lời giải |
| 5 | Phạm vi | **A** — Đủ 50 bài + progress trong iteration này |

## Core Features

### 1. Đăng ký 50 bài vào menu (append)

**Acceptance criteria:**
- `menu.json` giữ 20 key hiện tại, thêm 50 key mới phía sau
- Mỗi key map sang thư mục `problems/<kebab-case>/` theo quy ước hiện có (`NAME` → `name`)
- `i18n/vi.json` có đủ `exercise.<KEY>` — tên hiển thị tiếng Việt, có số thứ tự dễ nhận biết (vd: `01. Chuyển đổi nhiệt độ`)
- Chạy `javascripting` → menu cuộn được tới đủ 70 mục; 20 bài cũ vẫn verify như cũ

### 2. Verify theo hàm + test cases (không phụ thuộc stdout)

**Acceptance criteria:**
- Học viên nộp file JS `module.exports = <tênHàm>` (hoặc export đúng tên hàm đã nêu trong đề)
- Runner `require` file học viên, gọi hàm với các case trong `tests.js` của bài
- Pass khi **tất cả** case khớp (deep equality cho object/array; quy ước làm tròn/string theo đề)
- Fail hiển thị thông báo tiếng Việt + case lỗi (input kỳ vọng / actual) qua troubleshooting
- Không dùng `eval` / `Function()` với input học viên — chỉ `require` file path đã chọn

### 3. Nội dung đề bài tiếng Việt + full solution

**Acceptance criteria:**
- Mỗi bài có: `problem_vi.md`, `solution_vi.md`, `solutions/<slug>/index.js`, `tests.js`
- Nội dung lấy từ Excel: giới thiệu khái niệm, yêu cầu, ví dụ I/O, gợi ý (có thể đưa gợi ý vào đề hoặc solution notes)
- `solution_vi.md` / solution path hiển thị full code đạt yêu cầu (như bài hiện tại)
- Chỉ cần file `_vi` (MVP); không bắt buộc multi-locale khác

### 4. Theo dõi tiến độ tự động

**Acceptance criteria:**
- Khi `javascripting verify <file.js>` đạt, workshopper đánh dấu bài **ĐÃ HOÀN THÀNH** (hành vi sẵn có của `workshopper-adventure`)
- Progress persist qua storage hiện tại (`~/.config/javascripting`)
- Menu / progress view phản ánh đúng số bài hoàn thành trên tổng 70

### 5. Danh sách 50 bài (nguồn Excel)

| STT | Chủ đề | Tên bài | Hàm |
|-----|--------|---------|-----|
| 01 | Biến & Toán tử | Chuyển đổi nhiệt độ | `celsiusToFahrenheit` |
| 02 | Câu lệnh điều kiện | Kiểm tra năm nhuận | `isLeapYear` |
| 03 | Vòng lặp | Tính tổng số lẻ | `sumOfOdds` |
| 04 | Câu lệnh điều kiện | Xếp loại học lực | `classifyGrade` |
| 05 | Mảng | Tìm số nhỏ nhất | `findMin` |
| 06 | Chuỗi | Đếm số ký tự khoảng trắng | `countSpaces` |
| 07 | Mảng | Tính trung bình cộng | `calculateAverage` |
| 08 | Vòng lặp | In bảng cửu chương n | `multiplicationTable` |
| 09 | Chuỗi | Kiểm tra đuôi file | `checkExtension` |
| 10 | Toán học | Tính giai thừa | `factorial` |
| 11 | Chuỗi | Viết hoa chữ cái đầu | `capitalizeWords` |
| 12 | Mảng | Loại bỏ phần tử trùng lặp | `removeDuplicates` |
| 13 | Đối tượng | Tìm học sinh xuất sắc | `getTopStudent` |
| 14 | Chuỗi | Đảo ngược chuỗi | `reverseString` |
| 15 | Mảng | Tìm số lớn thứ hai | `findSecondLargest` |
| 16 | Thuật toán | Kiểm tra số nguyên tố | `isPrime` |
| 17 | Chuỗi | Kiểm tra Palindrome | `isPalindrome` |
| 18 | Đối tượng | Đếm số lần xuất hiện ký tự | `countChars` |
| 19 | Mảng | Gộp hai mảng tăng dần | `mergeSortedArrays` |
| 20 | Mảng | Tìm phần tử chung của hai mảng | `findIntersection` |
| 21 | Toán học | Tìm ước số chung lớn nhất | `findGCD` |
| 22 | Mảng | Cắt mảng thành các phần nhỏ | `chunkArray` |
| 23 | Chuỗi | Cắt ngắn chuỗi văn bản | `truncateString` |
| 24 | Mảng | Di chuyển số 0 về cuối mảng | `moveZeros` |
| 25 | Mảng | Kiểm tra mảng con | `isSubset` |
| 26 | Đối tượng | Gộp hai đối tượng cấu trúc | `mergeObjects` |
| 27 | Toán học | Tính số Fibonacci thứ n | `fibonacci` |
| 28 | Chuỗi | Tìm từ dài nhất | `findLongestWord` |
| 29 | Mảng | Đảo vị trí hai phần tử | `swapElements` |
| 30 | Mảng | Lọc mảng theo điều kiện | `customFilter` |
| 31 | Thuật toán | Tìm cặp số có tổng mục tiêu | `twoSum` |
| 32 | Đệ quy | Làm phẳng mảng lồng nhau | `flattenArray` |
| 33 | Chuỗi | Kiểm tra Anagram | `isAnagram` |
| 34 | Đối tượng | Truy xuất giá trị lồng sâu | `getNestedValue` |
| 35 | Thuật toán | Mã hóa Caesar Cipher | `caesarCipher` |
| 36 | Mảng | Tìm mảng con có tổng lớn nhất | `maxSubArray` |
| 37 | Thuật toán | Run-length encoding | `runLengthEncoding` |
| 38 | Mảng | Tìm số còn thiếu trong dãy số | `findMissingNumber` |
| 39 | Chuỗi | Kiểm tra chuỗi ngoặc hợp lệ | `isValidParentheses` |
| 40 | Thuật toán | Bubble Sort | `bubbleSort` |
| 41 | Hàm nâng cao | Memoize | `memoize` |
| 42 | Mảng | Xoay mảng vòng tròn k bước | `rotateArray` |
| 43 | Chuỗi | Chuỗi con không lặp dài nhất | `lengthOfLongestSubstring` |
| 44 | Đối tượng | Deep Equal | `deepEqual` |
| 45 | Thuật toán | Quick Sort | `quickSort` |
| 46 | Hàm nâng cao | Debounce | `debounce` |
| 47 | Hàm nâng cao | Throttle | `throttle` |
| 48 | Đệ quy | Deep Clone | `deepClone` |
| 49 | Thuật toán | Roman → Int | `romanToInt` |
| 50 | Hàm nâng cao | Currying | `curry` |

## Out of Scope

- Dịch multi-locale (en/fr/…) cho 50 bài mới
- Thay thế / xóa 20 bài stdout hiện có
- UI web / dashboard progress ngoài terminal
- Tài khoản học viên, sync cloud, leaderboard
- Chấm điểm từng phần (partial credit) — chỉ pass/fail
- Tự động import Excel lúc runtime (Excel chỉ là nguồn nội dung lúc build)

## Technical Approach

### Stack hiện tại (giữ nguyên)

- Node.js + `workshopper-adventure`
- Menu: `menu.json` + `index.js` `addAll`
- Progress: storage mặc định của workshopper (`workshopper-adventure-storage`)
- Locale mặc định: `vi`

### Verify mới (function harness)

```
Student file ──require──► exportedFn
                              │
problems/<slug>/tests.js ──► runCases(fn) ──► pass/fail + details
solutions/<slug>/index.js ──► official solution (show solution)
```

- Thêm `lib/function-problem.js` (song song `lib/problem.js`)
- `index.js`: nếu thư mục bài có `tests.js` → dùng function-problem; ngược lại → problem (stdout) hiện tại
- Mỗi `tests.js` export: `{ functionName, cases: [{ input: [...], expected }] }` và optional `compare` / custom runner cho HOF (memoize, debounce, throttle, curry)

### Quy ước đặt tên

| Thành phần | Quy ước | Ví dụ |
|------------|---------|--------|
| menu key | UPPERCASE English (slug words) | `CELSIUS TO FAHRENHEIT` |
| folder | kebab-case | `problems/celsius-to-fahrenheit/` |
| student file gợi ý | kebab-case `.js` | `celsius-to-fahrenheit.js` |
| export | đúng tên hàm Excel | `module.exports = celsiusToFahrenheit` |
| vi label | `NN. <Tên bài>` | `01. Chuyển đổi nhiệt độ` |

### Data models

Không thêm DB. Progress = completed exercise names trong app storage (framework).

### Integration points

- `index.js` — chọn factory problem
- `menu.json` — append 50 keys
- `i18n/vi.json` — 50 `exercise.*` keys
- `lib/function-problem.js`, `lib/run-function-tests.js` (mới)
- `problems/*`, `solutions/*` — 50 cặp mới
- `i18n/troubleshooting_vi.md` — có thể bổ sung placeholder cho function-test fail (hoặc fail template riêng)

### Rủi ro kỹ thuật (ưu tiên sớm)

- Bài **41, 46, 47, 50** (memoize / debounce / throttle / curry): cần harness đặc biệt (spy, fake timers)
- `celsiusToFahrenheit`: `.toFixed(1)` trả về **string** — expected type phải khớp đề
- Deep equality cho object/array; không mutate input trừ khi đề yêu cầu

## Code Style

- Follow `.cursor/rules/` (2 spaces, single quotes, semicolons)
- CommonJS như codebase hiện tại (`require` / `module.exports`)
- Không hardcode secrets; không `eval` input học viên

## Testing Strategy

- **Unit:** `run-function-tests` — deep equal, báo case fail, load export sai
- **Per-exercise:** mỗi `tests.js` + official `solutions/<slug>/index.js` phải tự pass harness
- **Regression:** 20 bài cũ vẫn pass `workshopper-adventure-test` / `npm test`
- **Manual:** mở menu → làm 1 bài dễ + 1 bài HOF → checkmark progress

## Boundaries

### Always Do

- Giữ 20 bài cũ hoạt động không đổi hành vi
- Verify bằng test cases, không so stdout cho 50 bài mới
- Nội dung đề/solution tiếng Việt
- Đánh dấu hoàn thành chỉ khi toàn bộ cases pass
- Xuất bản đủ 50 bài trong iteration này

### Ask First

- Đổi cấu trúc `menu.json` sang object `{ name, type }` thay vì auto-detect `tests.js`
- Thêm dependency mới (vd. fake-timers library) thay vì harness tối giản tự viết
- Đổi quy ước export (`module.exports = { fn }` thay vì export trực tiếp hàm)

### Never Do

- Xóa / rename 20 bài cũ mà không được hỏi
- `eval` / `Function(userCode)`
- Commit secrets / `.env`
- Bỏ progress tracking (checkmark) của workshopper
