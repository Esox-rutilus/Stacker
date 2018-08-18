let gameModule;
let stackerBoxOpts = {
    width: 50,
    height: 50
};
function initGame() {
    gameModule = new GameModule(720, 1280, 'canvasContainer', stackerBoxOpts);
    // gameModule.addComponent(
    //     createStackerBox({
    //         canvasContext: gameModule.getCanvasContext(),
    //         width: 200,
    //         height: 200,
    //         position: {
    //             x: 200,
    //             y: 200
    //         }
    //     })
    // );
    gameModule.start();
}
function createStackerBox(opts) {
    return new StackerBox(opts);
}
initGame();