const API_KEY = 'f3765a025e5f66e430b7938652bbb8f3'

// success function
function onGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // openweathermap weather api
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    console.log(url);

    // promise 기반, 서버에서 응답을 기다려야 함.
    fetch(url)
    .then(response => response.json()) // response 결과를 json 형태로 변환해서 받아옴.
    .then(data => {
        const weatherContainer = document.querySelector("#wrapper-geo span:nth-child(1)")
        const degreeContainer = document.querySelector("#wrapper-geo span:nth-child(2)")
        const cityContainer = document.querySelector("#wrapper-geo span:nth-child(3)")

        const weather = data.weather[0].main
        const degree = data.main.temp
        const city = data.name

        const degreeUnicode = String.fromCodePoint(8451)

        weatherContainer.innerText = `${weather}`
        degreeContainer.innerText = `${degree}${degreeUnicode}`
        cityContainer.innerText = `${city}`
    });
}

// error function
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);