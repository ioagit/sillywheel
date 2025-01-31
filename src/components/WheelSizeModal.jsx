import React from 'react';

export default function WheelSizeModal({ onClose, currentSize, onSizeChange }) {
  const sizes = [
    { id: 'sm', name: 'Small', value: 300, icon: '🔍' },
    { id: 'md', name: 'Medium', value: 384, icon: '📏' },
    { id: 'lg', name: 'Large', value: 480, icon: '🔎' },
    { id: 'xl', name: 'Extra Large', value: 560, icon: '📐' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white mb-2">Wheel Size</h2>
        <p className="text-white/80 mb-6">Choose the size that best fits your screen</p>

        <div className="grid grid-cols-2 gap-3">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => {
                onSizeChange(size.value);
                onClose();
              }}
              className={`p-4 rounded-xl ${
                currentSize === size.value
                  ? 'bg-white/20 border-2 border-white/40'
                  : 'bg-white/10 border-2 border-transparent'
              } hover:bg-white/30 transition-all duration-200 group`}
            >
              <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform">
                {size.icon}
              </span>
              <span className="text-white font-medium block">
                {size.name}
              </span>
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