const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');

let dargElement = null;
let columns = [todo,progress,done];

const tasks = document.querySelectorAll('.task');

tasks.forEach((task)=>{
    task.addEventListener("drag",(e)=>{
        // console.log(e)
        dargElement = task;
    })
})

function AddDragEventsOnColumn(column){
    column.addEventListener('dragenter',(e)=>{
        e.preventDefault();
        column.classList.add('hover-over')
    })

    column.addEventListener('dragleave',(e)=>{
        e.preventDefault();
        column.classList.remove('hover-over')
    })

    column.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })

    column.addEventListener('drop',(e)=>{
        e.preventDefault();

        column.appendChild(dargElement);
        column.classList.remove('hover-over');

        columns.forEach(col =>{
            let tasks = col.querySelectorAll('.task')
            let count = col.querySelector('.right')

            count.innerText = tasks.length;
        })
    })

    
}

AddDragEventsOnColumn(todo)
AddDragEventsOnColumn(progress)
AddDragEventsOnColumn(done)

const toggleModalBtn = document.querySelector('#toggle-modal');
const modal = document.querySelector('.modal');
const bg = document.querySelector('.modal .bg');
const addTaskBtn = document.querySelector("#add-new-task")

toggleModalBtn.addEventListener('click',()=>{
    modal.classList.toggle('active')
})

bg.addEventListener('click',()=>{
    modal.classList.remove('active')
})

addTaskBtn.addEventListener('click',()=>{
    let titleInput = document.querySelector("#task-title-input").value;
    let descInput = document.querySelector("#task-desc-input").value;

    let div = document.createElement('div');
    div.classList.add("task")

    div.setAttribute("draggable","true");
    div.innerHTML = `<h2>${titleInput}</h2>
                    <p>${descInput}</p>
                    <button>Delete</button>`

    todo.appendChild(div);

    columns.forEach(col =>{
        let tasks = col.querySelectorAll('.task')
        let count = col.querySelector('.right')

        count.innerText = tasks.length;
    })

    div.addEventListener("drag",()=>{
        dargElement = div;
    })

    modal.classList.remove('active');
})