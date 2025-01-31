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

    // Configure oscillator
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(
      frequency,
      this.audioContext.currentTime
    );

    // Configure gain (volume)
    gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime);
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
    this.gainNode = null;
    this.type = type;
    this.tickInterval = null;
    this.startTime = 0;
    this.duration = 5100; // Slightly longer than wheel animation to match end
  }

  // Helper to calculate timing based on the wheel's cubic-bezier
  calculateProgress(currentTime) {
    // Cubic bezier values matching the wheel animation: cubic-bezier(0.17, 0.67, 0.12, 0.99)
    const x1 = 0.17,
      y1 = 0.67,
      x2 = 0.12,
      y2 = 0.99;
    const t = currentTime / this.duration;

    // Approximate the cubic-bezier timing
    const progress = 1 - Math.pow(1 - t, 3);
    return Math.min(1, Math.max(0, progress));
  }

  getTickRate(progress) {
    const startRate = 30; // Fastest tick rate (ms)
    const endRate = 300; // Reduced max interval for more ticks at end
    // Adjusted curve to slow down more gradually
    return startRate + (endRate - startRate) * Math.pow(progress, 0.7);
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
    const gain = this.audioContext.createGain();

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    osc.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    gain.gain.setValueAtTime(0.2, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
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
      const gain = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(
        freq * 1.5,
        this.audioContext.currentTime
      );

      osc.type = "square";
      osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioContext.destination);

      gain.gain.setValueAtTime(0.15, this.audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(
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
      const gain = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();

      noise.buffer = buffer;
      filter.type = "bandpass";
      filter.frequency.value = 2000 - progress * 1000;
      filter.Q.value = 5;

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioContext.destination);

      gain.gain.setValueAtTime(
        0.15 * (1 - progress * 0.5),
        this.audioContext.currentTime
      );
      gain.gain.exponentialRampToValueAtTime(
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
    const notes = [1320, 1188, 990, 880, 660, 440];
    let noteIndex = 0;

    const playNote = () => {
      const currentTime = Date.now() - this.startTime;
      if (currentTime >= this.duration) {
        return;
      }

      const progress = this.calculateProgress(currentTime);
      const interval = this.getTickRate(progress);

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(
        notes[noteIndex],
        this.audioContext.currentTime
      );

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      gain.gain.setValueAtTime(
        0.2 * (1 - progress * 0.5),
        this.audioContext.currentTime
      );
      gain.gain.exponentialRampToValueAtTime(
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

export default SpinningAudio;
