const main = document.querySelector("#main")

// main css style
main.style.display = "flex"
main.style.flexDirection = "column"
main.style.width = "100%"
main.style.height = "100%"
main.style.justifyContent = "center"
main.style.alignItems = "center"

const wrapperTop = document.createElement("div")
const wrapperCenter = document.createElement("div")
const wrapperBottom = document.createElement("div")

wrapperTop.id = "wrapper-top"
wrapperCenter.id = "wrapper-center"
wrapperBottom.id = "wrapper-bottom"

// wrapper css style
wrapperTop.style.width = "100%"
wrapperTop.style.height = "50%"

wrapperCenter.style.width = "100%"
wrapperCenter.style.height = "20%"
wrapperCenter.style.display = "flex"
wrapperCenter.style.justifyContent = "flex-end"
wrapperCenter.style.transition = "all 0.3s ease"
wrapperCenter.style.borderRadius = "0.75em"
wrapperCenter.style.marginRight = "6%"

wrapperBottom.style.width = "100%"
wrapperBottom.style.height = "30%"

main.appendChild(wrapperTop)
main.appendChild(wrapperCenter)
main.appendChild(wrapperBottom)

// wrapper-top
const clock = document.createElement("div")
const geo = document.createElement("div")
const geoLocation = document.createElement("span")
const geoWeather = document.createElement("span")
const geoDegree = document.createElement("span")

clock.id = "clock"
geo.id = "wrapper-geo"

// clock css style
clock.style.textAlign = "center"
clock.style.fontFamily = "Fantasy"
clock.style.color = "black"
clock.style.fontSize = "80px"
clock.style.paddingTop = "20px"

// geo css style
geo.style.display = "flex"
geo.style.flexDirection = "column"
geo.style.textAlignLast = "end"
geo.style.marginRight = "2%"

geoLocation.style.textAlign = "center"
geoLocation.style.fontFamily = "Fantasy"
geoLocation.style.color = "black"
geoLocation.style.fontSize = "40px"
geoLocation.style.paddingTop = "20px"

geoWeather.style.textAlign = "center"
geoWeather.style.fontFamily = "Fantasy"
geoWeather.style.color = "black"
geoWeather.style.fontSize = "40px"
geoWeather.style.paddingTop = "20px"

geoDegree.style.textAlign = "center"
geoDegree.style.fontFamily = "Fantasy"
geoDegree.style.color = "black"
geoDegree.style.fontSize = "40px"
geoDegree.style.paddingTop = "20px"

geo.appendChild(geoLocation)
geo.appendChild(geoWeather)
geo.appendChild(geoDegree)

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