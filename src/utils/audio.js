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
  }

  start() {
    // Apply different sound profiles based on type
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
    let tickRate = 50; // Start with fast ticks
    let baseFreq = 2000;

    const tick = () => {
      this.createTickSound(baseFreq + Math.random() * 200);
      tickRate = Math.min(300, tickRate * 1.05); // Gradually slow down
      baseFreq = Math.max(200, baseFreq * 0.95); // Lower pitch over time

      this.tickInterval = setTimeout(tick, tickRate);
    };

    tick();
  }

  playElectronicBeeps() {
    let interval = 100; // Start with rapid beeps
    let freq = 1500;

    const beep = () => {
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

      interval = Math.min(500, interval * 1.1); // Slow down beeps
      freq = Math.max(200, freq * 0.93); // Lower pitch

      this.tickInterval = setTimeout(beep, interval);
    };

    beep();
  }

  playRatchetSound() {
    let clickRate = 40; // Start with rapid clicks

    const click = () => {
      // Create a short noise burst for clicking sound
      const bufferSize = this.audioContext.sampleRate * 0.03;
      const buffer = this.audioContext.createBuffer(
        1,
        bufferSize,
        this.audioContext.sampleRate
      );
      const data = buffer.getChannelData(0);

      // Generate noise
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.audioContext.createBufferSource();
      const gain = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();

      noise.buffer = buffer;
      filter.type = "bandpass";
      filter.frequency.value = 2000;
      filter.Q.value = 5;

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioContext.destination);

      gain.gain.setValueAtTime(0.15, this.audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.03
      );

      noise.start();
      clickRate = Math.min(400, clickRate * 1.08); // Gradually slow down

      this.tickInterval = setTimeout(click, clickRate);
    };

    click();
  }

  playMusicalTones() {
    const notes = [1320, 1188, 990, 880, 660, 440]; // Musical scale
    let noteIndex = 0;
    let interval = 200;

    const playNote = () => {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(
        notes[noteIndex],
        this.audioContext.currentTime
      );

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      gain.gain.setValueAtTime(0.2, this.audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.2
      );

      osc.start();
      osc.stop(this.audioContext.currentTime + 0.2);

      noteIndex = (noteIndex + 1) % notes.length;
      interval = Math.min(500, interval * 1.15); // Slow down the melody

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
