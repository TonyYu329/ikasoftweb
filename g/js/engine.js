const GameEngine = {
    fps: 60,
    lastTime: 0,
    deltaTime: 0,
    
    init(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
    },
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    
    update(dt) {
        // Override in game
    },
    
    render() {
        // Override in game
    },
    
    loop(timestamp) {
        this.deltaTime = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;
        
        if (this.deltaTime < 1) {
            this.update(this.deltaTime);
            this.render();
        }
        
        requestAnimationFrame((t) => this.loop(t));
    },
    
    start() {
        this.lastTime = performance.now();
        this.loop(this.lastTime);
    }
};