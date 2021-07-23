const images = ["0.jpg", "1.jpg", "2.jpg"];
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