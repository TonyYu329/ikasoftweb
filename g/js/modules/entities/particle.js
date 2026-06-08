export class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = 50 + Math.random() * 150;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.life = 0.5 + Math.random() * 0.5;
        this.maxLife = this.life;
        this.radius = 2 + Math.random() * 3;
        this.active = true;
        this.hue = Math.random() * 60 + 200;
    }
    
    update(dt) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.vy += 50 * dt;
        this.life -= dt;
        if (this.life <= 0) {
            this.active = false;
        }
    }
    
    render(ctx) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

export class ParticleSystem {
    constructor() {
        this.list = [];
    }
    
    explode(x, y) {
        for (let i = 0; i < 15; i++) {
            this.list.push(new Particle(x, y));
        }
    }
    
    update(dt) {
        for (const p of this.list) {
            p.update(dt);
        }
        this.list = this.list.filter(p => p.active);
    }
    
    render(ctx) {
        for (const p of this.list) {
            p.render(ctx);
        }
    }
}