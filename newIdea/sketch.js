let hungryTommy; //the cursor image of tom cruise
let tomSnack; // the random image of money
let snackCoords = []; //the list used to store the location of the tomsnack for looping
let snackGenerate = true;
let xCoordPullCode = 0;
let yCoordPullCode = 1;

function preload(){
  hungryTommy = loadImage("images/hungryTommy.png");
  tomSnack = loadImage("images/tomSnack.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){


  let imgRangeX = mouseX -100;
  let imgRangeY = mouseY -100;

  background(255);

  image(hungryTommy, mouseX - 100, mouseY - 100, 200, 200);
  image(tomSnack, snackCoords[xCoordPullCode], snackCoords[yCoordPullCode], 200, 200);

}
function mouseClicked() {
  snackCoords.push(random(200, width - 200));
  snackCoords.push(random(200, height - 200));
  xCoordPullCode = xCoordPullCode + 1;
  yCoordPullCode = yCoordPullCode + 1;

}
