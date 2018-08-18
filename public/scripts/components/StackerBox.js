class StackerBox extends GameObject {
    constructor(opts) {
        super(opts);
        this.movingLeft = true;
        this.move = this.move.bind(this);
    }
    move() {
        if (this.movingLeft) {
            this.position.x += this.width; 
        }
        else {
            this.position.x -= this.width;
        }
    }
}