// let hungryTommy; //the cursor image of tom cruise
// let tomSnack; // the random image of money
// let snackCoords = []; //the list used to store the location of the tomsnack for looping
// let xCoordPullCode = 0;
// let yCoordPullCode = 1;
// let imgRangeX;
// let imgRangeY;
// let x = 0;
// let snackX;
// let snackY;
// let snackXMax;
// let snackYMax;
//
// function preload(){
//   hungryTommy = loadImage("images/hungryTommy.png");
//   tomSnack = loadImage("images/tomSnack.png");
//
// }
//
// function setup(){
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw(){
//
//
//   let imgRangeX = mouseX;
//   let imgRangeY = mouseY;
//
//   background(255);
//
//   imageMode(CENTER);
//
//   image(hungryTommy, mouseX, mouseY, 200, 200);
//
//   imageMode(CORNER);
//
//   image(tomSnack, snackCoords[xCoordPullCode], snackCoords[yCoordPullCode], 200, 200);
//
//   snackX = snackCoords[xCoordPullCode];
//
//   snackY = snackCoords[yCoordPullCode];
//
// }
//
// function mouseClicked() {
//   if (mouseX >= snackX && mouseX <= snackX - 300 && mouseY >= snackY && mouseY <= snackY - 300){
//     snackCoords.push(random(width - 200));
//     snackCoords.push(random(height - 200));
//     xCoordPullCode = xCoordPullCode + 1;
//     yCoordPullCode = yCoordPullCode + 1;
//     x += x;
//   }
//
//
// }
// function keyTyped(){
//   if (key === "a") {
//     snackCoords.push(random(width - 200));
//     snackCoords.push(random(height - 200));
//     xCoordPullCode = xCoordPullCode + 1;
//     yCoordPullCode = yCoordPullCode + 1;
//     x += x;
//   }
// }

let clockSize;

function setup(){
  createCanvas(windowWidth,windowHeight);
  if (width > height){
    clockSize = height;
  }
  else {
    clockSize = width;
  }
  angleMode(DEGREES);
}

function draw() {
  background(255);

  push();
  translate(width / 2, height /2);
  ellipse(0, 0, clockSize, clockSize);

  strokeWeight(10);
  strokeCap(SQUARE);

  for (let i = 0; i< 12; i++){
    line(0, clockSize / 2 * 0.95, 0,clockSize/2 *0.9);
    rotate(360/12);

  }

  strokeWeight(5);

  for (let i = 0; i< 60; i++){
    line(0, clockSize / 2 * 0.7, 0,clockSize/2 *0.9);
    rotate(360/60);

  }

  line(0, clockSize / 2 * 0.95, 0,clockSize/2 *0.9);

  pop();

}
