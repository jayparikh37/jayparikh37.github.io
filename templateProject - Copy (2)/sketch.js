
let clockSize;

function setup(){
  createCanvas(windowWidth,windowHeight);
  if (width > height){
    clockSize = height;
  }
  else {
    clockSize = width;
  }
}

function draw() {
  background(255);

  push();
  translate(width / 2, height /2);
  ellipse(0, 0, clockSize, clockSize);

  pop();

}
