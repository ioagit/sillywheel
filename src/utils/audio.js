class WheelAudio {
  constructor() {
    this.audioContext = null;
    this.tickRate = 0;
    this.isPlaying = false;
    this.tickInterval = null;
  }

  initAudio() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
  }

  createTickSound(frequency = 1000, duration = 0.03) {
    if (!this.audioContext) this.initAudio();

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Configure oscillator for a playful tone
    oscillator.type = "sine"; // Modified: changed from "square"
    oscillator.frequency.setValueAtTime(
      frequency,
      this.audioContext.currentTime
    );

    // Configure gain for a more pronounced playful sound
    gainNode.gain.setValueAtTime(0.25, this.audioContext.currentTime); // Modified: increased volume
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + duration
    );

    // Play sound
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  startSpinSound() {
    this.isPlaying = true;
    this.tickRate = 10; // Start with fast ticks

    const playTick = () => {
      if (!this.isPlaying) return;

      this.createTickSound(1000 + Math.random() * 200);

      // Schedule next tick with current rate
      this.tickInterval = setTimeout(playTick, this.tickRate);

      // Gradually slow down the tick rate
      this.tickRate = Math.min(200, this.tickRate * 1.1);
    };

    playTick();
  }

  stopSpinSound() {
    this.isPlaying = false;
    if (this.tickInterval) {
      clearTimeout(this.tickInterval);
    }
  }
}

export const wheelAudio = new WheelAudio();

class SpinningAudio {
  constructor() {
    this.type = "none";
    this.audioContext = null;
    this.gainNode = null;
    this.oscillator = null;
    this.isPlaying = false;
    this.volume = 0.5;
    this.tickInterval = null;
    this.tickRate = 10;
  }

  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      this.gainNode = this.audioContext.createGain();
      this.gainNode.gain.value = this.volume;
      this.gainNode.connect(this.audioContext.destination);
    }
  }

  setVolume(value) {
    this.volume = value;
    if (this.gainNode) {
      this.gainNode.gain.value = value;
    }
  }

  start() {
    this.init();
    if (this.type === "none") return;

    this.isPlaying = true;
    this.tickRate = 10; // Start fast

    const playTick = () => {
      if (!this.isPlaying) return;
      this.play();
      this.tickInterval = setTimeout(playTick, this.tickRate);
      this.tickRate = Math.min(200, this.tickRate * 1.1); // Gradually slow down
    };

    playTick();
  }

  stop() {
    this.isPlaying = false;
    if (this.tickInterval) {
      clearTimeout(this.tickInterval);
      this.tickInterval = null;
    }
    if (this.oscillator) {
      this.oscillator.stop();
      this.oscillator.disconnect();
      this.oscillator = null;
    }
  }

  play() {
    this.init();
    if (this.type === "none") return;

    const sounds = {
      tick: () => {
        // Bouncy Boop - Playful bouncing sound
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = "sine";
        this.oscillator.frequency.setValueAtTime(
          880,
          this.audioContext.currentTime
        );
        this.oscillator.frequency.exponentialRampToValueAtTime(
          440,
          this.audioContext.currentTime + 0.1
        );
      },
      slot: () => {
        // Lucky Ducky - Quacking slot machine effect
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = "square";
        this.oscillator.frequency.setValueAtTime(
          587.33,
          this.audioContext.currentTime
        );
        this.oscillator.frequency.exponentialRampToValueAtTime(
          880,
          this.audioContext.currentTime + 0.05
        );
      },
      drum: () => {
        // Rhythm Riot - Drum-like sound
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = "triangle";
        this.oscillator.frequency.setValueAtTime(
          100,
          this.audioContext.currentTime
        );
        this.oscillator.frequency.exponentialRampToValueAtTime(
          50,
          this.audioContext.currentTime + 0.1
        );
      },
      bell: () => {
        // Ding Dong Delight - Bell-like sound
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = "sine";
        this.oscillator.frequency.setValueAtTime(
          1046.5,
          this.audioContext.currentTime
        );
        this.oscillator.frequency.exponentialRampToValueAtTime(
          523.25,
          this.audioContext.currentTime + 0.2
        );
      },
      arcade: () => {
        // Pixel Party - 8-bit style sound
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = "square";
        this.oscillator.frequency.setValueAtTime(
          440,
          this.audioContext.currentTime
        );
        this.oscillator.frequency.setValueAtTime(
          880,
          this.audioContext.currentTime + 0.05
        );
        this.oscillator.frequency.setValueAtTime(
          440,
          this.audioContext.currentTime + 0.1
        );
      },
      magic: () => {
        // Sparkle Spells - Magical sparkly sound
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = "sine";
        this.oscillator.frequency.setValueAtTime(
          1174.66,
          this.audioContext.currentTime
        );
        this.oscillator.frequency.exponentialRampToValueAtTime(
          2349.32,
          this.audioContext.currentTime + 0.1
        );
      },
      party: () => {
        // Confetti Chaos - Party horn sound
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = "sawtooth";
        this.oscillator.frequency.setValueAtTime(
          440,
          this.audioContext.currentTime
        );
        this.oscillator.frequency.linearRampToValueAtTime(
          880,
          this.audioContext.currentTime + 0.1
        );
      },
      space: () => {
        // UFO Disco - Space-age sound
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = "sine";
        this.oscillator.frequency.setValueAtTime(
          440,
          this.audioContext.currentTime
        );
        this.oscillator.frequency.exponentialRampToValueAtTime(
          880,
          this.audioContext.currentTime + 0.2
        );
        this.oscillator.frequency.exponentialRampToValueAtTime(
          440,
          this.audioContext.currentTime + 0.4
        );
      },
    };

    if (sounds[this.type]) {
      sounds[this.type]();
      this.oscillator.connect(this.gainNode);
      this.oscillator.start();
      this.oscillator.stop(this.audioContext.currentTime + 0.1);
      this.isPlaying = true;
    }
  }
}

// Create and export a single instance
export const spinningAudio = new SpinningAudio();

// For backward compatibility
export default spinningAudio;
