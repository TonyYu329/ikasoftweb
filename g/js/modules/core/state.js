export class GameState {
    constructor() {
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.isGameOver = false;
        this.isPaused = false;
        this.time = 0;
    }
    
    init() {
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.isGameOver = false;
        this.time = 0;
    }
    
    addScore(points) {
        this.score += points;
        this.level = Math.floor(this.score / 100) + 1;
    }
    
    loseLife() {
        this.lives--;
        if (this.lives <= 0) {
            this.gameOver();
        }
    }
    
    gameOver() {
        this.isGameOver = true;
    }
    
    togglePause() {
        this.isPaused = !this.isPaused;
    }
    
    update(dt) {
        this.time += dt;
    }
}