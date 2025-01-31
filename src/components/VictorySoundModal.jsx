import React from 'react';
import { winSoundPlayer } from "../utils/winSounds";

export default function VictorySoundModal({ onClose, currentSound, onSoundChange }) {
  const winSounds = winSoundPlayer.getSoundsList();

  const playSound = (soundId) => {
    winSoundPlayer.playWinSound(soundId);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white mb-2">Victory Sounds</h2>
        <p className="text-white/80 mb-4">Choose the sound that plays when the wheel stops</p>
        
        <div className="grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
          {winSounds.map((sound) => (
            <button
              key={sound.id}
              onClick={() => {
                onSoundChange(sound.id);
                playSound(sound.id);
              }}
              className={`p-3 rounded-xl ${
                currentSound === sound.id
                  ? 'bg-white/20 border-2 border-white/40'
                  : 'bg-white/10 border-2 border-transparent'
              } hover:bg-white/30 transition-all duration-200 text-left group`}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {sound.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white truncate">
                    {sound.name}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playSound(sound.id);
                  }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                    transition-colors group-hover:scale-105"
                >
                  🔊
                </button>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 
              text-white transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 