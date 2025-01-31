import React from "react";

export default function WinnerModal({ winner, onClose, translations, show }) {
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform animate-bounce-once"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            <h2 className="text-4xl font-bold mb-2">
              {translations.winnerTitle}
            </h2>
            <p className="text-6xl font-bold">
              {winner}
            </p>
          </div>
          
          <div className="flex justify-center space-x-2">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:opacity-90 transform hover:scale-105 transition"
            >
              🎉 Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 