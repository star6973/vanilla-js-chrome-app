const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

console.log(toDoForm);

/*
    1. form 양식은 기본적으로 submit 이벤트를 가지고 있기 때문에 막아줘야 함.
    2. Enter를 할 경우, 값을 저장할 수 있어야 함.
    3. 저장된 todo 값을 <li> 태그에 넣어준다.
    4. 태그에 보여지는 todo 값을 지워줄 수 있어야 함. -> todo 삭제하는 button 추가
    5. 새로고침해도 todo 값들을 유지할 수 있어야 함.
*/
function deleteToDo(event) {
    const li = event.target.parentElement; // event.target만으로는 정보가 부족하므로 parentElement 요소를 확인
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newToDo;
    button.innerText = "X";

    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // <li> 태그 안에 <span> 태그를 자식으로 넣어준다.
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    paintToDo(newToDo);
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);