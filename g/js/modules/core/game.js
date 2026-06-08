import { Canvas } from './canvas.js';
import { GameState } from './state.js';
import { Player } from '../entities/plane.js';
import { BulletManager } from '../entities/bullet.js';
import { EnemyManager } from '../entities/meteor.js';
import { ParticleSystem } from '../entities/particle.js';
import { Background } from '../entities/background.js';
import { Renderer } from '../rendering/renderer.js';

export class Game {
    constructor() {
        this.state = new GameState();
        this.entities = [];
        this.lastTime = 0;
    }
    
    init(canvasId) {
        this.canvas = new Canvas(canvasId);
        this.renderer = new Renderer(this.canvas.ctx);
        this.background = new Background(this.canvas);
        this.player = new Player(this.canvas.width / 2, this.canvas.height - 100);
        this.bullets = new BulletManager();
        this.enemies = new EnemyManager();
        this.particles = new ParticleSystem();
        this.state.init();
    }
    
    start() {
        this.lastTime = performance.now();
        this.loop(this.lastTime);
    }
    
    loop(timestamp) {
        const dt = Math.min((timestamp - this.lastTime) / 1000, 0.05);
        this.lastTime = timestamp;
        
        if (!this.state.isPaused) {
            this.update(dt);
        }
        this.render();
        
        requestAnimationFrame((t) => this.loop(t));
    }
    
    update(dt) {
        if (this.state.isGameOver) return;
        
        this.background.update(dt);
        this.player.update(dt);
        this.bullets.update(dt);
        this.enemies.update(dt);
        this.particles.update(dt);
        
        // Collision detection
        this.checkCollisions();
        
        // Update score
        this.state.update(dt);
    }
    
    render() {
        this.canvas.clear();
        this.background.render(this.canvas.ctx);
        this.player.render(this.canvas.ctx);
        this.bullets.render(this.canvas.ctx);
        this.enemies.render(this.canvas.ctx);
        this.particles.render(this.canvas.ctx);
        this.renderer.renderUI(this.canvas.ctx, this.state);
    }
    
    checkCollisions() {
        // Bullet-enemy collisions
        for (const bullet of this.bullets.list) {
            for (const enemy of this.enemies.list) {
                if (this.checkCollision(bullet, enemy)) {
                    bullet.active = false;
                    enemy.hit();
                    this.state.addScore(10);
                    this.particles.explode(enemy.x, enemy.y);
                }
            }
        }
        
        // Player-enemy collisions
        if (!this.player.invincible) {
            for (const enemy of this.enemies.list) {
                if (this.checkCollision(this.player, enemy)) {
                    enemy.active = false;
                    this.player.hit();
                    this.state.loseLife();
                    this.particles.explode(this.player.x, this.player.y);
                    if (this.state.lives <= 0) {
                        this.state.gameOver();
                    }
                }
            }
        }
    }
    
    checkCollision(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist < (a.radius + b.radius);
    }
}