const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');

// console.log(todo,progress,done);

const tasks = document.querySelectorAll('.task');

tasks.forEach((task)=>{
    task.addEventListener("drag",(e)=>{
        // console.log(e)
    })
})

// progress.addEventListener('dragenter',(e)=>{
//     progress.classList.add('hover-over');
// })

// progress.addEventListener('dragleave',(e)=>{
//     progress.classList.remove('hover-over');
// })

function AddDragEventsOnColumn(column){
    column.addEventListener('dragenter',(e)=>{
        e.preventDefault();
        column.classList.add('hover-over')
    })
    column.addEventListener('dragleave',(e)=>{
        e.preventDefault();
        column.classList.remove('hover-over')
    })
}

AddDragEventsOnColumn(todo)
AddDragEventsOnColumn(progress)
AddDragEventsOnColumn(done)