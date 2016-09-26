function setup() {
  createCanvas (400,400);
  background(0);
}

function draw() {
  strokeWeight(1);
  stroke(255);
  
  // line(10,0,10,20);
  // line(20,0,20,40);
  
  for(var x=10;x<400;x=x+10){
    line(x+10,0,x+10,x+10);
  }
}