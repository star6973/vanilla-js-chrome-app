function getClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    
    clock.innerHTML = (`${hours}:${minutes}:${seconds}`);
}

getClock();
setInterval(getClock, 1000);

// clock css style
clock.style.textAlign = "center"
clock.style.fontFamily = "Fantasy"
clock.style.fontSize = "80px"
clock.style.paddingTop = "20px"