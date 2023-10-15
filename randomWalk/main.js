/// <reference path="../TSDef/p5.global-mode.d.ts" />
// top line is required for intellisens


let walker;
let histo;
let active = false;
let startup = true;

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
  text("'a' - animieren",20 ,340)
  text("'l' - löschen",20 ,360)
  text("mit Mauseklick hinzufügen",20 ,380)


  
}


function draw() {
  //background(50);
  
  walker.update();
  if (walker.drawn) {
    histo.getValue(walker.endY);
  }
  histo.show();
  showText();
  if (startup){
    noLoop();
    startup = false;
  }

}

function keyPressed() {
  if (key === 'a') {
    if (active) {
      noLoop();
      active = false
    } else {
      loop();
      active = true
    }
  } 
  if (key === 'l') {
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

