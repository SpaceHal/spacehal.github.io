class Histogram {
    constructor() {
        // histogramm bins range from -200 to 200
        this.bins       = 9; // #bin: 0, 1, ... , bins-1
        this.incr       = 0.5;
        this.maxValue   = 120
        this.range      = 340;
        this.hist       = Array(this.bins);
        this.yOffset    = 10;  // y-axis offset
        this.margin     = 3;  // margin between plotted bins
        this.pgX        = 540;
        this.pgY        = 2;
        this.pgHeight   = 416;
        this.pgWidth    = 150;
        this.pgH        = createGraphics(this.pgWidth, this.pgHeight);

        // first bin takes values from -range/2 to -range/2 + range/bins
        for (let i = 0; i < this.bins; i++) {
            this.hist[i] = {
                bin: this.range / (this.bins) * (i+1) - this.range / 2,
                v: 0
            }
        }
    }
    reset(){
        for (let i = 0; i < this.hist.length; i++) {
            this.hist[i].v = 0;
        }
    }

    // receive a value and put it to the corresponding bin of the histogramm
    getValue(pValue) {
        if (pValue > -this.range/2 || pValue < this.range/2){ // only pValues the fit into the histo range
            for (let i = 0; i < this.hist.length; i++) {
                if (pValue < this.hist[i].bin) {
                    this.hist[i].v += this.incr;
                    if (this.hist[i].v >= this.maxValue) { noLoop() }
                    break;
                }
            }
        }
    }

    show() {
        this.pgH.clear();
        this.pgH.fill(255);
        this.pgH.stroke(0);
        this.pgH.noStroke();
        this.pgH.rect(0, 0, this.pgWidth, this.pgHeight)
        this.pgH.strokeWeight(2.5);
        this.pgH.fill(200);
        this.pgH.stroke(200,100,100);

        let extraY = (this.pgHeight-this.range)/2;

        // for (let i = 0; i < this.hist.length; i++) {
        //     // ACHTUNG: Der vertikale Versatz des Histogramms stimmt noch nicht
        //     this.pgH.curveVertex(this.yOffset + this.hist[i].value, this.hist[i].bin + this.range * 0.5 - this.pgY);
        // }
        this.pgH.beginShape();
        this.pgH.vertex(this.yOffset,                  this.range/2 - this.range/2 + extraY + this.margin );
        this.pgH.vertex(this.yOffset + this.hist[0].v, this.range/2 - this.range/2 + extraY + this.margin);
        this.pgH.vertex(this.yOffset + this.hist[0].v, this.range/2 + this.hist[0].bin + extraY - this.margin );
        this.pgH.vertex(this.yOffset,                  this.range/2 + this.hist[0].bin + extraY - this.margin );
        this.pgH.endShape()

        for (let i = 1; i < this.hist.length; i++) {
            this.pgH.beginShape();
            this.pgH.vertex(this.yOffset,                  this.range/2 + this.hist[i-1].bin + extraY + this.margin );
            this.pgH.vertex(this.yOffset + this.hist[i].v, this.range/2 + this.hist[i-1].bin + extraY + this.margin);
            this.pgH.vertex(this.yOffset + this.hist[i].v, this.range/2 + this.hist[i].bin   + extraY - this.margin);
            this.pgH.vertex(this.yOffset,                  this.range/2 + this.hist[i].bin   + extraY - this.margin );
            this.pgH.endShape();
        }
        //this.pgH.vertex(this.yOffset, this.range + extraY );

        image(this.pgH, this.pgX, this.pgY);
        //print("done!")
    }


}