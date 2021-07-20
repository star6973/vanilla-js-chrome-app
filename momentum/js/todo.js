const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

console.log(toDoForm);

/*
    1. form 양식은 기본적으로 submit 이벤트를 가지고 있기 때문에 막아줘야 함.
    2. Enter를 할 경우, 값을 저장할 수 있어야 함.
    3. 저장된 todo 값을 <li> 태그에 넣어준다.
    4. 태그에 보여지는 todo 값을 지워줄 수 있어야 함.
    5. 새로고침해도 todo 값들을 유지할 수 있어야 함.
*/
function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.appendChild(span); // <li> 태그 안에 <span> 태그를 자식으로 넣어준다.
    span.innerText = newToDo;

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    paintToDo(newToDo);
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);