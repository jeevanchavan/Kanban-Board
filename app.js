// Object to store tasks for localStorage
let taskData = {}

// Column elements
const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');

// This will store the dragged task
let dargElement = null;

// All columns in one array
let columns = [todo, progress, done];


// FUNCTION: Create a task and add it to a column
function addTask(title, desc, column) {
    // Create task div
    let div = document.createElement('div');
    
    div.classList.add('task');
    div.setAttribute("draggable", "true");

    // Task HTML
    div.innerHTML = `
        <h2>${title}</h2>
        <p>${desc}</p>
        <button>Delete</button>
    `;

    // Add task to column
    column.appendChild(div);

    // Start dragging
    div.addEventListener('dragstart', () => {
        dargElement = div;
    });

    // Delete button logic
    let deleteBtn = div.querySelector('button');
    deleteBtn.addEventListener('click', () => {
        div.remove();
        updateTaskCount();
    });

    return div;
}


// FUNCTION: Update task count + save to localStorage
function updateTaskCount() {
    columns.forEach(col => {
        // Get all tasks in a column
        let tasks = col.querySelectorAll('.task');
        let count = col.querySelector('.right');

        // Store task data
        taskData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText
            }
        });

        // Save to localStorage
        localStorage.setItem("tasks", JSON.stringify(taskData));

        // Update UI count
        count.innerText = tasks.length;
    });
}


// LOAD TASKS FROM localStorage ON PAGE LOAD
if (localStorage.getItem("tasks")) {
    let data = JSON.parse(localStorage.getItem("tasks"));

    for (let col in data) {
        let column = document.querySelector(`#${col}`);

        // Add each saved task
        data[col].forEach(task => {
            addTask(task.title, task.desc, column);
        });

        // Update count
        let tasks = column.querySelectorAll(".task");
        let count = column.querySelector(".right");
        count.innerText = tasks.length;
    }
}


// DRAG EVENTS FOR EACH COLUMN
function AddDragEventsOnColumn(column) {

    // When task enters column
    column.addEventListener('dragenter', (e) => {
        e.preventDefault();
        column.classList.add('hover-over');
    });

    // When task leaves column
    column.addEventListener('dragleave', (e) => {
        e.preventDefault();
        column.classList.remove('hover-over');
    });

    // Required to allow drop
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // When task is dropped
    column.addEventListener('drop', (e) => {
        e.preventDefault();

        column.appendChild(dargElement);
        column.classList.remove('hover-over');

        updateTaskCount();
    });
}

// Enable drag & drop on all columns
AddDragEventsOnColumn(todo);
AddDragEventsOnColumn(progress);
AddDragEventsOnColumn(done);


// -------- MODAL LOGIC -------- //

const toggleModalBtn = document.querySelector('#toggle-modal');
const modal = document.querySelector('.modal');
const bg = document.querySelector('.modal .bg');
const addTaskBtn = document.querySelector("#add-new-task");

// Open / close modal
toggleModalBtn.addEventListener('click', () => {
    modal.classList.toggle('active');
});

// Close modal when background is clicked
bg.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Add new task button
addTaskBtn.addEventListener('click', () => {
    let titleInput = document.querySelector("#task-title-input").value;
    let descInput = document.querySelector("#task-desc-input").value;

    addTask(titleInput, descInput, todo);
    updateTaskCount();

    modal.classList.remove('active');
});
