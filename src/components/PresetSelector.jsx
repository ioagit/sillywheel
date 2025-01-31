import React from "react";
import wheelPresets from "../config/wheelPresets";

export default function PresetSelector({ onSelect, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-purple-600">
            Choose a Wheel Preset
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(wheelPresets).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => {
                onSelect(preset.items);
                onClose();
              }}
              className="p-4 rounded-xl border-2 border-purple-200 hover:border-purple-500 transition-colors flex flex-col items-center gap-2 group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">
                {preset.emoji}
              </span>
              <span className="font-medium text-gray-700">
                {preset.name}
              </span>
              <span className="text-sm text-gray-500">
                {preset.items.length} items
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
} 