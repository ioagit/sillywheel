import React from 'react';
import wheelPresets from '../config/wheelPresets';

export default function PresetListModal({ onClose, onSelect, currentPreset }) {
  const presetCategories = [
    {
      id: 'popular',
      name: 'Popular',
      icon: '⭐',
      presets: ['teams', 'classroom', 'family']
    },
    {
      id: 'fun',
      name: 'Fun & Games',
      icon: '🎮',
      presets: ['games', 'sports', 'movies']
    },
    {
      id: 'work',
      name: 'Work',
      icon: '💼',
      presets: ['office', 'meetings', 'tasks']
    },
    {
      id: 'special',
      name: 'Special',
      icon: '✨',
      presets: ['holidays', 'birthdays', 'rewards']
    }
  ];

  const getPresetInfo = (presetKey) => {
    const preset = wheelPresets[presetKey];
    return {
      key: presetKey,
      name: preset.name,
      icon: preset.icon,
      count: preset.items.length,
      description: preset.description || `${preset.items.length} items`
    };
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl w-full mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white mb-2">Preset Lists</h2>
        <p className="text-white/80 mb-6">Choose from our collection of ready-to-use lists</p>

        <div className="space-y-6">
          {presetCategories.map((category) => (
            <div key={category.id} className="space-y-3">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span>{category.icon}</span>
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.presets.map((presetKey) => {
                  const preset = getPresetInfo(presetKey);
                  return (
                    <button
                      key={presetKey}
                      onClick={() => {
                        onSelect(wheelPresets[presetKey].items, presetKey);
                        onClose();
                      }}
                      className={`p-4 rounded-xl ${
                        currentPreset === presetKey
                          ? 'bg-white/20 border-2 border-white/40 shadow-lg shadow-white/10'
                          : 'bg-white/10 border-2 border-transparent'
                      } hover:bg-white/30 transition-all duration-200 group relative text-left`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {preset.icon}
                        </span>
                        <div>
                          <div className="font-semibold text-white">
                            {preset.name}
                          </div>
                          <div className="text-white/60 text-sm">
                            {preset.description}
                          </div>
                          <div className="text-white/40 text-xs mt-1">
                            {preset.count} items
                          </div>
                        </div>
                      </div>
                      {currentPreset === presetKey && (
                        <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1 
                          shadow-lg shadow-green-500/30 animate-bounce-subtle">
                          ✓
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
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