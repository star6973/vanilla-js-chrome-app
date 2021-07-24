const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";
const savedUserName = localStorage.getItem(USER_NAME);

// localStorage에 있는 username을 가져온 뒤, 텍스트로 표출함
function paintGreetings(username) {
    loginOutput.innerText = `Welcome ${username}`;
    loginOutput.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    // localStorage에 아이템 저장하기
    localStorage.setItem(USER_NAME, username);

    paintGreetings(username);
}

// localStorage에 아이템이 없는 경우, login form 양식을 화면에 표출함
if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} 
// localStorage에 아이템이 있는 경우, login form 양식을 숨기고 username을 화면에 표출함
else {
    paintGreetings(savedUserName);
}

// login css style
loginInputBox.style.width = "100%"
loginInputBox.style.position = "relative"

loginInput.style.width = "100%"
loginInput.style.height = "55%"
loginInput.style.padding = "12px 15px"
loginInput.style.background = "transparent"
loginInput.style.border = "1px solid #dadce0"
loginInput.style.borderRadius = "20px"
loginInput.style.fontSize = "16px"
loginInput.style.fontWeight = "400"
loginInput.style.width = "100%"
loginInput.style.outline = "none"
loginInput.style.transition = "all 150ms"
loginInput.style.textAlign = "center"
loginInput.onmouseenter = function(e) {
    loginInput.style.border = "5px solid #dadce0"
}
loginInput.onmouseout = function(e) {
    loginInput.style.border = "1px solid #dadce0"
}

loginOutput.style.fontSize = "xxx-large"
loginOutput.style.fontFamily = "Fantasy"