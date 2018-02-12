
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
}

function mouseMoved(){
    if (mouseX < windowWidth/2) {
    noStroke();
    fill(random(150,255));
    rect(random(0, windowWidth), random(0, windowHeight),random(0, windowWidth), random(0, windowHeight));
    }
    else {
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(random(0, windowWidth),random(0, windowHeight),random(0, windowWidth), random(0, windowHeight));
  }
}
