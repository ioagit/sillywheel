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
  constructor(type = "mechanical") {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.oscillator = null;
    this.gainNode = this.audioContext.createGain(); // Main gain node
    this.gainNode.connect(this.audioContext.destination);
    this.gainNode.gain.value = 0.7; // Modified: increased gain for a fun sound
    this.type = type;
    this.tickInterval = null;
    this.startTime = 0;
    this.duration = 5000;
  }

  setVolume(value) {
    if (this.gainNode) {
      this.gainNode.gain.value = value;
    }
  }

  getTickRate(progress) {
    const startRate = 5; // Keep fast start
    const endRate = 200; // Reduced end rate for better sync

    // Adjusted curve to match wheel deceleration
    const p = Math.pow(progress, 1.2); // Steeper curve at the end
    return startRate + (endRate - startRate) * p;
  }

  calculateProgress(currentTime) {
    const t = currentTime / this.duration;
    // Match the wheel's new cubic-bezier curve
    const p1 = 0.2,
      p2 = 0.1; // Match the wheel's control points

    // Adjusted curve for better end sync
    return t * (p1 + t * (1 - p1 - p2 + t * (1 + p2 - p1)));
  }

  getFrequency(progress, startFreq, endFreq) {
    return startFreq + (endFreq - startFreq) * progress;
  }

  start(segmentCount, totalRotation) {
    switch (this.type) {
      case "mechanical":
        this.playMechanicalTicks();
        break;
      case "electronic":
        this.playElectronicBeeps();
        break;
      case "casino":
        this.playRatchetSound();
        break;
      case "toy":
        this.playMusicalTones();
        break;
      default:
        this.playMechanicalTicks();
    }
  }

  createTickSound(frequency, duration = 0.05) {
    const osc = this.audioContext.createOscillator();
    const soundGain = this.audioContext.createGain();

    // Set playful oscillator type
    osc.type = "triangle"; // Modified: changed to triangle for a fun tone

    // Connect through main gain node for volume control
    osc.connect(soundGain);
    soundGain.connect(this.gainNode);

    osc.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    soundGain.gain.setValueAtTime(0.2, this.audioContext.currentTime);
    soundGain.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + duration
    );

    osc.start();
    osc.stop(this.audioContext.currentTime + duration);
  }

  playMechanicalTicks() {
    this.startTime = Date.now();
    const startFreq = 2000;
    const endFreq = 200;

    const tick = () => {
      const currentTime = Date.now() - this.startTime;
      if (currentTime >= this.duration) {
        return;
      }

      const progress = this.calculateProgress(currentTime);
      const tickRate = this.getTickRate(progress);
      const baseFreq = this.getFrequency(progress, startFreq, endFreq);

      this.createTickSound(baseFreq + Math.random() * 100);
      this.tickInterval = setTimeout(tick, tickRate);
    };

    tick();
  }

  playElectronicBeeps() {
    this.startTime = Date.now();
    const startFreq = 1500;
    const endFreq = 200;

    const beep = () => {
      const currentTime = Date.now() - this.startTime;
      if (currentTime >= this.duration) {
        return;
      }

      const progress = this.calculateProgress(currentTime);
      const interval = this.getTickRate(progress);
      const freq = this.getFrequency(progress, startFreq, endFreq);

      const osc = this.audioContext.createOscillator();
      // Set playful oscillator type
      osc.type = "triangle"; // Modified: changed from default for a fun sound
      const soundGain = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(
        freq * 1.5,
        this.audioContext.currentTime
      );

      osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);

      osc.connect(filter);
      filter.connect(soundGain);
      soundGain.connect(this.gainNode);

      soundGain.gain.setValueAtTime(0.15, this.audioContext.currentTime);
      soundGain.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.1
      );

      osc.start();
      osc.stop(this.audioContext.currentTime + 0.1);

      this.tickInterval = setTimeout(beep, interval);
    };

    beep();
  }

  playRatchetSound() {
    this.startTime = Date.now();

    const click = () => {
      const currentTime = Date.now() - this.startTime;
      if (currentTime >= this.duration) {
        return;
      }

      const progress = this.calculateProgress(currentTime);
      const clickRate = this.getTickRate(progress);

      const bufferSize = this.audioContext.sampleRate * 0.03;
      const buffer = this.audioContext.createBuffer(
        1,
        bufferSize,
        this.audioContext.sampleRate
      );
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.audioContext.createBufferSource();
      const soundGain = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();

      noise.buffer = buffer;
      filter.type = "bandpass";
      filter.frequency.value = 2000 - progress * 1000;
      filter.Q.value = 5;

      noise.connect(filter);
      filter.connect(soundGain);
      soundGain.connect(this.gainNode);

      soundGain.gain.setValueAtTime(
        0.15 * (1 - progress * 0.5),
        this.audioContext.currentTime
      );
      soundGain.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.03
      );

      noise.start();
      this.tickInterval = setTimeout(click, clickRate);
    };

    click();
  }

  playMusicalTones() {
    this.startTime = Date.now();
    // Modified: updated notes to a playful, kid-friendly scale (C5, D5, E5, F5, G5, A5)
    const notes = [523.25, 587.33, 659.25, 698.46, 783.99, 880.00];
    let noteIndex = 0;

    const playNote = () => {
      const currentTime = Date.now() - this.startTime;
      if (currentTime >= this.duration) {
        return;
      }

      const progress = this.calculateProgress(currentTime);
      const interval = this.getTickRate(progress);

      const osc = this.audioContext.createOscillator();
      const soundGain = this.audioContext.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(
        notes[noteIndex],
        this.audioContext.currentTime
      );

      osc.connect(soundGain);
      soundGain.connect(this.gainNode);

      soundGain.gain.setValueAtTime(
        0.2 * (1 - progress * 0.5),
        this.audioContext.currentTime
      );
      soundGain.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.2
      );

      osc.start();
      osc.stop(this.audioContext.currentTime + 0.2);

      noteIndex = (noteIndex + 1) % notes.length;
      this.tickInterval = setTimeout(playNote, interval);
    };

    playNote();
  }

  stop() {
    if (this.tickInterval) {
      clearTimeout(this.tickInterval);
      this.tickInterval = null;
    }
  }
}

// Create a single instance to share across components
export const spinningAudio = new SpinningAudio();

// Export the class for new instances if needed
export default SpinningAudio;
