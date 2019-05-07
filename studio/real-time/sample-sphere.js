// var circleSize = 400;
// var radius = circleSize/2;
// var period = 5; //speed
// var x = 0;
// var particleY;
// var amplitude;
// var sineEl;
// var r = 0.;

// var randomPart = [];
// var partSize = [];


// function setup() {
//   createCanvas(600, 600);
//   for (var i = 0; i < 100; i++) {
//     randomPart[i] = random(100, 500);
//     partSize[i] = random(2, 11);
//   }
// }

// function draw() {
//   background(0);
//   //fill(0,20);
//   //rect(0,0,width,height);

//   x += 0.01;

//   for (var yRand = 0; yRand < 100; yRand++) {

//     particleY = randomPart[yRand];

//     var sine = sin((2*PI*x)/period + randomPart[yRand]);
//     amplitude = sqrt(sq(radius) - sq(abs(height/2 - particleY)));
//     sineEl = width/2 + sine * amplitude;

//     var particleSize = partSize[yRand];

//     //rotation
//     push();
//     translate(width/2, height/2);
//     r += 0.005;
//     rotate(radians(r));
//     translate(-width/2, -height/2);

//     stroke(255);
//     //line(width/2, 0, width/2, height); //uncomment to see the axis
//     noStroke();
//     fill(255);
//     ellipse(sineEl, particleY, particleSize, particleSize);
//     pop();
//   }

//   noFill();
//   stroke(255);
//   //ellipse(width/2, height/2, circleSize, circleSize);
// }