function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  if (mouseIsPressed && keyIsPressed && key === "t" || key === "T"){
    let x = random(width);
    let y = random(height);
    triangle(x, y, x - 50, y + 150, x + 50, y + 150);
  }
  if (keyIsPressed && key === "z" || key === "x"){
    let x = random(width);
    let y = random(height);
    ellipse(x,y,100, 100)(x, y, x - 50, y + 150, x + 50, y + 150);  

  }


}
