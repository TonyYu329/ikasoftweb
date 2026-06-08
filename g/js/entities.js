class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;
        this.rotation = 0;
        this.active = true;
    }
    
    update(dt) {}
    
    render(ctx) {}
    
    destroy() {
        this.active = false;
    }
}