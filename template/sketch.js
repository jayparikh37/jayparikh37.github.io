let bcoords = [0];
let drawBall = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  
  if (drawBall === true){
    ellipse(bcoords[3],bcoords[4],100,100);
    drawBall = false;
    bcoords.shift[3,4];
  }
}
function mouseClicked(){
  bcoords.push(mouseX);
  bcoords.push(mouseY);
  drawBall = true;
}
