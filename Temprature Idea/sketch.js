//what its supposed to do is raise or lower the background temprature based on the user input, it doesnt work

let input;  //creates an input
let state = 0;  //sets a state to decide whehter to heat or cool the background temprature
let red2 = 125; // new variable to set the red value in the background
let blue2 = 125; // new variable to set the blue value in the background
let green2 = 125; //new variable to set the green value in the background

function setup() {
  createCanvas(windowWidth, windowHeight);

  input = createInput(" "); // creates an input
  input.position(windowWidth / 2 - 100, 50); //positions the input
}

function draw(){
  let tempr = input.value(); // sets the variable "tempr" to equal the value typed in the input
  if (tempr > 0) { //checks to see if the temprature should be raised or lowered
    state = 1;
  }
  else{
    state = 0;
  }
  if (state === 1){ // decides to heat the background
    red2 = red2 + tempr; // applies the number inputted to the the present red value
    blue2 = 125; // resets the blue value to its default
    if (red2 > 250){ // makes sure the red value doesnt end up exceeding the limit
      red2 = 250;
    }
  }
  if (state === 2){ //cheacks to see if the background should be cooled
    blue2 = abs(blue2 + tempr); // applies the cooling
    red2 = 125; //sets the red to ts default
    if (blue2 > 250){ //makes sure the blue value doesnt exceed 250
      blue2 = 250;
    }
  }
  background(red2, green2, blue2); //applies the changes

}
