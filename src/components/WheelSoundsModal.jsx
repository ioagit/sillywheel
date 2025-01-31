import React from 'react';
import siteConfig from '../config/siteConfig';

export default function WheelSoundsModal({ onClose, currentType, onTypeChange }) {
  const audioTypes = [
    { 
      id: "mechanical", 
      label: "⚙️ Mechanical",
      description: "Classic clicking sound like a traditional wheel"
    },
    { 
      id: "electronic", 
      label: "🤖 Electronic",
      description: "Modern digital beeps and boops"
    },
    { 
      id: "casino", 
      label: "🎰 Casino",
      description: "Authentic casino ratchet sounds"
    },
    { 
      id: "toy", 
      label: "🎪 Toy",
      description: "Playful musical tones"
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">Wheel Sounds</h2>
        <p className="text-white/80 mb-6">Choose how your wheel sounds while spinning</p>
        
        <div className="space-y-3">
          {audioTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                onTypeChange(type.id);
                onClose();
              }}
              className={`w-full p-4 rounded-xl ${
                currentType === type.id
                  ? 'bg-white/20 border-2 border-white/40'
                  : 'bg-white/10 border-2 border-transparent'
              } hover:bg-white/30 transition-all duration-200 text-left group`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {type.label.split(' ')[0]}
                </span>
                <div>
                  <div className="font-semibold text-white">
                    {type.label.split(' ')[1]}
                  </div>
                  <div className="text-sm text-white/70">
                    {type.description}
                  </div>
                </div>
              </div>
            </button>
          ))}
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