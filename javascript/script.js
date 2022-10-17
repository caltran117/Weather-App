// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo


var inputval = document.querySelector('#cityinput')
var submitbtn = document.querySelector('#add')


submitbtn.addEventListener('click',function(){

    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q={+inputval.value+}&appid={0bcbdea2eca98a28bdc8b794c845d739}';

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    

})

// add a div box w/ # city input & date (moment) +temp, wind, humidity

var currentForecast = document.createElement("div");

var currentForcastList = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

currentForecast.textContent = "city input"

li1.textContent = "Apples 🍎 ";
li2.textContent = "Pizza 🍕 ";
li3.textContent = "Dumplings 🥟 ";
li4.textContent = "Cupcakes 🧁 ";

currentForecast.appendChild(currentForcastList);