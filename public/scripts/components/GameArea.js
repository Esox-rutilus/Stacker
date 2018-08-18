class GameArea {
    constructor(blockWidth, blockHeight, blockCount, levelCount, pos, ctx) {
        this.confines = {
            pos: pos,
            width: blockWidth * blockCount,
            height: blockHeight * levelCount
        };
        this.ctx = ctx;
    }
    draw() {
        let c = this.ctx;
        let x = this.confines.pos.x;
        let y = this.confines.pos.y;
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x + this.confines.width, y);
        c.lineTo(x + this.confines.width, y + this.confines.height);
        c.lineTo(x, y + this.confines.height);
        c.lineTo(x, y);
        c.stroke();
    }
}