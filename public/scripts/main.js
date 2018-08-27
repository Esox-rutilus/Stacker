let gameModule;
let stackerBoxOpts = {
    width: 50,
    height: 50
};
function initGame() {
    gameModule = new GameModule(720, 1280, 'canvasContainer', stackerBoxOpts);
    gameModule.start();
}
initGame();