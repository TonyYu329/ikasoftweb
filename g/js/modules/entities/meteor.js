import { ENEMY_SPEED, GAME_WIDTH, GAME_HEIGHT } from '../core/constants.js';

export class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = ENEMY_SPEED + Math.random() * 50;
        this.radius = 15 + Math.random() * 15;
        this.active = true;
        this.hp = Math.ceil(this.radius / 10);
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 2;
    }
    
    update(dt) {
        this.y += this.speed * dt;
        this.rotation += this.rotSpeed * dt;
        if (this.y > GAME_HEIGHT + 50) {
            this.active = false;
        }
    }
    
    hit() {
        this.hp--;
        if (this.hp <= 0) {
            this.active = false;
            return true;
        }
        return false;
    }
    
    render(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Meteor body
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
        gradient.addColorStop(0, '#ff6b6b');
        gradient.addColorStop(0.5, '#c0392b');
        gradient.addColorStop(1, '#2c3e50');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Craters
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.beginPath();
        ctx.arc(-5, -5, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(5, 3, 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

export class EnemyManager {
    constructor() {
        this.list = [];
        this.spawnTimer = 0;
        this.spawnInterval = 1.5;
    }
    
    update(dt) {
        this.spawnTimer += dt;
        if (this.spawnTimer >= this.spawnInterval) {
            this.spawn();
            this.spawnTimer = 0;
            this.spawnInterval = Math.max(0.3, this.spawnInterval - 0.01);
        }
        
        for (const e of this.list) {
            e.update(dt);
        }
        this.list = this.list.filter(e => e.active);
    }
    
    spawn() {
        const x = Math.random() * (GAME_WIDTH - 100) + 50;
        this.list.push(new Enemy(x, -30));
    }
    
    render(ctx) {
        for (const e of this.list) {
            e.render(ctx);
        }
    }
}