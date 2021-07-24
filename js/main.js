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
wrapperTop.style.height = "20%"

wrapperCenter.style.width = "100%"
wrapperCenter.style.height = "20%"
wrapperCenter.style.display = "flex"
wrapperCenter.style.justifyContent = "center"
wrapperCenter.style.alignItems = "center"
wrapperCenter.style.transition = "all 0.3s ease"

wrapperBottom.style.width = "100%"
wrapperBottom.style.height = "60%"
wrapperBottom.style.display = "flex"
wrapperBottom.style.flexDirection = "column"

main.appendChild(wrapperTop)
main.appendChild(wrapperCenter)
main.appendChild(wrapperBottom)

// wrapper-top
const clock = document.createElement("div")
const geo = document.createElement("div")
const geoWeatherContainer = document.createElement("div")
const geoLocation = document.createElement("span")
const geoWeather = document.createElement("span")
const geoDegree = document.createElement("span")

clock.id = "clock"
geo.id = "wrapper-geo"

geoWeatherContainer.appendChild(geoWeather)

geo.appendChild(geoWeatherContainer)
geo.appendChild(geoLocation)
geo.appendChild(geoDegree)

wrapperTop.appendChild(clock)
wrapperTop.append(geo)

// wrapper-center
const loginForm = document.createElement("form")
const loginInputBox = document.createElement("div")
const loginInput = document.createElement("input")
const loginOutput = document.createElement("h1")

loginForm.id = "login-form"
loginForm.class = "hidden"

loginInputBox.id = "input-box"

loginInput.class = "input-field"
loginInput.type = "text"
loginInput.required = true
loginInput.autofocus = true
loginInput.autocomplete = "off"
loginInput.maxLength = 15
loginInput.placeholder = "이름을 입력해주세요."

loginOutput.id = "login-output"
loginOutput.class = "hidden"

loginInputBox.appendChild(loginInput)
loginForm.appendChild(loginInputBox)

wrapperCenter.appendChild(loginForm)
wrapperCenter.appendChild(loginOutput)

// wrapper-bottom
const quotes = document.createElement("div")
const quotesText = document.createElement("span")
const quotesAuthor = document.createElement("span")

quotes.id = "quotes"

quotes.appendChild(quotesText)
quotes.appendChild(quotesAuthor)

const toDoWrapper = document.createElement("div")
const toDoForm = document.createElement("form")
const toDoInput = document.createElement("input")
const toDoList = document.createElement("ul")

toDoForm.id = "todo-form"
toDoInput.type = "text"
toDoInput.required = true
toDoInput.placeholder = "오늘의 할일은?!"
toDoList.id = "todo-list"

toDoForm.appendChild(toDoInput)
toDoWrapper.appendChild(toDoForm)
toDoWrapper.appendChild(toDoList)

wrapperBottom.appendChild(quotes)
wrapperBottom.appendChild(toDoWrapper)

function toHex(N){
    if (N === null) return "00";
 
    N = parseInt(N);
    if (N === 0) return "00"
 
    N = Math.max(0,N);
    N = Math.min(N,255);
    N = Math.round(N);
    
    return "0123456789ABCDEF".charAt((N - N % 16) / 16) + "0123456789ABCDEF".charAt(N % 16)
}

function getTextColorByBackgroundColor(r, g, b) {
    const comp_r = 255 - r
    const comp_g = 255 - g
    const comp_b = 255 - b
    const hex_code = toHex(comp_r) + toHex(comp_g) + toHex(comp_b);
    
    return `#${hex_code}`
}

window.addEventListener("load", () => {
    var backgroundColorThief = new BackgroundColorTheif();
    var rgb = backgroundColorThief.getBackGroundColor(document.getElementById("backgroundImage"));

    font_color = getTextColorByBackgroundColor(rgb[0], rgb[1], rgb[2])

    // css style for font color
    clock.style.color = font_color
    geoLocation.style.color = font_color
    geoWeather.style.color = font_color
    geoDegree.style.color = font_color
    quotesText.style.color = font_color
    quotesAuthor.style.color = font_color
})