class StackerObject{
    constructor(boxCount, boxCountOutsideScreen, speed, levelCoords, boxDimensions, ctx, color) {
        this.boxes = [];
        this.ctx = ctx;
        this.boxCountOutsideScreen = boxCountOutsideScreen;
        this.speed = speed;
        for(let i=0; i<boxCount; i++) {
            if (i != 0) {
                levelCoords.x += boxDimensions.width;
                levelCoords.y = boxDimensions.height;
            }
            this.boxes.push(new StackerBox({
                width: boxDimensions.width,
                height: boxDimensions.height,
                position: levelCoords,
                ctx: ctx,
                color: color
            }));
        }
        this.moveInterval = setInterval(this.move, this.speed);
    }
    move(moveLeft) {
        for(let i=0; i<this.boxes.length; i++) {
            this.boxes[i].move(moveLeft);
        }
    }
    update() {
        for(let i=0; i<this.boxes.length; i++) {
            this.boxes[i].update();
        }
    }
}