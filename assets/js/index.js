(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const submitForm = document.getElementById('form');
        const todos = [];
        const RENDER_EVENT = 'render-todo';

        submitForm.addEventListener('submit', function (event) {
            event.preventDefault();

            addTodo();
        });

        document.addEventListener(RENDER_EVENT, function () {
            // console.log(todos);
            const uncompletedTODOList = document.getElementById('todos');
            uncompletedTODOList.innerHTML = '';

            for (const todoItem of todos) {
                const todoElement = makeTodo(todoItem);
                uncompletedTODOList.append(todoElement);
            }
        });

        function addTodo() {
            // getting data inside form
            const textTodo = document.getElementById('title').value;
            const timestamp = document.getElementById('date').value;

            // creating and inserting object
            const generatedID = generateId();
            const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
            todos.push(todoObject);

            // create new event
            document.dispatchEvent(new Event(RENDER_EVENT));
        }

        function generateId() {
            return +new Date();
        }

        function generateTodoObject(id, task, timestamp, isCompleted) {
            return {
                id,
                task,
                timestamp,
                isCompleted
            }
        }

        //creating element for item list
        function makeTodo(todoObject) {
            const textTitle = document.createElement('h2');
            textTitle.innerText = todoObject.task;

            const textTimestamp = document.createElement('p');
            textTimestamp.innerText = todoObject.timestamp;

            const textContainer = document.createElement('div');
            textContainer.classList.add('inner');
            textContainer.append(textTitle, textTimestamp);

            const container = document.createElement('div');
            container.classList.add('item', 'shadow');
            container.append(textContainer);
            container.setAttribute('id', `todo-${todoObject.id}`);

            return container;
        }
    });
})();