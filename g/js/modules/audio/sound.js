export class SoundManager {
    constructor() {
        this.sounds = new Map();
        this.enabled = true;
    }
    
    load(name, url) {
        const audio = new Audio(url);
        this.sounds.set(name, audio);
    }
    
    play(name) {
        if (!this.enabled) return;
        const sound = this.sounds.get(name);
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(() => {});
        }
    }
    
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}