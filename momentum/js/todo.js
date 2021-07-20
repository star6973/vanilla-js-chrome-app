const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

console.log(toDoForm);

/*
    1. form 양식은 기본적으로 submit 이벤트를 가지고 있기 때문에 막아줘야 함.
    2. Enter를 할 경우, 값을 저장할 수 있어야 함.
*/
function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;

    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);