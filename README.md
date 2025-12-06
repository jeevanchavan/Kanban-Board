# 🗂️ Kanban Board (Vanilla JavaScript)

A simple **Kanban Board** built using **HTML, CSS, and Vanilla JavaScript**.  
You can add tasks, drag them between columns, delete tasks, and your data is saved in the browser.

🔗 Live Demo:
https://jeevanchavan.github.io/Kanban-Board/


---

## 🚀 Features

- ✅ Add new tasks using a modal
- ✅ Drag and drop tasks between columns
- ✅ Delete tasks
- ✅ Task count updates automatically
- ✅ Data is saved using `localStorage`
- ✅ Tasks remain after page refresh
- ✅ Clean and simple UI

---

## 🧱 Columns

- **To Do**
- **In Progress**
- **Done**

---

## 🛠️ JavaScript Concepts Used

### 1️⃣ DOM Manipulation
- `document.querySelector()`
- `createElement()`
- `appendChild()`
- `classList.add()`
- `innerHTML`

Used to dynamically create and update tasks.

---

### 2️⃣ Event Handling
- `click`
- `dragstart`
- `dragover`
- `drop`
- `dragenter`
- `dragleave`

Used for button actions and drag-and-drop functionality.

---

### 3️⃣ Drag and Drop API
- `draggable = true`
- `dragstart`
- `dragover`
- `drop`

Used to move tasks between columns.

---

### 4️⃣ localStorage
- `localStorage.setItem()`
- `localStorage.getItem()`
- `JSON.stringify()`
- `JSON.parse()`

Used to store tasks so data is not lost on refresh.

---

### 5️⃣ Arrays and Objects
- Arrays to manage columns
- Objects to store task data
- `map()` and `forEach()`

Used for task organization and storage.

---

### 6️⃣ Arrow Functions
- Cleaner and shorter function syntax

---

### 7️⃣ Template Literals
```js
`<h2>${title}</h2>`

