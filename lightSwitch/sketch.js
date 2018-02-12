let lightSwitch;
function setup() {
  createCanvas(windowWidth,windowHeight);
  lightSwitch = true;
}

function draw() {
  drawlight();
}

function keyTyped(){
  if (key === " ") {
    lightSwitch =!lightSwitch;
    return false;
  }
}

function drawLight() {
  if lightSwitch === true) {
    fill(255);
  }
else {
    fill(0);
}
rectMode(CENTER)
}
