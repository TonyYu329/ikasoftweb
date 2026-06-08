const InputManager = {
    keys: {},
    mouse: { x: 0, y: 0, clicked: false },
    
    init() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        window.addEventListener('click', () => {
            this.mouse.clicked = true;
        });
    },
    
    isKeyDown(code) {
        return !!this.keys[code];
    },
    
    isMouseClicked() {
        if (this.mouse.clicked) {
            this.mouse.clicked = false;
            return true;
        }
        return false;
    }
};