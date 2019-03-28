$(document).ready(function() {
  var entryCount = 0;
  var displayCount = 0;
  //capture key presses
  $(document).on("keypress", function(e) {
    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);  
    e.preventDefault();
    entryCount ++;
    displayCount ++;
    console.log(char);
    createElement(char);

  });


  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;      
      displayCount --;
    if (displayCount < 0) {
      displayCount = 0;
    }
    console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
    deleteElement();
    // drawCircle();
    }

  });

});


function createElement(k) {
  var elem = $('#cursor');
  var a = $('#a');
  var b = $('#b');
  var c = $('#c');
  var d = $('#d');
  var e = $('#e');
  var f = $('#f');
  var g = $('#g');
  var h = $('#h');
  var i = $('#i');
  var j = $('#j');
  var key = $('#k');
  var l = $('#l'); 
  var m = $('#m');
  var n = $('#n');
  var o = $('#o');
  var p = $('#p');
  var q = $('#q');
  var r = $('#r');
  var s = $('#s');
  var t = $('#t');
  var u = $('#u');
  var v = $('#v');
  var w = $('#w');
  var x = $('#x');  
  var y = $('#y');
  var z = $('#z'); 

  if (k == "a" || k == "A") { 
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot1";
    newSpan.appendChild(innerSpan);
    a.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan);
  }

  if (k == "b" || k == "B") { 
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot2";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot2-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot2-2";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan2);
    b.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan);

  }

  if (k == "c" || k == "C") { 
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot3";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot3-1";
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan);
    c.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan);
  }

  if (k == "d" || k == "D") { 
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot4";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot4-1";
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan);
    d.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan);

  }
  
  if (k == "e" || k == "E") { 
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot5";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot5-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot5-2";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan2);
    e.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan);  
  }

  if (k == "f" || k == "F") { 
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot6";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot6-1";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    f.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "g" || k == "G") {  
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot7";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot7-1";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    g.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 

  }

  if (k == "h" || k == "H") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot8";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot8-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot8-2";
    var innerSpan3 = document.createElement("span");
    innerSpan3.className = "dot8-3";
    h.append(newSpan);
    h.append(innerSpan1);
    h.append(innerSpan2);
    h.append(innerSpan3);
    h.append(innerSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "i" || k == "I") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot9";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot9-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot9-2";
    var innerSpan3 = document.createElement("span");
    innerSpan3.className = "dot9-3";
    var innerSpan4 = document.createElement("span");
    innerSpan4.className = "dot9-4";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan2);
    newSpan.appendChild(innerSpan3);
    newSpan.appendChild(innerSpan4);
    i.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "j" || k == "J") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot10";
    newSpan.appendChild(innerSpan);
    j.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "k" || k == "K") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot11";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot11-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot11-2";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan2);    
    key.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "l" || k == "L") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot12";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot12-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot12-2";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan2);
    l.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "m" || k == "M") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot13";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot13-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot13-2";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan2);
    m.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "n" || k == "N") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot14";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot14-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot14-2";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan2);
    n.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "o" || k == "O") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot15";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot15-1";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    o.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "p" || k == "P") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot16";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot16-1";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    p.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "q" || k == "Q") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot9";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot9-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot9-2";
    var innerSpan3 = document.createElement("span");
    innerSpan3.className = "dot9-3";
    var innerSpan4 = document.createElement("span");
    innerSpan4.className = "dot9-4";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan2);
    newSpan.appendChild(innerSpan3);
    newSpan.appendChild(innerSpan4);
    q.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "r" || k == "R") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot2";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot2-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot2-2";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan2);
    r.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "s" || k == "S") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot1";
    newSpan.appendChild(innerSpan);
    s.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "t" || k == "T") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot20";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot20-1";
    var innerSpan3 = document.createElement("span");
    innerSpan3.className = "dot20-3";
    t.append(newSpan);
    t.append(innerSpan1);
    t.append(innerSpan2);
    t.append(innerSpan3);
    t.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "u" || k == "U") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot21";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot21-1";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    u.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "v" || k == "V") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot22";
    newSpan.appendChild(innerSpan);
    v.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "w" || k == "W") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot23";
    newSpan.appendChild(innerSpan);
    w.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "x" || k == "X") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot8";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot8-1";
    var innerSpan2 = document.createElement("span");
    innerSpan2.className = "dot8-2";
    var innerSpan3 = document.createElement("span");
    innerSpan3.className = "dot8-3";
    x.append(newSpan);
    x.append(innerSpan1);
    x.append(innerSpan2);
    x.append(innerSpan3);
    x.append(innerSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "y" || k == "Y") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan0 = document.createElement("span");
    innerSpan0.className = "dot16";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot16-1";
    newSpan.appendChild(innerSpan0);
    newSpan.appendChild(innerSpan1);
    y.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == "z" || k == "Z") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    var innerSpan = document.createElement("span");
    innerSpan.className = "dot3";
    var innerSpan1 = document.createElement("span");
    innerSpan1.className = "dot3-1";
    newSpan.appendChild(innerSpan1);
    newSpan.appendChild(innerSpan);
    z.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan); 
  }

  if (k == ",") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    comma.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan);  
  }

  if (k == ".") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    period.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan);  
  }

  if (k == " ") {     
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    space.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan);  
  }

  if (fromCharCode == 13){
    var newSpan = document.createElement("span");
    newSpan.className = "circle deleteControl";
    space.append(newSpan);
    randColor(newSpan);
    randPosition(newSpan);
    randSize(newSpan);  
  }

}

function randColor(element){
    var colors = ["#CE220DCC","#025DB5CC","#352DB2CC","#FF63D7CC","#5EB9F7CC","#E997AFCC","#F23C13CC","#F8AA23CC","#F66746CC","#352DB2CC"]; 
    var rand = Math.floor( Math.random()* colors.length); 
    element.style.backgroundColor = colors[rand] ;
}

function randPosition(element){
    var left = (Math.floor(Math.random() * (70+70) - 70)) + "px" ;
    var top = (Math.floor(Math.random() * (70+70) - 70)) + "px" ;
    element.style.marginLeft = left;
    element.style.marginTop = top;
    console.log(left, top);
}

function randSize(element){
    var size = (Math.random() * (140-50) + 50) + "px" ;
    element.style.width = size ;
    element.style.height = size ;
}


function checkBox() {
  var box = document.getElementById("myCheck");
  var letters = document.getElementsByClassName("noShow");

  if (box.checked == true){
    for (var i = letters.length - 1; i >= 0; i--) {
      letters[i].style.display = "none" ;
    }
    console.log(letters);
    console.log("off");
  } else {
    for (var i = letters.length - 1; i >= 0; i--) {
      letters[i].style.display = "grid" ;
    }
    console.log("on");
  }
}

function change(num){
    var colors = ["#ffffff", "#f1f1f1", "#F8AA23", "#ff6737", "#CE220D", "#ff79e5", "#5EB9F7"]; 
    document.body.style.backgroundColor = colors[num] ;   
}


function deleteElement() {
  $(".deleteControl").last().remove();
}

function drawCircle(){
  var newSpan = document.createElement("span");
  newSpan.className = "circle deleteControl";
  back.append(newSpan);
  randColor(newSpan);
  randPosition(newSpan);
  randSize(newSpan);    
}




