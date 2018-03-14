
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  displayDots();

}
function displayDots() {
  let pointSpacing = 50;
  for (let x = 0; x < 16; x += pointSpacing) {
    for (let y = 0; y <  8; y+= pointSpacing){
      ellipse(x,y,4,4);

    }
  }
}
