$(document).ready(function() { 

var url = "https://mimishih042.github.io/ci19/studio/collection/data.json";
  fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){buildSection(json);})


});




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

    var yearBox = document.createElement("div");
    yearBox.className = "boxYear";
    yearBox.innerHTML = data[i].year ;

    randPosition(yearBox, unclickedImg);
    box.appendChild(unclickedImg);   

    var elemContainer = document.getElementById("elemContainer");
    elemContainer.appendChild(box);
    elemContainer.appendChild(yearBox);

    console.log(elemContainer);
  }

}

function randPosition(year, image){

  // year
    var w = window.innerWidth;
    var random = Math.floor(Math.random() * w );
    if (random > w - 174) {
      random = w - 174;
    }else if(random < 8){
      random = 8;
    }
    var left = random + "px" ;    
    year.style.marginLeft = left;
    console.log(left);
    console.log(w);

  //image
    var randomImg = Math.floor(Math.random() * 100 );
    if (randomImg > 50) {
      randomImg = 45;
    }else if(randomImg < 1){
      randomImg = 1;
    }

    var leftImg = randomImg + "%" ;    
    image.style.marginLeft = leftImg;
    console.log(leftImg);
}
