let numbers = Array.from({length: 13}, (v, i) => i)
const images = []
let font_color

numbers.forEach(item => {
    images.push(`${item}.png`)
})

const chosenImage = images[Math.floor(Math.random() * images.length)];
const html = document.querySelector("html")
const body = document.querySelector("body")

// html css style
html.style.width = "100%"
html.style.height = "100%"

// body css style
body.style.background = `url(img/${chosenImage})`
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "cover"
body.style.width = "100%"
body.style.height = "100%"
body.style.overflow = "hidden"

const bgImg = document.createElement("img")

bgImg.id = "backgroundImage"
bgImg.src = `img/${chosenImage}`

// backgroundImg css style
bgImg.style.width = "100%"
bgImg.style.height = "100%"

body.appendChild(bgImg)