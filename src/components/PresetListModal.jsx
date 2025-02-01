import React from 'react';
import { Link } from 'react-router-dom';
import wheelPresets from '../config/wheelPresets';

export default function PresetListModal({ onClose, onSelect, currentPreset }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl max-w-xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Select a Magic List</h3>
          <button onClick={onClose} className="text-gray-300 hover:text-gray-100 text-2xl">&times;</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(wheelPresets).map(([slug, preset]) => (
            <Link
              key={slug}
              to={`/${slug}`}
              onClick={() => {
                onSelect && onSelect(preset.items, slug);
                onClose();
              }}
              className={`block bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500
                text-center px-4 py-3 rounded-full transition-transform transform hover:scale-110 shadow-md
                ${currentPreset === slug ? "border-4 border-pink-500" : ""}`}
            >
              <span className="text-white font-extrabold animate-bounce">{preset.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}