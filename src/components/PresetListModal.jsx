import React from 'react';
import wheelPresets from '../config/wheelPresets';

export default function PresetListModal({ onSelect, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900/90 rounded-2xl p-8 max-w-6xl w-full mx-auto 
        border border-white/10 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            ✨ Magic Presets
          </h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto 
          scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-2">
          {Object.entries(wheelPresets).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => {
                onSelect(preset.items, key)
                onClose()
              }}
              className="bg-white/10 rounded-xl p-6 text-left hover:bg-white/20 
                transition-all duration-300 group border border-white/10 hover:border-white/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{preset.emoji}</span>
                <h3 className="text-lg font-semibold text-white">
                  {preset.name}
                </h3>
              </div>
              <p className="text-sm text-white/70 line-clamp-2">
                {preset.content}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {preset.items.slice(0, 3).map((item, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60"
                  >
                    {item}
                  </span>
                ))}
                {preset.items.length > 3 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                    +{preset.items.length - 3} more
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-white/10 px-6 py-2 rounded-lg text-white hover:bg-white/20 
              transition-all duration-300 border border-white/10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}