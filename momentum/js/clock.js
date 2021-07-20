const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    clock.innerHTML = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock();
setInterval(getClock, 1000);
// setTimeout(sayHello, 5000);