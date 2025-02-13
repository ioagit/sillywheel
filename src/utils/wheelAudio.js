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

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      frequency,
      this.audioContext.currentTime
    );

    gainNode.gain.setValueAtTime(0.25, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + duration
    );

    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  startSpinSound() {
    this.isPlaying = true;
    this.tickRate = 10;

    const playTick = () => {
      if (!this.isPlaying) return;
      this.createTickSound(1000 + Math.random() * 200);
      this.tickInterval = setTimeout(playTick, this.tickRate);
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