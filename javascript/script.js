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

