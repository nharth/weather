let button = document.querySelector('.button');
let input = document.querySelector('.inValue');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let wind = document.querySelector('.wind');

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=c97f30dfb08eadd693b818ecf2fc69fc`)
    .then(response => response.json())
    .then(data => {
        let nameValue = data.name;
        let tempValue = data.main["temp"];
        let descValue = data.weather[0]["description"];
        descValue = descValue.charAt(0).toUpperCase() + descValue.slice(1);
        let windValue = data.wind["speed"];
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue + "°F";    
        desc.innerHTML = descValue;
        wind.innerHTML = "Wind: " + windValue + "mph";
        console.log(data)
        console.log(nameValue)
        console.log(temp)
        console.log(descValue)
        console.log(windValue)
    })

// .catch(err => alert ("Invalid city"))
})