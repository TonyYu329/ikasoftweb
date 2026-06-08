import { Game } from './modules/core/game.js';
import { GameState } from './modules/core/state.js';
import { Renderer } from './modules/rendering/renderer.js';

window.onload = function() {
    const game = new Game();
    game.init('gameCanvas');
    game.start();
};
