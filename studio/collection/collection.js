$(document).ready(function() { 

var url = "https://mimishih042.github.io/ci19/studio/collection/data.json";
  fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){
        buildSection(json, 0, 2018 - 1913);


    })


});


function buildSection(data, min, max){

  for (var i = min; i < max; i++) {
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


    randPosYear(yearBox);
    randPosImg(unclickedImg);
    box.appendChild(unclickedImg);   

    var elemContainer = document.getElementById("elemContainer");
    elemContainer.appendChild(box);
    elemContainer.appendChild(yearBox);

    // $( ".boxYear" ).mouseover(function() {
    //     randPosYear(yearBox);
    // })
  }

}

function randPosYear(year){

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
}

function randPosImg(image){

    //image
    var posArray = [5, 10, 15, 20, 25, 30, 35, 40, 45];
    var randomImg = Math.floor(Math.random() * 100 );
    if (randomImg > 50) {
      randomImg = posArray[Math.floor(Math.random() * 9 )];
    }else if(randomImg < 1){
      randomImg = 1;
    }

    var leftImg = randomImg + "%" ;    
    image.style.marginLeft = leftImg;
    // console.log(leftImg);
}

function selectorState(className, display){
  var x = document.getElementsByClassName(className);
  for (var i = 0; i < x.length; i++){
        if(x[i].style.display === "none"){
            x[i].style.display = display;
        }else{
            x[i].style.display = "none";
        }
    }
}

function headlineState(){
    var x = document.getElementsByClassName('headlines');
    for (var i = 0; i < x.length; i++) {
        if(x[i].style.color === "blue"){
            x[i].style.color = "white";
        }else{
            x[i].style.color = "blue";

        }
    }
}
