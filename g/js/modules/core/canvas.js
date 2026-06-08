export class Canvas {
    constructor(id, width, height) {
        this.element = document.getElementById(id);
        this.ctx = this.element.getContext('2d');
        this.width = width || window.innerWidth;
        this.height = height || window.innerHeight;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.element.width = this.width;
        this.element.height = this.height;
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}