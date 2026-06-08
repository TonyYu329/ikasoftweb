const Game = require('./game').Game;

window.onload = function() {
    const game = new Game();
    game.init('gameCanvas');
    game.start();
};
