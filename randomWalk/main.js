/// <reference path="../TSDef/p5.global-mode.d.ts" />
// top line is required for intellisens
/* Todo:
  - new walker per click, space
  - continous mode with `c`
  - histogramm with real bins (i.e. steps)
*/

let walker;
let histo;
let active = true

// coordinate system


function setup() {
  walker = new RandomWalker();
  histo = new Histogram();
  frameRate(50);
  createCanvas(700, 420);
  background(50);
  noFill();
  noStroke();
  //stroke(80);
  //strokeWeight(4);
  rect(0,0,width, height);
  textStyle(ITALIC);
  textSize(15);

}


function draw() {
  //clear();
  background(50);
  //rect(0,0,width, height);

  walker.update();
  if (walker.drawn) {
    //print(walker.endY);
    histo.getValue(walker.endY);
  }
  histo.show();
  //textStyle(NORMAL);
  fill(100);
  textAlign(RIGHT)
  text('Random Walk 2D (Irrfahrt)',510 ,405)
  textAlign(LEFT)
  text('absolute Häufigkeit',545 ,405)

  textAlign(LEFT)
  fill(150);
  text("'p' - Pause",20 ,405)
}

function keyPressed() {
  if (key === 'p') {
    if (active) {
      noLoop();
      active = false
    } else {
      loop();
      active = true
    }
  } 
}

function mousePressed(){
  walker.reset();
  histo.reset();
  if (active) {
    loop();
    active = true
  } else {
    noLoop();
    active = false
  }
}

