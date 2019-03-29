$(document).ready(function() {
  var x = document.getElementById("thirtyone");   // Get the element with id="demo"
  randPosition(x);
  var y = document.getElementById("one");   // Get the element with id="demo"
  randPosition(y);

});


function randPosition(element){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var left = (Math.floor(Math.random() * w)) + "px" ;
    var top = (Math.floor(Math.random() * h)) + "px" ;
    element.style.left = left;
    element.style.top = top;
    console.log(left, top);
    console.log(w,h);
}

function mouseOver(element){
    element.style.zIndex = -1 ;
    element.style.opacity = 0.5;   
}

function mouseOut(element){
    element.style.opacity = 1;
       
}

function fullImg(imgNum){
    var elem = document.getElementById("append");
    var newImg = document.createElement("img");
    newImg.src = imgNum ;
    newImg.className = "centered";
    elem.appendChild(newImg);
    $(".element").css("opacity", "0.5");
  }

