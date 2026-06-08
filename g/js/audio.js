const AudioManager = {
    sounds: {},
    enabled: true,
    
    init() {
        // Initialize audio context if needed
    },
    
    play(name) {
        if (!this.enabled) return;
        // Play sound effect
    },
    
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
};