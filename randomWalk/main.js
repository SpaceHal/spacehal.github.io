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
  createCanvas(600, 400);
  background(50);
  noFill();
  noStroke();
  //stroke(80);
  //strokeWeight(4);
  rect(0,0,width, height);
  textStyle(ITALIC);
  textSize(15);

}

function showText(){
  //textStyle(NORMAL);
  textSize(15);
  fill(20);
  textAlign(LEFT)
  text('Random Walk 2D',20 ,20)
  text('(Irrfahrt)',20 ,40)
  textAlign(RIGHT)
  text('absolute',590 ,20)
  text('Häufigkeit',590 ,40)

  textSize(13);
  textAlign(LEFT)
  fill(150);
  text("'c' - Löschen",20 ,360)
  text("'p' - Pause",20 ,380)
}


function draw() {
  //background(50);

  walker.update();
  if (walker.drawn) {
    histo.getValue(walker.endY);
  }
  histo.show();
  showText();

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
  if (key === 'c') {
    walker.reset();
    histo.reset();
    draw();
  } 
}

function mousePressed(){

  if (active) {
    walker.reset();
    histo.reset();
    loop();
    active = true
  } else {
    draw()
    noLoop();
    active = false
  }
}

