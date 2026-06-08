// Visual effects helper
const Visuals = {
    screenShake: 0,
    
    shake(intensity) {
        this.screenShake = intensity;
    },
    
    drawHealthBar(ctx, x, y, width, height, ratio) {
        ctx.fillStyle = '#333';
        ctx.fillRect(x, y, width, height);
        
        const color = ratio > 0.5 ? '#4caf50' : ratio > 0.25 ? '#ff9800' : '#f44336';
        ctx.fillStyle = color;
        ctx.fillRect(x + 1, y + 1, (width - 2) * ratio, height - 2);
        
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, width, height);
    },
    
    drawGlow(ctx, x, y, radius, color) {
        ctx.save();
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
};