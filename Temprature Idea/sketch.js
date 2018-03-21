let input;
let button;
let state = 0;
let red = 50;
let blue = 50;
let green = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);

  input = createInput(" ");
  input.position(windowWidth / 2 - 100, 50);
  button = createButton("What's The Temprature???");
  button.position(windowWidth / 2 - 100, 100);
}

function draw() {
  background(red, green, blue);
  let tempr = input.value();
  if (tempr > 0) {
    state = 1;

  }
  if (tempr < 0) {
    state = 2;

  }
  button.mousePressed(reColour(tempr));
}

function reColour(tempr){
  if (state === 1){
    red = red + tempr;
    blue = 50;
  }
  if (red > 250){
    red = 250;
  }
  if (state === 2){
    blue = -1 * (blue + tempr);
    red = 50;
  }
  if (blue > 250){
    blue = 250;
  }

}
