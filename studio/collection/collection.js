var url = "https://raw.githubusercontent.com/sssssuty/ci19/master/lab/March.27/water.json";
  fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){console.log(json);})
