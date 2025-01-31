import React from 'react';
import { themes } from '../config/themes';

export default function ThemeSelector({ onSelect, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-4">Select Theme</h2>
        <div className="grid grid-cols-2 gap-4">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                onSelect(theme);
                onClose();
              }}
              className={`p-4 rounded-xl bg-gradient-to-br ${theme.background} 
                hover:scale-105 transform transition-all duration-200
                flex flex-col items-center justify-center gap-2
                text-white font-medium shadow-lg hover:shadow-xl`}
            >
              <div className="w-full h-20 rounded-lg bg-white/10 backdrop-blur-md"></div>
              {theme.name}
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