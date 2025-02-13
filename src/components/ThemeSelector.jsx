import React from "react";
import { themes } from "../config/themes";

export default function ThemeSelector({ onSelect, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div
        className="bg-slate-900/90 rounded-2xl p-8 max-w-7xl w-full mx-auto 
        border border-white/10 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">🎨 Theme Gallery</h2>
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

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto 
          scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-2"
        >
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                onSelect(theme);
                onClose();
              }}
              className={`group relative overflow-hidden rounded-xl border border-white/10 
                transition-all duration-300 hover:scale-[1.02] hover:border-white/20`}
            >
              <div
                className={`h-24 w-full bg-gradient-to-br ${theme.background}`}
              >
                <div
                  className={`w-12 h-12 rounded-full mx-auto mt-6 bg-white/20 ${theme.wheelShadow}`}
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${theme.background} opacity-0 
                group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3
                  className={`text-lg font-semibold ${
                    theme.isDark === false ? "text-gray-800" : "text-white"
                  }`}
                >
                  {theme.name}
                </h3>
                <div className="flex gap-2 mt-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs 
                    ${
                      theme.isDark === false
                        ? "bg-black/10 text-gray-600"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    {theme.isDark === false ? "Light" : "Dark"}
                  </span>
                  {theme.customStyles && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs 
                      ${
                        theme.isDark === false
                          ? "bg-black/10 text-gray-600"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      Custom
                    </span>
                  )}
                </div>
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
