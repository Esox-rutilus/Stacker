class GameModule {    
    constructor(height, width, canvasContainerId, boxDimensions) {
        //The list of components to draw
        this.componentList = [];
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.levelCount = 12;
        this.currentLevel = 0;
        this.boxDimensions = boxDimensions;
        this.ctx = this.canvas.getContext('2d');
        this.gameArea = new GameArea(boxDimensions.width, boxDimensions.height, 8, this.levelCount, {x: 20, y: 20}, this.ctx);
        $('#' + canvasContainerId).append(this.canvas);
        this.levels = {
            low: {
                minLevel: 0,
                maxLevel: 3,
                maxBlocks: 3,
                numberOutsideEdge: 1,
                speed: 500
            },
            medium: {
                minLevel: 4,
                maxLevel: 6,
                maxBlocks: 2,
                numberOutsideEdge: 1,
                speed: 250
            },
            high: {
                minLevel: 7,
                maxLevel: 12,
                maxBlocks: 1,
                numberOutsideEdge: 0,
                speed: 100
            },
            ultra: {
                minLevel: 13,
                maxLevel: 20,
                maxBlocks: 1,
                numberOutsideEdge: 0,
                speed: 50
            }  
        };
        //Fix for losing context on this inside functions, add them here as needed
        this.update = this.update.bind(this);
        this.moveComponents = this.moveComponents.bind(this);
    }
    start() {
        this.currentLevel = 1;
        // let level = this.levels.low;
        this.interval = setInterval(this.update, 20);
        this.moveInterval = setInterval(this.moveComponents, this.levels.high.speed);
        // this.addComponent(new StackerObject(level.maxBlocks, level.numberOutsideEdge, level.speed, levelCoords, this.boxDimensions, this.ctx, "#000000"));
        this.addComponent(new StackerBox({
            width: this.boxDimensions.width,
            height: this.boxDimensions.height,
            color: "#000000",
            position: {x: 20, y: this.boxDimensions.height * (this.levelCount - 1) + 20},
            ctx: this.ctx,
        }));
    }
    stop() {
        clearInterval(this.interval);
    }
    getCanvasContext() {
        return this.ctx;
    }
    addComponent(component) {
        this.componentList.push(component);
    }
    moveComponents() {
        for(let i=0; i<this.componentList.length; i++) {
            let comp = this.componentList[i];
            let position = (comp.position.x - this.gameArea.confines.pos.x) / comp.width;
            if (position === 7) {
                comp.movingLeft = false;
            }
            else if (position === 0) {
                comp.movingLeft = true;
            }
            comp.move();
        }
    }
    update() {
        this.clear();
        this.gameArea.draw();
        for(let i=0; i<this.componentList.length; i++) {
            this.componentList[i].update();
        }
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}