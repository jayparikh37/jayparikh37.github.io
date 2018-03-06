let hungryTommy;
let tomSnack;
let tommySnackX, tommySnackY;
let snackCount;
let tommyTrue = false;


function preload(){
  hungryTommy = loadImage("images/hungryTommy.png");
  tomSnack = loadImage("images/tomSnack.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);

}

function draw(){


  let imgRangeX = mouseX -100;
  let imgRangeY = mouseY -100;

  //for each item in []

  image(hungryTommy, mouseX - 100, mouseY - 100, 200, 200);
  if (tommyTrue === true){
    mouseClicked();
  }

  // if (mouseClicked() && tommyTrue)

}
function mouseClicked(){
  tommyTrue = !tommyTrue;
  tommySnackX = random(width);
  tommySnackY = random(height);
  image(tomSnack, tommySnackX, tommySnackY, 50, 50);
}
