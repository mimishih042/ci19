//json
let json = {};
let content = [];

// api keys for weather
var urlW;
var keyW;

var temp;
var lat;
var lon;

let speed;
let textSpeed;
let name;
let color;
let color1;
let mapLat;
let mapLon;

// api key for nytimes api
var urlN;
var keyN;
var abstracts = [];
var headline;
var flatten;
var splitString = [];
var splitChar = [];
var finalData = [];


// for user input
var button;
var input;

// draw graphics
let can;
let bg = 1;
let pg;
let tileX;
let tileY;

let points;
let bounds;
let eachData;
var scale = 0.05;
var maxHeight = 150;
var a;
var b;

// animation
// let v;
let angle = 0;

let pos;
let vel;
let f;



function askData(){
  keyW = "13e274855e4b79a0c031afc293b780e8";
  urlW = "https://api.openweathermap.org/data/2.5/weather?q=" + input.value() + "&APPID=" + keyW;
  loadJSON(urlW,gotDataW);

  keyN = "LLxU2AhBI8NsLDKAstr7p65BmW4Tj7A5";
  urlN = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ input.value() +"&api-key=" + keyN;
  loadJSON(urlN, gotDataN);

}

function gotDataW(data){
  temp = data.main.temp;
  lat = data.coord.lat;
  lon = data.coord.lon;
  speed = data.wind.speed;
  // name = data.name;

  color = map(lon, -180,180, 0, 358);
  color1 = map(lat,90,-90, 0, 358);
  mapLat = map(lat,90,-90, 0, windowHeight);
  mapLon = map(lon, -180,180, 0, windowWidth);
  textSpeed = map(speed, 0, 10, 0, 1);

  // console.log(data);
  // console.log(name);
}

function gotDataN(data){
    // finished splitting to words
    content.length = 0;
    for(var i = 0; i < 10; i ++){
      abstracts[i]= data.response.docs[i].lead_paragraph;
      var up = abstracts[i].toUpperCase();
    }   
    splitString = split(up, ' ');
    //finished split into char and push it into content
    for(var  i = 0 ; i < splitString.length; i++){
      splitChar[i] = split(splitString[i],'');
      // content.push(splitChar[i]);
      // flatten = content.flat(2);
      flatten = splitChar.flat(1);
    }

    for(var i = 0 ; i < floor(tileX * tileY/flatten.length); i ++){
      content.push(flatten);
    }

  var flattenfinal = content.flat();
  console.log(flattenfinal);
  finalData = arrayTo2DArray2(flattenfinal, tileX);
}

function arrayTo2DArray2(list, howMany) {
  var idx = 0;
  result = [];
  while (idx < list.length) {
    if (idx % howMany === 0) result.push([]);
    result[result.length - 1].push(list[idx++]);
  }
  return result
}

function setup() {
  colorMode(HSB, 360, 100,100,1);
  background(bg, 100, 100);
  tileX = floor(windowWidth/22)-3;
  tileY = floor(windowHeight/22);

  can = createCanvas(windowWidth, windowHeight);
  button = select('#submit');
  button.mousePressed(askData);
  input = select("#city");

  pg = createGraphics(windowWidth, windowHeight);
  pg.background(0);
  a = random(windowWidth - 500);
  b = random(windowHeight - 200);
}

function draw() {
  background(0);
  pg.colorMode(HSB);
  pg.background(color1, 100, 100);
  angle+=0.1;

  for(var j = 0; j < finalData.length; j++){
    eachData = finalData[j];
    for(var i = 0; i < eachData.length; i++){ 
      var y = noise(j * scale, i * scale, frameCount * 0.003) * maxHeight;
      pg.textAlign(CENTER, CENTER); 
      pg.textFont('Helvetica');

      // pg.textSize(100);
      // pg.fill(color1, 100, 95);
      // pg.text(name.toUpperCase(), windowWidth/2.7, windowHeight * 3/8);

      let c = sin(angle +i/PI);
      pg.textSize(15 + 4 * c);
      let alpha = map(c, -1, 1, 0, 100);
      pg.fill(color, 100, 95, alpha);
      pos = createVector(50+22*i, 50+22*j);

      pg.push();
      pg.translate(pos.x, pos.y,0);
      pg.text(finalData[j][i], 0, 0);
      pg.pop();
    }
  }

  image(pg, 0, 0);

}

function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas(can,'cityapi','png');
  }
}


