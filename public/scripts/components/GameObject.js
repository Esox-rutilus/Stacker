class GameObject {
    constructor(opts) {
        this.width = opts.width;
        this.height = opts.height;
        this.color = opts.color;
        this.position = opts.position;
        this.ctx = opts.ctx;
    }
    //Fills in 1 pixel at the desired spot
    drawAt(x, y, color = '#000000') {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, 1, 1);
    }
    //Draws the component(Must be a square) A more advanced system using mapping could be used for displaying complicated shapes
    draw() {
        for (let x=this.position.x; x<this.position.x + this.width; x++) {
            for (let y=this.position.y; y<this.position.y + this.height; y++) {
                this.drawAt(x, y, this.color);
            }
        }
    }
    update() {
        this.draw();
    }
}