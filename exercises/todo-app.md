# Vanilla JavaScript Todo App — Complete Coding Exercise

* **Level:** Beginner → Intermediate
* **Technology:** HTML5 + CSS3 + Vanilla JavaScript
* **Framework:** None
* **Build Tool:** None
* **Backend:** None
* **Database:** None
* **Storage:** Browser LocalStorage
* **Goal:** Xây dựng một ứng dụng Todo List hoàn chỉnh bằng JavaScript thuần.

---

# 1. Tổng quan bài tập

Trong bài tập này, bạn sẽ xây dựng một ứng dụng **Todo List** cho phép người dùng quản lý danh sách công việc cá nhân. [Tham khảo](https://simple-todo-list.vercel.app)

Ứng dụng cần hỗ trợ:

* Thêm công việc.
* Xóa công việc.
* Chỉnh sửa công việc.
* Đánh dấu công việc đã hoàn thành.
* Lọc công việc theo trạng thái.
* Tìm kiếm công việc.
* Sắp xếp công việc.
* Quản lý độ ưu tiên.
* Quản lý deadline.
* Thống kê số lượng công việc.
* Lưu dữ liệu bằng LocalStorage.
* Dark Mode / Light Mode.
* Responsive trên desktop và mobile.
* Import / Export dữ liệu.
* Drag & Drop để sắp xếp công việc.

Mục tiêu chính của bài tập là giúp người học thực hành JavaScript thông qua một project thực tế thay vì học từng API một cách rời rạc.

---

# 2. Mục tiêu học tập

Sau khi hoàn thành project, người học cần hiểu và sử dụng được:

* HTML DOM.
* DOM Manipulation.
* Event Handling.
* Event Bubbling.
* Event Delegation.
* Form Handling.
* Form Validation.
* JavaScript Functions.
* Arrow Functions.
* Array Methods.
* Object.
* Destructuring.
* Spread Operator.
* Template Literals.
* Conditional Rendering.
* LocalStorage.
* JSON Serialization.
* Date API.
* Search và Filter.
* Sorting.
* Drag & Drop API.
* File API.
* Responsive UI.
* Tổ chức code JavaScript theo module.

---

# 3. Công nghệ sử dụng

Project chỉ sử dụng:

```text
HTML5
CSS3
Vanilla JavaScript
Browser APIs
```

Không sử dụng:

```text
React
Vue
Angular
Svelte
jQuery
Bootstrap
Tailwind CSS
React Query
Redux
Backend API
Database
```

Có thể sử dụng CSS thuần hoặc CSS Modules nếu muốn mở rộng, nhưng phiên bản cơ bản chỉ nên sử dụng CSS thuần.

---

# 4. Cấu trúc file cơ bản

Phiên bản đơn giản:

```text
vanilla-js-todo-app/
│
├── index.html
├── style.css
└── script.js
```

## `index.html`

Chứa:

* HTML structure.
* Todo form.
* Todo list.
* Filter.
* Search.
* Statistics.
* Buttons.

## `style.css`

Chứa:

* Layout.
* Typography.
* Colors.
* Todo item styles.
* Completed styles.
* Responsive styles.
* Dark mode.

## `script.js`

Chứa toàn bộ logic:

* State management.
* Add Todo.
* Delete Todo.
* Update Todo.
* Complete Todo.
* Search.
* Filter.
* Sort.
* LocalStorage.

---

# 5. Cấu trúc file nâng cao

Khi project lớn hơn, có thể refactor thành:

```text
vanilla-js-todo-app/
│
├── index.html
│
├── assets/
│   ├── icons/
│   └── images/
│
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── layout.css
│   ├── components.css
│   ├── responsive.css
│   └── dark-mode.css
│
└── js/
    ├── main.js
    ├── state.js
    ├── storage.js
    ├── todo.js
    ├── ui.js
    ├── filters.js
    ├── validation.js
    ├── utils.js
    └── drag-drop.js
```

Mục tiêu của cấu trúc nâng cao là giúp người học làm quen với việc chia nhỏ một ứng dụng JavaScript thành nhiều module có trách nhiệm riêng biệt.

---

# 6. Functional Requirements

## 6.1. Add Todo

Người dùng có thể tạo một công việc mới.

Form gồm:

```text
Task Title
Description
Priority
Due Date
Add Button
```

Ví dụ:

```text
Title: Learn JavaScript DOM
Description: Practice querySelector and DOM manipulation
Priority: High
Due Date: 2026-08-01
```

Khi click `Add`:

1. Validate dữ liệu.
2. Tạo Todo Object.
3. Thêm Todo vào danh sách.
4. Render lại UI.
5. Lưu vào LocalStorage.
6. Reset Form.

Todo Object có thể có cấu trúc:

```javascript
{
  id: "todo-001",
  title: "Learn JavaScript DOM",
  description: "Practice DOM manipulation",
  completed: false,
  priority: "high",
  dueDate: "2026-08-01",
  createdAt: "2026-07-28T10:00:00.000Z"
}
```

---

# 7. Todo List

Hiển thị danh sách công việc.

Mỗi Todo Item gồm:

```text
[ ] Task Title

Description

Priority: High
Due: 2026-08-01

[Complete] [Edit] [Delete]
```

Nếu Todo đã hoàn thành:

```text
[x] Task Title
```

Title sẽ:

```css
text-decoration: line-through;
```

Todo có thể được hiển thị với trạng thái:

```text
Active
Completed
Overdue
```

---

# 8. Complete Todo

Người dùng có thể đánh dấu Todo là hoàn thành.

Khi click checkbox:

```javascript
completed = true;
```

Hoặc:

```javascript
completed = !completed;
```

UI cần cập nhật:

```text
Todo
↓
Completed
```

Khi Todo hoàn thành:

* Checkbox được checked.
* Text bị line-through.
* Todo có style khác biệt.
* Statistics được cập nhật.
* LocalStorage được cập nhật.

---

# 9. Delete Todo

Người dùng có thể xóa Todo.

Khi click Delete:

```text
Delete Todo?
```

Có thể hiển thị confirmation:

```text
Are you sure you want to delete this task?

[Cancel] [Delete]
```

Sau khi xác nhận:

1. Xóa Todo khỏi Array.
2. Render lại UI.
3. Cập nhật LocalStorage.

---

# 10. Edit Todo

Người dùng có thể chỉnh sửa Todo.

Khi click `Edit`:

```text
Title
Description
Priority
Due Date
```

Form sẽ được populate với dữ liệu hiện tại.

Ví dụ:

```text
Old:

Learn JavaScript

↓

Edit:

Learn Advanced JavaScript
```

Sau khi click Save:

1. Validate dữ liệu.
2. Update Todo.
3. Render UI.
4. Save LocalStorage.

---

# 11. Filter Todo

Ứng dụng hỗ trợ 3 filter:

```text
All
Active
Completed
```

## All

Hiển thị tất cả Todo.

## Active

Chỉ hiển thị:

```javascript
completed === false
```

## Completed

Chỉ hiển thị:

```javascript
completed === true
```

Có thể implement:

```javascript
todos.filter(todo => !todo.completed);
```

và:

```javascript
todos.filter(todo => todo.completed);
```

---

# 12. Search Todo

Người dùng có thể tìm kiếm Todo.

Input:

```text
Search tasks...
```

Ví dụ:

```text
Search: JavaScript
```

Kết quả:

```text
Learn JavaScript DOM
Learn Advanced JavaScript
JavaScript Event Handling
```

Search nên không phân biệt chữ hoa/chữ thường.

Ví dụ:

```javascript
todo.title
  .toLowerCase()
  .includes(searchTerm.toLowerCase());
```

Có thể search trên:

* Title.
* Description.

---

# 13. Statistics

Hiển thị thống kê:

```text
Total: 10
Active: 6
Completed: 4
```

Có thể bổ sung:

```text
Overdue: 2
High Priority: 3
```

Statistics phải tự động cập nhật khi:

* Add Todo.
* Delete Todo.
* Complete Todo.
* Edit Todo.

---

# 14. Priority

Mỗi Todo có một mức độ ưu tiên:

```text
Low
Medium
High
```

Ví dụ:

```javascript
priority: "high"
```

UI có thể hiển thị:

```text
HIGH
MEDIUM
LOW
```

Cho phép filter:

```text
All Priority
High
Medium
Low
```

---

# 15. Due Date

Mỗi Todo có thể có deadline.

Ví dụ:

```text
Due: August 1, 2026
```

Nếu:

```text
Current Date > Due Date
```

và:

```text
completed === false
```

Todo được xem là:

```text
Overdue
```

UI:

```text
⚠ Overdue
```

Không cần backend.

Sử dụng:

```javascript
new Date()
```

để xử lý ngày.

---

# 16. Sort Todo

Cho phép sắp xếp:

```text
Newest
Oldest
Priority
Due Date
Alphabetical
```

Ví dụ:

```text
Sort by:

[Newest]
[Oldest]
[Priority]
[Due Date]
[A-Z]
```

Sử dụng:

```javascript
Array.prototype.sort()
```

Ví dụ:

```javascript
todos.sort((a, b) => {
  return new Date(a.createdAt) - new Date(b.createdAt);
});
```

---

# 17. LocalStorage

Todo phải được lưu vào LocalStorage.

Key:

```text
todos
```

Lưu dữ liệu:

```javascript
localStorage.setItem(
  "todos",
  JSON.stringify(todos)
);
```

Đọc dữ liệu:

```javascript
const todos = JSON.parse(
  localStorage.getItem("todos")
) || [];
```

Ứng dụng cần đảm bảo:

```text
Add Todo
    ↓
Save LocalStorage

Refresh Browser
    ↓
Load LocalStorage
    ↓
Render Todo
```

---

# 18. Dark Mode

Thêm toggle:

```text
☀ Light
🌙 Dark
```

Khi user click:

```text
Light Mode
↓
Dark Mode
```

Theme preference cũng phải được lưu vào LocalStorage.

Ví dụ:

```javascript
localStorage.setItem(
  "theme",
  "dark"
);
```

Khi reload:

```text
Load Theme
↓
Apply Theme
```

---

# 19. Responsive Design

Ứng dụng phải hoạt động trên:

```text
Desktop
Tablet
Mobile
```

Desktop:

```text
┌──────────────────────────────┐
│ Todo App                     │
├──────────────────────────────┤
│ Add Task                     │
├──────────────────────────────┤
│ Search | Filter | Sort       │
├──────────────────────────────┤
│ Todo List                    │
└──────────────────────────────┘
```

Mobile:

```text
┌──────────────────┐
│ Todo App         │
├──────────────────┤
│ Add Task         │
├──────────────────┤
│ Search           │
├──────────────────┤
│ Filter           │
├──────────────────┤
│ Todo Item        │
└──────────────────┘
```

Sử dụng:

```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

---

# 20. Empty State

Nếu không có Todo:

```text
No tasks yet.

Create your first task to get started.
```

Nếu search không có kết quả:

```text
No tasks found.
```

Nếu filter Completed không có kết quả:

```text
No completed tasks.
```

---

# 21. Form Validation

Không cho phép:

```text
Title rỗng
```

Title có thể yêu cầu:

```text
Minimum: 3 characters
Maximum: 100 characters
```

Description:

```text
Maximum: 500 characters
```

Hiển thị error:

```text
Title is required.
```

Hoặc:

```text
Title must contain at least 3 characters.
```

Không nên sử dụng `alert()` cho UI production.

Nên hiển thị error trực tiếp bên dưới input.

---

# 22. Event Delegation

Thay vì add event listener cho từng button:

```javascript
document
  .querySelectorAll(".delete-button")
  .forEach(button => {
    button.addEventListener("click", ...);
  });
```

Có thể sử dụng Event Delegation:

```javascript
todoList.addEventListener("click", event => {
  if (event.target.matches(".delete-button")) {
    // Delete Todo
  }
});
```

Mục tiêu là giúp người học hiểu:

* Event Bubbling.
* Event Target.
* Event Delegation.

---

# 23. Drag & Drop

Nâng cấp Todo List bằng Drag & Drop.

User có thể:

```text
Todo A
Todo B
Todo C
```

Kéo:

```text
Todo C
```

Lên trên:

```text
Todo C
Todo A
Todo B
```

Sau khi reorder:

1. Update Array.
2. Update UI.
3. Save LocalStorage.

Sử dụng:

```javascript
dragstart
dragover
drop
dragend
```

Có thể sử dụng:

```javascript
element.draggable = true;
```

---

# 24. Import Todo

Cho phép user import Todo từ file JSON.

Ví dụ file:

```json
[
  {
    "id": "1",
    "title": "Learn JavaScript",
    "completed": false,
    "priority": "high"
  }
]
```

Flow:

```text
Choose JSON File
        ↓
Read File
        ↓
Parse JSON
        ↓
Validate Data
        ↓
Update Todos
        ↓
Save LocalStorage
        ↓
Render UI
```

Sử dụng:

```javascript
FileReader
```

hoặc:

```javascript
file.text()
```

---

# 25. Export Todo

Cho phép export Todo thành JSON.

Ví dụ:

```text
[Export JSON]
```

Khi click:

```text
todos
↓
JSON.stringify()
↓
Blob
↓
Download
```

Tên file:

```text
todos.json
```

---

# 26. Clear Completed

Thêm button:

```text
Clear Completed
```

Khi click:

```javascript
todos = todos.filter(
  todo => !todo.completed
);
```

Sau đó:

```text
Update UI
Update LocalStorage
```

Có thể thêm confirmation:

```text
Remove all completed tasks?
```

---

# 27. Clear All

Thêm button:

```text
Clear All
```

Khi click:

```text
Delete all tasks?
```

Nếu confirm:

```javascript
todos = [];
```

Sau đó:

```text
Render
Save LocalStorage
```

---

# 28. Kiến thức JavaScript cần sử dụng

## 28.1. Variables

```javascript
const todos = [];
let currentFilter = "all";
```

---

## 28.2. Data Types

Cần hiểu:

```text
String
Number
Boolean
Array
Object
null
undefined
```

---

## 28.3. Functions

```javascript
function addTodo() {}

function deleteTodo() {}

function updateTodo() {}
```

---

## 28.4. Arrow Functions

```javascript
const addTodo = () => {};
```

---

## 28.5. Objects

```javascript
const todo = {
  id: "1",
  title: "Learn JavaScript",
  completed: false
};
```

---

## 28.6. Arrays

```javascript
const todos = [
  {
    id: "1",
    title: "Learn JavaScript"
  }
];
```

---

## 28.7. Array Methods

Bắt buộc thực hành:

```text
map()
filter()
find()
findIndex()
some()
every()
sort()
forEach()
```

Ví dụ:

```javascript
const completedTodos = todos.filter(
  todo => todo.completed
);
```

---

## 28.8. DOM Selection

Thực hành:

```javascript
document.querySelector()
document.querySelectorAll()
document.getElementById()
```

---

## 28.9. DOM Manipulation

Thực hành:

```javascript
document.createElement()
element.append()
element.remove()
element.innerHTML
element.textContent
```

---

## 28.10. classList

Thực hành:

```javascript
element.classList.add()
element.classList.remove()
element.classList.toggle()
element.classList.contains()
```

---

## 28.11. Events

Thực hành:

```javascript
click
submit
input
change
keydown
dragstart
dragover
drop
```

---

## 28.12. Event Object

Hiểu:

```javascript
event.target
event.currentTarget
event.preventDefault()
event.stopPropagation()
```

---

## 28.13. Event Delegation

Hiểu cách xử lý event từ parent element.

---

## 28.14. Template Literals

```javascript
const html = `
  <div class="todo">
    <h3>${todo.title}</h3>
  </div>
`;
```

---

## 28.15. Destructuring

```javascript
const {
  title,
  description,
  priority
} = todo;
```

---

## 28.16. Spread Operator

```javascript
const updatedTodo = {
  ...todo,
  completed: true
};
```

---

## 28.17. LocalStorage

Thực hành:

```javascript
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
localStorage.clear()
```

---

## 28.18. JSON

Thực hành:

```javascript
JSON.stringify()
JSON.parse()
```

---

## 28.19. Date

Thực hành:

```javascript
new Date()
Date.now()
```

---

## 28.20. Error Handling

Thực hành:

```javascript
try {
  // Parse JSON
} catch (error) {
  // Handle error
}
```

---

# 29. State Management

Ứng dụng cần có một State trung tâm.

Ví dụ:

```javascript
const state = {
  todos: [],
  filter: "all",
  search: "",
  sort: "newest",
  theme: "light"
};
```

UI được render dựa trên State:

```text
State
  ↓
Filter
  ↓
Search
  ↓
Sort
  ↓
Render
```

Khi State thay đổi:

```text
Update State
     ↓
Update LocalStorage
     ↓
Render UI
```

Đây là bước quan trọng để người học hiểu cách các framework frontend như React quản lý UI dựa trên State.

---

# 30. Render Architecture

Có thể xây dựng flow:

```text
User Action
    ↓
Event Handler
    ↓
Update State
    ↓
Save LocalStorage
    ↓
Render
```

Ví dụ:

```text
User click Complete
        ↓
handleToggleTodo()
        ↓
state.todos update
        ↓
saveTodos()
        ↓
renderTodos()
        ↓
updateStatistics()
```

---

# 31. Nâng cấp Level 1 — Basic Todo

Mục tiêu:

```text
Add
Delete
Complete
```

Yêu cầu:

* [ ] Add Todo.
* [ ] Delete Todo.
* [ ] Complete Todo.
* [ ] Render Todo.
* [ ] Empty State.

Kiến thức:

```text
DOM
Events
Array
Object
Functions
```

---

# 32. Nâng cấp Level 2 — Persistent Todo

Thêm:

* [ ] LocalStorage.
* [ ] Load Todo khi mở app.
* [ ] Save Todo khi thay đổi.
* [ ] Clear All.

Kiến thức:

```text
localStorage
JSON.stringify
JSON.parse
```

---

# 33. Nâng cấp Level 3 — Productivity Todo

Thêm:

* [ ] Search.
* [ ] Filter.
* [ ] Sort.
* [ ] Statistics.
* [ ] Priority.
* [ ] Due Date.

Kiến thức:

```text
filter()
map()
sort()
find()
Date
```

---

# 34. Nâng cấp Level 4 — Better UX

Thêm:

* [ ] Edit Todo.
* [ ] Form Validation.
* [ ] Confirmation Modal.
* [ ] Toast Notification.
* [ ] Dark Mode.
* [ ] Responsive UI.

Kiến thức:

```text
Form
Validation
DOM
CSS
LocalStorage
```

---

# 35. Nâng cấp Level 5 — Advanced JavaScript

Thêm:

* [ ] Event Delegation.
* [ ] Drag & Drop.
* [ ] Import JSON.
* [ ] Export JSON.
* [ ] Clear Completed.
* [ ] Keyboard Shortcuts.

Keyboard shortcuts:

```text
N → New Todo
/ → Focus Search
Esc → Close Modal
```

---

# 36. Nâng cấp Level 6 — Modular Architecture

Refactor code thành:

```text
js/
├── main.js
├── state.js
├── storage.js
├── todo.js
├── ui.js
├── filters.js
├── validation.js
├── utils.js
└── drag-drop.js
```

Sử dụng:

```javascript
export
import
```

Ví dụ:

```javascript
// storage.js

export function saveTodos(todos) {
  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
  );
}
```

Import:

```javascript
import {
  saveTodos
} from "./storage.js";
```

Trong HTML:

```html
<script
  type="module"
  src="./js/main.js">
</script>
```

---

# 37. Nâng cấp Level 7 — Production-like Todo App

Bổ sung:

* [ ] Multiple Todo Lists.
* [ ] Categories.
* [ ] Tags.
* [ ] Priority.
* [ ] Due Date.
* [ ] Recurring Tasks.
* [ ] Subtasks.
* [ ] Progress Bar.
* [ ] Calendar View.
* [ ] Dashboard.
* [ ] Data Import.
* [ ] Data Export.
* [ ] Keyboard Shortcuts.
* [ ] Undo Delete.
* [ ] Toast Notification.
* [ ] Dark Mode.
* [ ] Responsive Design.

Ví dụ:

```text
My Todo App

Dashboard
├── Total Tasks: 24
├── Completed: 15
├── Active: 9
└── Overdue: 2

Projects
├── Work
├── Personal
├── Learning
└── Side Projects
```

---

# 38. Nâng cấp Level 8 — Backend Integration

Sau khi hoàn thành toàn bộ Vanilla JS version, có thể xây dựng Backend API.

Ví dụ:

```text
Frontend
Vanilla JavaScript
        │
        │ HTTP
        ▼
REST API
        │
        ▼
Backend
        │
        ▼
Database
```

API:

```text
GET    /todos
POST   /todos
GET    /todos/:id
PUT    /todos/:id
DELETE /todos/:id
```

Có thể sử dụng:

```text
Node.js
Express.js
Spring Boot
NestJS
```

Database:

```text
PostgreSQL
MySQL
MongoDB
```

---

# 39. Nâng cấp Level 9 — Authentication

Thêm:

```text
Register
Login
Logout
```

Mỗi user có Todo riêng.

Flow:

```text
User
  ↓
Login
  ↓
Authentication
  ↓
Get User Todos
  ↓
CRUD Todo
```

Có thể học:

```text
JWT
Cookie
Refresh Token
Authentication
Authorization
```

---

# 40. Nâng cấp Level 10 — Chuyển sang React

Sau khi hoàn thành Vanilla JavaScript, hãy thử migrate project sang React.

So sánh:

```text
Vanilla JS
        ↓
DOM Manipulation
        ↓
document.querySelector()
        ↓
innerHTML
        ↓
addEventListener()
```

với:

```text
React
        ↓
Component
        ↓
State
        ↓
Props
        ↓
Event Handler
        ↓
Declarative UI
```

Ví dụ:

```text
Vanilla JS Todo
        ↓
React Todo
        ↓
React + TypeScript
        ↓
Next.js
        ↓
Next.js + Backend API
```

Mục tiêu là hiểu React giải quyết vấn đề gì thay vì chỉ học React API.

---

# 41. Checklist hoàn thành

## Basic

* [ ] HTML structure.
* [ ] CSS layout.
* [ ] Add Todo.
* [ ] Delete Todo.
* [ ] Complete Todo.
* [ ] Empty State.

## Intermediate

* [ ] Edit Todo.
* [ ] Search.
* [ ] Filter.
* [ ] Sort.
* [ ] Priority.
* [ ] Due Date.
* [ ] Statistics.

## Persistence

* [ ] LocalStorage.
* [ ] Save Todo.
* [ ] Load Todo.
* [ ] Save Theme.

## UX

* [ ] Form Validation.
* [ ] Confirmation Modal.
* [ ] Toast.
* [ ] Dark Mode.
* [ ] Responsive.

## Advanced

* [ ] Event Delegation.
* [ ] Drag & Drop.
* [ ] Import JSON.
* [ ] Export JSON.
* [ ] Keyboard Shortcuts.
* [ ] Undo Delete.

## Architecture

* [ ] State Management.
* [ ] Separation of Concerns.
* [ ] ES Modules.
* [ ] Modular File Structure.
* [ ] Reusable Functions.

---

# 42. Final Challenge

Sau khi hoàn thành tất cả các phần trên, hãy tự xây dựng phiên bản cuối cùng với yêu cầu:

```text
Todo Management Application
```

Ứng dụng cần có:

```text
Dashboard
│
├── Statistics
│
├── Search
│
├── Filter
│
├── Sort
│
├── Add Todo
│
├── Todo List
│   ├── Complete
│   ├── Edit
│   ├── Delete
│   └── Drag & Drop
│
├── Categories
│
├── Priority
│
├── Due Date
│
├── Dark Mode
│
├── Import JSON
│
└── Export JSON
```

Ứng dụng phải đáp ứng:

```text
No Framework
No Library
No Backend
No Database
```

Chỉ sử dụng:

```text
HTML
CSS
Vanilla JavaScript
Browser APIs
LocalStorage
```

---

# 43. Tiêu chí đánh giá

## Beginner

Có thể:

* Thêm Todo.
* Xóa Todo.
* Complete Todo.
* Render UI.

## Junior

Có thể:

* LocalStorage.
* Search.
* Filter.
* Sort.
* Form Validation.

## Strong Junior

Có thể:

* Event Delegation.
* State Management.
* Drag & Drop.
* Import / Export.
* Responsive UI.

## Senior-level Thinking

Có thể:

* Tổ chức architecture.
* Tách module.
* Separation of Concerns.
* Thiết kế State.
* Tránh duplicate logic.
* Xử lý edge cases.
* Error handling.
* UX tốt.
* Code dễ maintain.

---

# 44. Mục tiêu cuối cùng

Đây không chỉ là một bài tập Todo List.

Mục tiêu là sử dụng project này để luyện tập toàn bộ flow của một ứng dụng frontend:

```text
Requirement
     ↓
UI Design
     ↓
HTML Structure
     ↓
CSS
     ↓
JavaScript State
     ↓
DOM
     ↓
Event Handling
     ↓
Business Logic
     ↓
Persistence
     ↓
Error Handling
     ↓
UX
     ↓
Architecture
     ↓
Modularization
```

Sau khi hoàn thành phiên bản Vanilla JavaScript, hãy thử triển khai lại cùng một ứng dụng bằng:

```text
Version 1
HTML + CSS + Vanilla JS

        ↓

Version 2
Vanilla JS + ES Modules

        ↓

Version 3
Vanilla JS + Backend API

        ↓

Version 4
React + TypeScript

        ↓

Version 5
Next.js + TypeScript

        ↓

Version 6
Next.js + Backend + Database
```

Đây là cách tốt để hiểu sâu hơn về **JavaScript, DOM, State Management, Frontend Architecture và lý do các framework hiện đại như React/Next.js tồn tại**.
