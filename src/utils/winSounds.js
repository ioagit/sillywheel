class WinSoundPlayer {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.volume = 0.5; // Add volume control
    this.gainNode = this.audioContext.createGain(); // Create main gain node
    this.gainNode.connect(this.audioContext.destination);
    this.gainNode.gain.value = this.volume;
    
    this.sounds = [
      {
        id: 0,
        name: "Trumpet Fanfare",
        emoji: "🎺",
        play: (ctx, gainNode) => this.playFanfare(ctx, gainNode)
      },
      {
        id: 1,
        name: "Arcade Win",
        emoji: "🕹️",
        play: (ctx, gainNode) => this.playArcadeWin(ctx, gainNode)
      },
      {
        id: 2,
        name: "Magic Chimes",
        emoji: "✨",
        play: (ctx, gainNode) => this.playMagicChimes(ctx, gainNode)
      },
      {
        id: 3,
        name: "Power Up",
        emoji: "⚡",
        play: (ctx, gainNode) => this.playPowerUp(ctx, gainNode)
      },
      {
        id: 4,
        name: "Drum Roll",
        emoji: "🥁",
        play: (ctx, gainNode) => this.playDrumRoll(ctx, gainNode)
      },
      {
        id: 5,
        name: "Celebration",
        emoji: "🎉",
        play: (ctx, gainNode) => this.playCelebration(ctx, gainNode)
      }
    ];
  }

  setVolume(value) {
    this.volume = value;
    this.gainNode.gain.value = value;
  }

  // Add method to play test sound
  playTestSound() {
    // Use current selected sound if available, otherwise use first sound
    const currentSound = this.sounds.find(s => s.id === window.currentWinSound) || this.sounds[0];
    if (currentSound) {
      currentSound.play(this.audioContext, this.gainNode);
    }
  }

  // Triumphant trumpet fanfare
  playFanfare(ctx, gainNode) {
    const duration = 1;
    const osc = ctx.createOscillator();
    
    osc.type = "square";
    osc.frequency.setValueAtTime(392, ctx.currentTime); // G4
    osc.frequency.setValueAtTime(523.25, ctx.currentTime + 0.2); // C5
    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.4); // E5
    
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    
    osc.connect(gainNode);
    
    osc.start();
    osc.stop(ctx.currentTime + duration);
  }

  // Classic arcade victory sound
  playArcadeWin(ctx, gainNode) {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const duration = 0.1;
    
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      
      osc.type = "square";
      osc.frequency.value = freq;
      
      gainNode.gain.setValueAtTime(0.2, ctx.currentTime + i * duration);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + (i + 1) * duration);
      
      osc.connect(gainNode);
      
      osc.start(ctx.currentTime + i * duration);
      osc.stop(ctx.currentTime + (i + 1) * duration);
    });
  }

  // Magical chimes sound
  playMagicChimes(ctx, gainNode) {
    const freqs = [1318.51, 1567.98, 2093.00]; // E6, G6, C7
    
    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      
      osc.type = "sine";
      osc.frequency.value = freq;
      
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.3);
      
      osc.connect(gainNode);
      
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.3);
    });
  }

  // Rising power-up sound
  playPowerUp(ctx, gainNode) {
    const osc = ctx.createOscillator();
    
    osc.type = "sine";
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.4);
    osc.frequency.setValueAtTime(220, ctx.currentTime);
    
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    
    osc.connect(gainNode);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  }

  // Drum roll finish
  playDrumRoll(ctx, gainNode) {
    const bufferSize = ctx.sampleRate * 0.5;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
      // Increase volume towards the end
      data[i] *= Math.min(1, i / (bufferSize * 0.8));
    }
    
    const noise = ctx.createBufferSource();
    
    noise.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1000;
    filter.Q.value = 1;
    
    noise.connect(filter);
    filter.connect(gainNode);
    
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    
    noise.start();
  }

  // Multi-sound celebration
  playCelebration(ctx, gainNode) {
    // High-pitched chimes
    this.playMagicChimes(ctx, gainNode);
    
    // Delayed fanfare
    setTimeout(() => {
      this.playFanfare(ctx, gainNode);
    }, 200);
  }

  playWinSound(soundId) {
    window.currentWinSound = soundId; // Store current sound ID
    const sound = this.sounds.find(s => s.id === soundId);
    if (!sound) return;
    
    // Connect through gain node for volume control
    const osc = this.audioContext.createOscillator();
    const soundGain = this.audioContext.createGain();
    
    osc.connect(soundGain);
    soundGain.connect(this.gainNode);
    
    sound.play(this.audioContext, soundGain);
  }

  getSoundsList() {
    return this.sounds.map(({ id, name, emoji }) => ({
      id,
      name,
      emoji
    }));
  }
}

export const winSoundPlayer = new WinSoundPlayer();

const winSounds = [
  {
    id: 0,
    name: "Fanfare",
    emoji: "🎺",
    description: "Traditional victory fanfare",
    file: "fanfare.mp3"
  },
  {
    id: 1,
    name: "Applause",
    emoji: "👏",
    description: "Crowd cheering and clapping",
    file: "applause.mp3"
  },
  {
    id: 2,
    name: "Celebration",
    emoji: "🎉",
    description: "Party poppers and celebration",
    file: "celebration.mp3"
  },
  {
    id: 3,
    name: "Drumroll",
    emoji: "🥁",
    description: "Classic drumroll finish",
    file: "drumroll.mp3"
  }
]; 