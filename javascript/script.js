// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo




var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}';



fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    for(var i = 0; i < 5; i++){
      // TODO: Loop through the response
      console.log(data[i].url);
      console.log(data[i].user.login);
      // TODO: Console log each issue's URL and each user's login
    }
  });