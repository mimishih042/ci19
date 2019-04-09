var url = "https://mimishih042.github.io/ci19/studio/collection/data.json";
  fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){buildSection(json);})

function buildSection(data){
  for (var i = 0; i < data.length; i++) {
    var box = document.createElement("div");
    box.className = "box";

    var headline = document.createElement("h1");
    headline.className = "headlines";
    headline.innerHTML = data[i].headline;
    box.appendChild(headline);

    var unclickedImg = document.createElement("img");
    unclickedImg.className = "edit";
    unclickedImg.src = data[i].edit;
    box.appendChild(unclickedImg);

    var yearBox = document.createElement("div");
    yearBox.className = "boxYear";
    yearBox.innerHTML = data[i].year ;

    var elemContainer = document.getElementById("elemContainer");
    elemContainer.appendChild(box);
    elemContainer.appendChild(yearBox);

    console.log(elemContainer);
  }

}