function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(0);
  print(second());
}


function draw() {
  background("orange");
  let secondsNow = second();
  let minutesNow = minute();
  let hourNow = hour();

  let s = map(secondsNow, 0, 59, 0, width);
  let w = map(minutesNow, 0, 59, 5, 100);
  let h = map(hourNow, 0, 23, 10, height-10);

  stroke("black");
  strokeWeight(w);
  line(0, h, s, h);
  
}
