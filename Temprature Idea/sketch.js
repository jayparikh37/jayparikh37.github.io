let input;
let button;
let state = 0;
let red = 50;
let blue = 50;
let green = 50;



function setup() {
  createCanvas(windowWidth, windowHeight);

  input = createInput(" ");
  input.position(windowWidth/2 - 100, 50);
  button = createButton("What's The Temprature???");
  button.position(windowWidth/2 - 100, 100);
  button.mousePressed(tempUpdate);
}

function draw() {
  background(red,blue,green);
}



function tempUpdate() {
  let temp = input.value();


  if (temp > 0 && temp < 10){
    state = 1;
  }
  if (temp > 10 && temp < 20){
    state = 2;
  }
  if (temp > 20 && temp < 30){
    state = 3;
  }
  if (temp < 0 && temp > -10){
    state = 4;
  }
  if (temp < -10 && temp > -20){
    state = 5;
  }
  if (temp < -20 && temp > -30){
    state = 6;
  }
  if (temp < -30){
    state = 7;
  }
  if (temp > 30){
    state = 8;
  }
}
