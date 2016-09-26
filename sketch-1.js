function setup() {
  createCanvas (400,400);
  background(255);
}

function draw() {
  
  strokeWeight(1);
  stroke(0);
  
  for(var x=15;x<400;x=x+15){
    line(200,10,x,400);
  }
}