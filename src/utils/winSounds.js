class WinSoundPlayer {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.sounds = {
      farts: [
        {
          name: "Squeaky Surprise",
          emoji: "💨",
          frequency: 400,
          duration: 0.2,
          type: "sine",
          modulation: true,
          modulationSpeed: 30,
          modulationDepth: 100,
          play: (ctx) => this.playSqueak(ctx)
        },
        {
          name: "Thunderous Blast",
          emoji: "🌪️",
          frequency: 100,
          duration: 0.8,
          type: "triangle",
          noise: true,
          noiseGain: 0.5
        },
        {
          name: "Wet Willie",
          emoji: "💦",
          frequency: 200,
          duration: 0.4,
          type: "sawtooth",
          noise: true,
          noiseGain: 0.4,
          modulation: true,
          modulationSpeed: 15
        },
        {
          name: "Musical Toot",
          emoji: "🎵",
          frequency: 600,
          duration: 0.3,
          type: "sine",
          modulation: true,
          modulationSpeed: 20,
          modulationDepth: 150
        },
        {
          name: "Bass Bomber",
          emoji: "💣",
          frequency: 80,
          duration: 0.6,
          type: "square",
          noise: true,
          noiseGain: 0.6
        },
        {
          name: "Trumpet Blast",
          emoji: "🎺",
          frequency: 300,
          duration: 0.25,
          type: "square",
          modulation: true,
          modulationSpeed: 25,
          modulationDepth: 80
        },
        {
          name: "Bubble Trouble",
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
          frequency: 120,
          duration: 0.7,
          type: "sawtooth",
          noise: true,
          noiseGain: 0.7
        },
        {
          name: "Silent but Deadly",
          emoji: "🌬️",
          frequency: 350,
          duration: 0.2,
          type: "sine",
          modulation: true,
          modulationSpeed: 10,
          modulationDepth: 30
        },
        {
          name: "Grand Finale",
          emoji: "🎆",
          frequency: 200,
          duration: 1.0,
          type: "square",
          modulation: true,
          modulationSpeed: 15,
          modulationDepth: 100,
          noise: true,
          noiseGain: 0.4
        }
      ]
    };
  }

  // Add specific sound generation methods
  playSqueak(ctx) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const modulator = ctx.createOscillator();
    const modulatorGain = ctx.createGain();

    // Set up modulation
    modulator.frequency.value = 30;
    modulatorGain.gain.value = 100;
    modulator.connect(modulatorGain);
    modulatorGain.connect(osc.frequency);

    // Set up main oscillator
    osc.type = "sine";
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);

    // Set volume envelope
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

    // Start and stop
    modulator.start();
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
    modulator.stop(ctx.currentTime + 0.2);
  }

  playWinSound(soundId) {
    const sound = this.sounds.farts[soundId];
    if (!sound) return;

    // Create a new audio context for each play
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    
    if (sound.play) {
      // Use custom play method if available
      sound.play(ctx);
    } else {
      // Fall back to generic sound generation
      this.playGenericSound(ctx, sound);
    }
  }

  playGenericSound(ctx, sound) {
    // Main oscillator
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.type = sound.type;
    osc.frequency.setValueAtTime(sound.frequency, ctx.currentTime);

    // Add modulation if specified
    if (sound.modulation) {
      const modulator = ctx.createOscillator();
      const modulatorGain = ctx.createGain();
      modulator.frequency.value = sound.modulationSpeed;
      modulatorGain.gain.value = sound.modulationDepth;
      modulator.connect(modulatorGain);
      modulatorGain.connect(osc.frequency);
      modulator.start();
      modulator.stop(ctx.currentTime + sound.duration);
    }

    // Add noise if specified
    if (sound.noise) {
      const bufferSize = ctx.sampleRate * sound.duration;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      
      const noiseNode = ctx.createBufferSource();
      const noiseGain = ctx.createGain();
      noiseNode.buffer = noiseBuffer;
      noiseGain.gain.value = sound.noiseGain;
      
      noiseNode.connect(noiseGain);
      noiseGain.connect(gainNode);
      noiseNode.start();
    }

    // Connect and play
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + sound.duration);

    osc.start();
    osc.stop(ctx.currentTime + sound.duration);
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