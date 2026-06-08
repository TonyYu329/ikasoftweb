export class Renderer {
    constructor(ctx) {
        this.ctx = ctx;
    }
    
    renderUI(ctx, state) {
        ctx.save();
        ctx.fillStyle = '#fff';
        ctx.font = '18px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Score: ${state.score}`, 20, 40);
        ctx.fillText(`Level: ${state.level}`, 20, 65);
        
        ctx.textAlign = 'right';
        ctx.fillText(`Lives: ${'♥'.repeat(state.lives)}`, ctx.canvas.width - 20, 40);
        
        if (state.isGameOver) {
            ctx.save();
            ctx.fillStyle = 'rgba(0,0,0,0.7)';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            
            ctx.fillStyle = '#fff';
            ctx.font = '48px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', ctx.canvas.width / 2, ctx.canvas.height / 2 - 20);
            
            ctx.font = '24px Arial';
            ctx.fillText(`Final Score: ${state.score}`, ctx.canvas.width / 2, ctx.canvas.height / 2 + 40);
            ctx.restore();
        }
        
        ctx.restore();
    }
}