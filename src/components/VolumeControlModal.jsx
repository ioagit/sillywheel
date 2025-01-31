import React from 'react';
import { winSoundPlayer } from "../utils/winSounds";
import { spinningAudio } from '../utils/audio'; // Import the shared instance

export default function VolumeControlModal({ onClose }) {
  const [wheelVolume, setWheelVolume] = React.useState(0.5);
  const [victoryVolume, setVictoryVolume] = React.useState(0.5);

  const handleWheelVolumeChange = (value) => {
    setWheelVolume(value);
    spinningAudio.setVolume(value); // Use the instance method
  };

  const handleVictoryVolumeChange = (value) => {
    setVictoryVolume(value);
    // Update victory sound volume
    winSoundPlayer.setVolume(value);
  };

  const playTestSound = (type) => {
    if (type === 'wheel') {
      // Play a short click sound
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.value = wheelVolume;
      osc.frequency.value = 1000;
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else {
      // Play current victory sound
      winSoundPlayer.playTestSound();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white mb-2">Volume Control</h2>
        <p className="text-white/80 mb-6">Adjust the sound levels for wheel spinning and victory sounds</p>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-white font-medium">Wheel Sound</label>
              <button
                onClick={() => playTestSound('wheel')}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                🔊 Test
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={wheelVolume}
              onChange={(e) => handleWheelVolumeChange(parseFloat(e.target.value))}
              className="w-full accent-purple-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-white font-medium">Victory Sound</label>
              <button
                onClick={() => playTestSound('victory')}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                🔊 Test
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={victoryVolume}
              onChange={(e) => handleVictoryVolumeChange(parseFloat(e.target.value))}
              className="w-full accent-purple-500"
            />
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 
            text-white transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
} 