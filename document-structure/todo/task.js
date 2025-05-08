const form = document.querySelector('form');
const tasksList = document.getElementById('tasks__list');

// if (localStorage.getItem('length') > 0) {
//     for (let i = 0; i < localStorage.getItem('length'); i++) {
//         const newTask = document.createElement('div')
//         newTask.classList.add('task');
//         const taskTitle = document.createElement('div')
//         taskTitle.classList.add('task__title');
//         taskTitle.textContent = localStorage.getItem(`${i}`);
//         newTask.appendChild(taskTitle);
//
//         const taskRemove = document.createElement('a');
//         taskRemove.classList.add('task__remove');
//         taskRemove.textContent = 'x';
//         taskRemove.addEventListener('click', (e) => {
//             e.preventDefault();
//             newTask.remove();
//             localStorage.removeItem(`${i}`);
//             localStorage.setItem(`length`, document.getElementsByClassName('task').length);
//         })
//         newTask.appendChild(taskRemove);
//         tasksList.appendChild(newTask);
//     }
// }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('task__input');
    if (taskInput.value.trim()) {
        // const newTask = document.createElement('div')
        // newTask.classList.add('task');
        // const taskTitle = document.createElement('div')
        // taskTitle.classList.add('task__title');
        // taskTitle.textContent = taskInput.value;
        // newTask.appendChild(taskTitle);

        // const taskRemove = document.createElement('a');
        // taskRemove.classList.add('task__remove');
        // taskRemove.textContent = 'x';
        // taskRemove.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     newTask.remove();
        //     // localStorage.removeItem(`${document.getElementsByClassName('task').length - 1}`);
        //     // localStorage.setItem(`length`, document.getElementsByClassName('task').length);
        // })
        // newTask.appendChild(taskRemove);
        // tasksList.appendChild(newTask);
        // localStorage.setItem(`length`, document.getElementsByClassName('task').length);
        // localStorage.setItem(`${document.getElementsByClassName('task').length - 1}`, taskInput.value);

        tasksList.insertAdjacentHTML('beforeend', `
            <div class="task">
              <div class="task__title">
                ${taskInput.value.trim()}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>
            `);
        const lastTask = tasksList.lastElementChild;
        const taskRemove = lastTask.querySelector('.task__remove');
        taskRemove.addEventListener('click', (e) => {
            e.preventDefault();
            lastTask.remove();
        })
        form.reset();
    }


})