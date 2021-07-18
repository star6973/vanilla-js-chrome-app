const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";

// localStorage에 있는 username을 가져온 뒤, 텍스트로 표출함
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    
    const username = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    // localStorage에 아이템 저장하기
    localStorage.setItem(USER_NAME, username);

    paintGreetings(username);
}

const savedUserName = localStorage.getItem(USER_NAME);

// localStorage에 아이템이 없는 경우, login form 양식을 화면에 표출함
if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} 
// localStorage에 아이템이 있는 경우, login form 양식을 숨기고 username을 화면에 표출함
else {
    paintGreetings(savedUserName);
}