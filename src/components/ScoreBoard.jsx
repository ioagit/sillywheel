import React from "react";

export default function ScoreBoard({ scores, onClose, onClearScores }) {
  const hasScores = Object.keys(scores).length > 0;

  return (
    <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl w-64 animate-float">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-white">🏆 Score Board</h3>
        <button onClick={onClose} className="text-white/70 hover:text-white">
          ×
        </button>
      </div>
      {hasScores ? (
        <>
          <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
            {Object.entries(scores)
              .sort(([, a], [, b]) => b - a)
              .map(([name, score]) => (
                <div
                  key={name}
                  className="flex justify-between items-center bg-white/10 rounded-lg p-2"
                >
                  <span className="text-white truncate">{name}</span>
                  <span className="text-yellow-300 font-bold">★ {score}</span>
                </div>
              ))}
          </div>
          <button
            onClick={onClearScores}
            className="mt-4 w-full bg-red-500/20 hover:bg-red-500/30 text-white py-2 px-4 rounded-lg 
              transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>🗑️</span>
            Clear Scores
          </button>
        </>
      ) : (
        <div className="text-white/70 text-center py-4">
          No scores yet! Keep playing to see them here.
        </div>
      )}
    </div>
  );
}
