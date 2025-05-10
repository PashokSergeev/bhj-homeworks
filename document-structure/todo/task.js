const form = document.querySelector('form');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('task__input');
    if (taskInput.value.trim()) {


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