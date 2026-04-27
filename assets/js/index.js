(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const submitForm = document.getElementById('form');

        submitForm.addEventListener('submit', function (event) {
            event.preventDefault();

            addTodo();
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
    });
})();