let hungryTommy; //the cursor image of tom cruise
let tomSnack; // the random image of money
let snackCoords = []; //the list used to store the location of the tomsnack for looping
let xCoordPullCode = 0;
let yCoordPullCode = 1;
let imgRangeX;
let imgRangeY;
let x = 0;
let snackX;
let snackY;
let snackXMax;
let snackYMax;

function preload(){
  hungryTommy = loadImage("images/hungryTommy.png");
  tomSnack = loadImage("images/tomSnack.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){


  let imgRangeX = mouseX;
  let imgRangeY = mouseY;

  background(255);

  imageMode(CENTER);

  image(hungryTommy, mouseX, mouseY, 200, 200);

  imageMode(CORNER);

  image(tomSnack, snackCoords[xCoordPullCode], snackCoords[yCoordPullCode], 200, 200);

  snackX = snackCoords[xCoordPullCode];

  snackY = snackCoords[yCoordPullCode];

}

function mouseClicked() {
  if (mouseX >= snackX && mouseX <= snackX - 300 && mouseY >= snackY && mouseY <= snackY - 300){
    snackCoords.push(random(width - 200));
    snackCoords.push(random(height - 200));
    xCoordPullCode = xCoordPullCode + 1;
    yCoordPullCode = yCoordPullCode + 1;
    x += x;
  }


}
function keyTyped(){
  if (key === "a") {
    snackCoords.push(random(width - 200));
    snackCoords.push(random(height - 200));
    xCoordPullCode = xCoordPullCode + 1;
    yCoordPullCode = yCoordPullCode + 1;
    x += x;
  }
}
