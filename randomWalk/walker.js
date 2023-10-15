class RandomWalker {
    constructor() {
        this.pgHeight = 400;
        this.pgWidth = 450;
        this.pgX = 0;
        this.pgY = 0;
        this.xMin = 20;
        this.xMax = 430;
        this.dx = 2;
        this.yBase = this.pgHeight/2;
        //this.xBaseHist = 550;
        this.randAmp = 6;  //7 amplitude of random function
        this.endY = 0;

        this.pgW  = createGraphics(this.pgWidth, this.pgHeight);
        this.pgW.background(255);
        this.pgW.noFill();
        this.pgW.stroke(0,0,0,150);
        this.pgW.strokeWeight(1)
        //this.pgW.blendMode(DIFFERENCE);

        this.pgCS = createGraphics(this.pgWidth, this.pgHeight);
        this.drawCoSys();

        this.drawn = false;  // True, if the graph is finished
        this.restart();

        // animation 
        //this.animationTime = 200;// in ms
        //this.lastUpdate  = 0; 
    }

    drawCoSys() {
        this.pgCS.noStroke();
        this.pgCS.fill(255,0);
        this.pgCS.rect(0, 0, this.pgWidth, this.pgHeight, 10,10,10,10)

        this.pgCS.stroke(80);
        this.pgCS.strokeWeight(2);
        this.pgCS.line(10, this.yBase, this.pgWidth-10, this.yBase);
    }

    // restart the random walker
    restart() {
        this.x0 = this.xMin;
        this.y0 = 0;
        this.x1 = this.x0;
        this.y1 = this.y0;
    }

    reset(){
        this.pgW.background(255);
        // this.pgCS.noStroke();
        // this.pgCS.fill(255);
        // this.pgCS.rect(0, 0, this.pgWidth, this.pgHeight, 10,10,10,10);
        // image(this.pgCS, this.pgX, this.pgY);


    }

    update() {
        //let step = 20; //
    
        let step = (this.xMax - this.xMin) / this.dx;
        this.pgW.beginShape();
        this.pgW.vertex(this.x0, this.yBase + this.y0)
        for (let i = 0; i < step; i++) {
            //this.x0 = this.x1;
            //this.y0 = this.y1;
            this.x1 = this.x1 + this.dx;
            this.y1 = this.y1 + random(-this.randAmp, this.randAmp); 

            //this.pgW.line(this.x0, this.yBase + this.y0, this.x1, this.yBase + this.y1);
            this.pgW.vertex(this.x1, this.yBase + this.y1);
        }
        this.pgW.endShape();

        if (this.x1 >= this.xMax) {
            this.endY = this.y1;
            this.drawn = true;

            this.x0 = this.xMin;
            this.x1 = this.x0;
            this.y1 = 0;
        }


        image(this.pgW, this.pgX, this.pgY);
        image(this.pgCS, this.pgX, this.pgY);

    }
}