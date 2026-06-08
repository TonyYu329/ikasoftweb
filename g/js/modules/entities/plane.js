import { PLAYER_SPEED, GAME_WIDTH, GAME_HEIGHT, INVINCIBLE_DURATION } from '../core/constants.js';

export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = PLAYER_SPEED;
        this.radius = 20;
        this.invincible = false;
        this.invincibleTimer = 0;
        this.shootTimer = 0;
        this.shootInterval = 0.2;
    }
    
    update(dt, input) {
        // Movement
        if (input.isKeyDown('ArrowLeft') || input.isKeyDown('KeyA')) {
            this.x -= this.speed * dt;
        }
        if (input.isKeyDown('ArrowRight') || input.isKeyDown('KeyD')) {
            this.x += this.speed * dt;
        }
        if (input.isKeyDown('ArrowUp') || input.isKeyDown('KeyW')) {
            this.y -= this.speed * dt;
        }
        if (input.isKeyDown('ArrowDown') || input.isKeyDown('KeyS')) {
            this.y += this.speed * dt;
        }
        
        // Boundaries
        this.x = Math.max(this.radius, Math.min(GAME_WIDTH - this.radius, this.x));
        this.y = Math.max(this.radius, Math.min(GAME_HEIGHT - this.radius, this.y));
        
        // Invincibility
        if (this.invincible) {
            this.invincibleTimer -= dt;
            if (this.invincibleTimer <= 0) {
                this.invincible = false;
            }
        }
        
        // Shooting
        this.shootTimer += dt;
        if (input.isKeyDown('Space') && this.shootTimer >= this.shootInterval) {
            this.shootTimer = 0;
            return true; // Signal to fire bullet
        }
        return false;
    }
    
    hit() {
        if (!this.invincible) {
            this.invincible = true;
            this.invincibleTimer = INVINCIBLE_DURATION;
        }
    }
    
    render(ctx) {
        ctx.save();
        
        if (this.invincible && Math.floor(Date.now() / 100) % 2 === 0) {
            ctx.globalAlpha = 0.5;
        }
        
        ctx.translate(this.x, this.y);
        
        // Ship body
        ctx.beginPath();
        ctx.moveTo(0, -this.radius);
        ctx.lineTo(-this.radius * 0.8, this.radius * 0.6);
        ctx.lineTo(0, this.radius * 0.3);
        ctx.lineTo(this.radius * 0.8, this.radius * 0.6);
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(0, -this.radius, 0, this.radius);
        gradient.addColorStop(0, '#4af');
        gradient.addColorStop(0.5, '#2a6fd4');
        gradient.addColorStop(1, '#1a4a8a');
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = '#8cf';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Cockpit
        ctx.beginPath();
        ctx.arc(0, -5, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#8cf';
        ctx.fill();
        
        // Engine glow
        ctx.fillStyle = 'rgba(255, 200, 50, 0.6)';
        ctx.beginPath();
        ctx.ellipse(0, this.radius * 0.5, 8, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
    
    getPosition() {
        return { x: this.x, y: this.y };
    }
}