class WinSoundPlayer {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.sounds = {
      farts: [
        {
          name: "Short Squeaker",
          emoji: "💨",
          frequency: 400,
          duration: 0.2,
          type: "sine",
          modulation: true,
          modulationSpeed: 20,
          modulationDepth: 50
        },
        {
          name: "Long Rumbler",
          emoji: "🌪️",
          frequency: 150,
          duration: 0.8,
          type: "triangle",
          modulation: true,
          modulationSpeed: 8,
          modulationDepth: 30
        },
        {
          name: "Wet Splutter",
          emoji: "💦",
          frequency: 200,
          duration: 0.4,
          type: "sawtooth",
          noise: true,
          noiseGain: 0.3
        },
        {
          name: "High Squealer",
          emoji: "🎵",
          frequency: 600,
          duration: 0.3,
          type: "sine",
          modulation: true,
          modulationSpeed: 30,
          modulationDepth: 100
        },
        {
          name: "Bass Bomber",
          emoji: "💣",
          frequency: 80,
          duration: 0.6,
          type: "square",
          noise: true,
          noiseGain: 0.4
        },
        {
          name: "Trumpet Toot",
          emoji: "🎺",
          frequency: 300,
          duration: 0.25,
          type: "square",
          modulation: true,
          modulationSpeed: 15,
          modulationDepth: 40
        },
        {
          name: "Bubble Popper",
          emoji: "🫧",
          frequency: 500,
          duration: 0.15,
          type: "sine",
          modulation: true,
          modulationSpeed: 40,
          modulationDepth: 200
        },
        {
          name: "Thunder Clap",
          emoji: "⚡",
          frequency: 100,
          duration: 0.7,
          type: "sawtooth",
          noise: true,
          noiseGain: 0.5
        },
        {
          name: "Quick Puff",
          emoji: "🌬️",
          frequency: 350,
          duration: 0.1,
          type: "sine",
          modulation: true,
          modulationSpeed: 25,
          modulationDepth: 60
        },
        {
          name: "Grand Finale",
          emoji: "🎆",
          frequency: 200,
          duration: 1.0,
          type: "square",
          modulation: true,
          modulationSpeed: 10,
          modulationDepth: 50,
          noise: true,
          noiseGain: 0.3
        }
      ]
    };
  }

  playWinSound(soundId) {
    const sound = this.sounds.farts[soundId];
    if (!sound) return;

    // Main oscillator
    const osc = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    osc.type = sound.type;
    osc.frequency.setValueAtTime(sound.frequency, this.audioContext.currentTime);

    // Add modulation if specified
    if (sound.modulation) {
      const modulator = this.audioContext.createOscillator();
      const modulatorGain = this.audioContext.createGain();
      modulator.frequency.value = sound.modulationSpeed;
      modulatorGain.gain.value = sound.modulationDepth;
      modulator.connect(modulatorGain);
      modulatorGain.connect(osc.frequency);
      modulator.start();
      modulator.stop(this.audioContext.currentTime + sound.duration);
    }

    // Add noise if specified
    if (sound.noise) {
      const bufferSize = this.audioContext.sampleRate * sound.duration;
      const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      
      const noiseNode = this.audioContext.createBufferSource();
      const noiseGain = this.audioContext.createGain();
      noiseNode.buffer = noiseBuffer;
      noiseGain.gain.value = sound.noiseGain;
      
      noiseNode.connect(noiseGain);
      noiseGain.connect(gainNode);
      noiseNode.start();
    }

    // Connect and play
    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    gainNode.gain.setValueAtTime(0.5, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + sound.duration);

    osc.start();
    osc.stop(this.audioContext.currentTime + sound.duration);
  }

  getSoundsList() {
    return this.sounds.farts.map((sound, index) => ({
      id: index,
      name: sound.name,
      emoji: sound.emoji
    }));
  }
}

export const winSoundPlayer = new WinSoundPlayer(); 