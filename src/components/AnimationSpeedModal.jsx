import React from 'react';

export default function AnimationSpeedModal({ onClose, currentSpeed, onSpeedChange }) {
  const speeds = [
    {
      id: 'fast',
      name: 'Fast',
      value: 3000,
      icon: '⚡',
      description: 'Quick 3 second spin',
      curve: 'cubic-bezier(0.15, 0, 0.05, 1)'
    },
    {
      id: 'normal',
      name: 'Normal',
      value: 5000,
      icon: '⚖️',
      description: 'Standard 5 second spin',
      curve: 'cubic-bezier(0.2, 0, 0.1, 1)'
    },
    {
      id: 'slow',
      name: 'Slow',
      value: 7000,
      icon: '🐢',
      description: 'Longer 7 second spin',
      curve: 'cubic-bezier(0.25, 0, 0.15, 1)'
    },
    {
      id: 'dramatic',
      name: 'Dramatic',
      value: 10000,
      icon: '🎭',
      description: 'Extended 10 second spin',
      curve: 'cubic-bezier(0.3, 0, 0.2, 1)'
    }
  ];

  const previewAnimation = (speed) => {
    const preview = document.getElementById(`preview-${speed.id}`);
    preview.style.transform = 'rotate(0deg)';
    preview.style.transition = 'none';
    
    requestAnimationFrame(() => {
      preview.style.transform = 'rotate(360deg)';
      preview.style.transition = `transform ${speed.value/1000}s ${speed.curve}`;
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white mb-2">Animation Speed</h2>
        <p className="text-white/80 mb-6">Choose how long the wheel spins before stopping</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {speeds.map((speed) => (
            <button
              key={speed.id}
              onClick={() => {
                onSpeedChange({ duration: speed.value, curve: speed.curve });
                previewAnimation(speed);
              }}
              className={`p-4 rounded-xl ${
                currentSpeed === speed.value
                  ? 'bg-white/20 border-2 border-white/40 shadow-lg shadow-white/10'
                  : 'bg-white/10 border-2 border-transparent'
              } hover:bg-white/30 transition-all duration-200 group relative`}
            >
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <div 
                    id={`preview-${speed.id}`}
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      previewAnimation(speed);
                    }}
                  >
                    {speed.icon}
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-white font-medium block">
                    {speed.name}
                  </span>
                  <span className="text-white/60 text-sm block">
                    {speed.description}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    previewAnimation(speed);
                  }}
                  className="ml-auto p-2 rounded-lg bg-white/10 hover:bg-white/20 
                    text-white transition-colors"
                >
                  ▶️
                </button>
              </div>
              {currentSpeed === speed.value && (
                <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1 
                  shadow-lg shadow-green-500/30 animate-bounce-subtle">
                  ✓
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 
              text-white transition-colors duration-200"
          >
            Close
          </button>
          <p className="text-white/60 text-sm">
            Current duration: {currentSpeed/1000}s
          </p>
        </div>
      </div>
    </div>
  );
} 