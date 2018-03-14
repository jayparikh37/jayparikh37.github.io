let hungryTommy; //the cursor image of tom cruise
let tomSnack; // the random image of money
let snackCoords = []; //the list used to store the location of the tomsnack for looping
let xCoordPullCode = 0; //the number used to reach into the array "snackCoords" and pull out the x value needed to loop the image in place
let yCoordPullCode = 1; //the number used to reach into the array "snackCoords" and pull out the y value needed to loop the image in place
let x = 0; //a variable i used to test whether or not my code was being executed how i wanted
let snackX; //  the variable that is updated with the x value of the top left corner of the snack
let snackY; // the variable that is updated with the y value of the top left corner of the snack

function preload(){
  hungryTommy = loadImage("images/hungryTommy.png"); //loads in the image of tom cruise that fills the cursor
  tomSnack = loadImage("images/tomSnack.png"); //loads in the image of money that you must chase
}

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){


  background(255);

  imageMode(CENTER);

  image(hungryTommy, mouseX, mouseY, 200, 200);

  imageMode(CORNER);

  image(tomSnack, snackCoords[xCoordPullCode], snackCoords[yCoordPullCode], 200, 200);

  snackX = snackCoords[xCoordPullCode];

  snackY = snackCoords[yCoordPullCode];

}

function mouseClicked() {
  if (mouseX >= snackX && mouseX <= snackX + 300 && mouseY >= snackY && mouseY <= snackY + 300){
    snackCoords.push(random(width - 200));
    snackCoords.push(random(height - 200));
    xCoordPullCode = xCoordPullCode + 1;
    yCoordPullCode = yCoordPullCode + 1;
    x = 1 + x;
  }


}
function keyTyped(){
  if (key === "a") {
    snackCoords.push(random(width - 200));
    snackCoords.push(random(height - 200));
    xCoordPullCode = xCoordPullCode + 1;
    yCoordPullCode = yCoordPullCode + 1;
    x = x + 1;
  }
}
