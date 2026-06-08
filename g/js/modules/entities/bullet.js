import { BULLET_SPEED, GAME_HEIGHT } from '../core/constants.js';

export class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = BULLET_SPEED;
        this.radius = 3;
        this.active = true;
    }
    
    update(dt) {
        this.y -= this.speed * dt;
        if (this.y < -10) {
            this.active = false;
        }
    }
    
    render(ctx) {
        ctx.save();
        ctx.shadowColor = '#4af';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#4af';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

export class BulletManager {
    constructor() {
        this.list = [];
    }
    
    fire(x, y) {
        this.list.push(new Bullet(x, y));
    }
    
    update(dt) {
        for (const b of this.list) {
            b.update(dt);
        }
        this.list = this.list.filter(b => b.active);
    }
    
    render(ctx) {
        for (const b of this.list) {
            b.render(ctx);
        }
    }
}