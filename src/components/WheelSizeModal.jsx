import React from 'react';

export default function WheelSizeModal({ onClose, currentSize, onSizeChange }) {
  const sizes = [
    { 
      id: 'xs', 
      name: 'Compact', 
      value: 280, 
      icon: '🔍',
      description: 'Perfect for small screens'
    },
    { 
      id: 'sm', 
      name: 'Small', 
      value: 340, 
      icon: '📱',
      description: 'Good for tablets'
    },
    { 
      id: 'md', 
      name: 'Medium', 
      value: 400, 
      icon: '💻',
      description: 'Standard desktop size'
    },
    { 
      id: 'lg', 
      name: 'Large', 
      value: 480, 
      icon: '🖥️',
      description: 'For large displays'
    },
    { 
      id: 'xl', 
      name: 'Extra Large', 
      value: 560, 
      icon: '📺',
      description: 'Maximum visibility'
    },
    { 
      id: 'auto', 
      name: 'Responsive', 
      value: 'auto', 
      icon: '📐',
      description: 'Adapts to screen size'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white mb-2">Wheel Size</h2>
        <p className="text-white/80 mb-6">Choose the size that best fits your screen</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => {
                onSizeChange(size.value);
                onClose();
              }}
              className={`p-4 rounded-xl ${
                currentSize === size.value
                  ? 'bg-white/20 border-2 border-white/40 shadow-lg shadow-white/10'
                  : 'bg-white/10 border-2 border-transparent'
              } hover:bg-white/30 transition-all duration-200 group relative`}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">
                  {size.icon}
                </span>
                <span className="text-white font-medium block mb-1">
                  {size.name}
                </span>
                <span className="text-white/60 text-sm">
                  {size.description}
                </span>
                {size.value !== 'auto' && (
                  <span className="text-white/40 text-xs mt-1">
                    {size.value}px
                  </span>
                )}
              </div>
              {currentSize === size.value && (
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
            Cancel
          </button>
          <p className="text-white/60 text-sm">
            Current size: {currentSize === 'auto' ? 'Responsive' : `${currentSize}px`}
          </p>
        </div>
      </div>
    </div>
  );
} 