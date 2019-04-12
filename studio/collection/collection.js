let min = 0;
let max = 2018 - 1913;

$(document).ready(function() { 
  var url = "https://mimishih042.github.io/ci19/studio/collection/data.json";
    fetch(url)
      .then(function(response){return response.json();})
      .then(function(json){
        buildSection(json);

    })
});

function getPosition(element){
        var e = document.getElementById(element);
        var left = 0;
        var top = 0;

        do{
            left += e.offsetLeft;
            top += e.offsetTop;
        }while(e = e.offsetParent);

        return [left, top];
}


function jumpTo(id){    
    window.scrollTo(getPosition(id));
}

function buildSection(data){

  for (var i = min; i < max; i++) {
    var box = document.createElement("div");
    box.className = "box";

    var headline = document.createElement("h1");
    headline.className = "headlines";
    headline.id = "year" + (i+1914);

    headline.innerHTML = data[i].headline;
    box.appendChild(headline);

    var unclickedImg = document.createElement("img");
    unclickedImg.className = "edit";
    unclickedImg.src = data[i].edit;

    unclickedImg.onclick = function(event) {
        var year = event.target.src.slice(event.target.src.length-8, event.target.src.length);
        var newPath = "img/" + year;
        event.target.src = newPath;
        event.target.style.width = 400 + "px";
        event.target.style.height = "auto";
        event.target.style.position = "absolute";
        event.target.style.zIndex = "1000";
    }

    unclickedImg.onmouseout = function(event) {
        var year = event.target.src.slice(event.target.src.length-8, event.target.src.length);
        var newPath = "edit/" + year;
        event.target.src = newPath;
        event.target.style.width ="auto";
        event.target.style.height = 68+"px";
    }

    var yearBox = document.createElement("div");
    yearBox.className = "boxYear";
    yearBox.innerHTML = data[i].year ;

    yearBox.onmouseover = function(event) {
        randPosYear(event.target);
        console.log(event.target);
    }

    randPosYear(yearBox);
    randPosImg(unclickedImg);
    // box.appendChild(unclickedImg);
    // box.appendChild(yearBox);   

    var elemContainer = document.getElementById("elemContainer");
    elemContainer.appendChild(unclickedImg);
    elemContainer.appendChild(box);
    elemContainer.appendChild(yearBox);
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
        if(x[i].style.marginTop === -75){
            x[i].style.marginTop = 0;
        }else{
            x[i].style.marginTop = -75;

        }

    }
}
