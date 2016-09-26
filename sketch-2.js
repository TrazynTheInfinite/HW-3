function setup() {
  createCanvas(400,400);
  background(255);
}

function draw() {
  strokeWeight(1);
  stroke(0);
  noFill();
  
  
  for(var x=10; x<400;x=x+10){
    ellipse(200,200,x,x);
  }
}