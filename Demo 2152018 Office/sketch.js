let x, y, radius;
let dx, dy;
let tommy;

function preload(){
  tommy = loadImage( "images/thomas.jpg" );
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
}

function draw() {
  background(255);
  moveThing();
  displayThing();


}

function moveThing() {
  x += dx;
  y += dy;

  if(y >= height || y - radius <= 0) {
    dy = dy * -1;
  }

  if(x >= height || x - radius <= 0) {
    dx = dx * -1;
  }


}

function displayThing() {
  fill(0);
  image(tommy, x, y)


}
