const main = document.querySelector("#main")
const wrapperBackground = document.createElement("img")
const wrapperTop = document.createElement("div")
const wrapperCenter = document.createElement("div")
const wrapperBottom = document.createElement("div")

wrapperBackground.id = "wrapper-background"
wrapperTop.id = "wrapper-top"
wrapperCenter.id = "wrapper-center"
wrapperBottom.id = "wrapper-bottom"

main.appendChild(wrapperBackground)
main.appendChild(wrapperTop)
main.appendChild(wrapperCenter)
main.appendChild(wrapperBottom)

// wrapper-top
const clock = document.createElement("div")
const geo = document.createElement("div")
const geoLocation = document.createElement("span")
const geoWeather = document.createElement("span")

clock.id = "clock"
geo.id = "wrapper-geo"

geo.appendChild(geoLocation)
geo.appendChild(geoWeather)
wrapperTop.appendChild(clock)
wrapperTop.append(geo)

// wrapper-center
const loginForm = document.createElement("form");
const loginInput = document.createElement("input")
const loginSubmit = document.createElement("input")
const loginOutput = document.createElement("h1")

loginForm.id = "login-form"
loginForm.class = "hidden"
loginInput.type = "text"
loginInput.required = true
loginInput.maxLength = 15
loginInput.placeholder = "What is your name?"
loginSubmit.type = "submit"
loginSubmit.value = "Log In"
loginOutput.id = "login-output"
loginOutput.class = "hidden"

loginForm.appendChild(loginInput)
loginForm.appendChild(loginSubmit)

wrapperCenter.appendChild(loginForm)
wrapperCenter.appendChild(loginOutput)

// wrapper-bottom
const quotes = document.createElement("div")
const quotesText = document.createElement("span")
const quotesAuthor = document.createElement("span")

quotes.id = "quotes"
quotes.appendChild(quotesText)
quotes.appendChild(quotesAuthor)

const toDoForm = document.createElement("form")
const toDoInput = document.createElement("input")
const toDoList = document.createElement("ul")

toDoForm.id = "todo-form"
toDoInput.type = "text"
toDoInput.required = true
toDoInput.placeholder = "Write a To Do and Press Enter."
toDoList.id = "todo-list"

toDoForm.appendChild(toDoInput)

wrapperBottom.appendChild(quotes)
wrapperBottom.appendChild(toDoForm)
wrapperBottom.appendChild(toDoList)