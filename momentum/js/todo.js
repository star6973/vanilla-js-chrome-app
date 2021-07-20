const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const toDos = [];

/*
    1. form 양식은 기본적으로 submit 이벤트를 가지고 있기 때문에 막아줘야 함.
    2. Enter를 할 경우, 값을 저장할 수 있어야 함.
    3. 저장된 todo 값을 <li> 태그에 넣어준다.
    4. 태그에 보여지는 todo 값을 지워줄 수 있어야 함. -> todo 삭제하는 button 추가
    5. 새로고침해도 todo 값들을 유지할 수 있어야 함. -> localStorage 사용
        5-1. localStorage에 단순 문자열이 아닌, 문자열이 담긴 배열로 저장되길 원한다. -> JSON.stringify
        5-2. 새로고침했을 때, localStorage뿐만 아니라 화면에도 유지되어야 한다.
        5-3. 삭제 버튼을 눌렀을 때, 화면에서 삭제될뿐만 아니라 localStorage에서도 삭제되어야 한다.
*/
function saveToDos() {
    // localStorage.setItem("todos", toDos);
    localStorage.setItem("todos", JSON.stringify(toDos));
}

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

    toDos.push(newToDo); // todo값을 리스트에 저장
    paintToDo(newToDo);
    toDoInput.value = "";

    saveToDos(); // localStorage에 toDos 리스트를 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);