const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDos = [];

/*
    1. form 양식은 기본적으로 submit 이벤트를 가지고 있기 때문에 막아줘야 함.
    2. Enter를 할 경우, 값을 저장할 수 있어야 함.
    3. 저장된 todo 값을 <li> 태그에 넣어준다.
    4. 태그에 보여지는 todo 값을 지워줄 수 있어야 함. -> todo 삭제하는 button 추가
    5. 새로고침해도 todo 값들을 유지할 수 있어야 함. -> localStorage 사용
        5-1. localStorage에 단순 문자열이 아닌, 문자열이 담긴 배열로 저장되길 원한다. -> JSON.stringify
        5-2. 새로고침했을 때, localStorage뿐만 아니라 화면에도 유지되어야 한다.
        5-3. localStorage에 새로운 값을 넣었을 때, 이전의 값들이 유지되면서 저장되어야 한다.
        5-4. 삭제 버튼을 눌렀을 때, 화면에서 삭제될뿐만 아니라 localStorage에서도 삭제되어야 한다. -> toDos에 id를 부여, filter 사용
*/
toDoForm.addEventListener("submit", handleToDoSubmit);

// 1, 2 기능 구현
function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };

    toDos.push(newToDoObj); // todo값을 리스트에 저장
    paintToDo(newToDoObj);
    toDoInput.value = "";

    saveToDos(); // localStorage에 toDos 리스트를 저장
}

// 3, 4 기능 구현
function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newToDoObj.id;
    span.innerText = newToDoObj.text;
    button.innerText = "X";

    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // <li> 태그 안에 <span> 태그를 자식으로 넣어준다.
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function deleteToDo(event) {
    const li = event.target.parentElement; // event.target만으로는 정보가 부족하므로 parentElement 요소를 확인
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));    
    saveToDos();
}

// 5 기능 구현
function saveToDos() {
    // localStorage.setItem("todos", toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 5-2, 5-3 기능 구현
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // localStorage에 이전에 남아있던 값들을 불러옴.

    // parsedToDos.forEach((item) => console.log(`this is the turn of ${item}`));
    parsedToDos.forEach(paintToDo);
}