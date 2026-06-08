export class CanvasFixed {
    constructor(id, width, height) {
        this.element = document.getElementById(id);
        this.ctx = this.element.getContext('2d');
        this.width = width || 800;
        this.height = height || 600;
        this.element.width = this.width;
        this.element.height = this.height;
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}