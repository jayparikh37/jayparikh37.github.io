let ball ={
  x: 200,
  y: 300,
  radius: 50,
};
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  fill(0);
  ball.x = mouseX;
  ball.y = mouseY;
  ellipse(ball.x, ball.y, ball.radius, ball.radius);
}
