import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/20 backdrop-blur-md mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors">
            <h3 className="footer-heading">
              <span className="text-xl mr-2">🎵</span>Sound Effects
            </h3>
            <div className="space-y-2">
              <button className="footer-button">
                <span className="text-lg mr-2">🔊</span>Wheel Sounds
              </button>
              <button className="footer-button">
                <span className="text-lg mr-2">🏆</span>Victory Sounds
              </button>
              <button className="footer-button">
                <span className="text-lg mr-2">🎚️</span>Volume Control
              </button>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors">
            <h3 className="footer-heading">
              <span className="text-xl mr-2">🎨</span>Customization
            </h3>
            <div className="space-y-2">
              <button className="footer-button">
                <span className="text-lg mr-2">🎯</span>Color Themes
              </button>
              <button className="footer-button">
                <span className="text-lg mr-2">📏</span>Wheel Size
              </button>
              <button className="footer-button">
                <span className="text-lg mr-2">⚡</span>Animation Speed
              </button>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors">
            <h3 className="footer-heading">
              <span className="text-xl mr-2">📋</span>Presets
            </h3>
            <div className="space-y-2">
              <button className="footer-button">
                <span className="text-lg mr-2">📥</span>Load Preset
              </button>
              <button className="footer-button">
                <span className="text-lg mr-2">💾</span>Save Current
              </button>
              <button className="footer-button">
                <span className="text-lg mr-2">📤</span>Export List
              </button>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors">
            <h3 className="footer-heading">
              <span className="text-xl mr-2">ℹ️</span>About
            </h3>
            <div className="space-y-2">
              <button className="footer-button">
                <span className="text-lg mr-2">📖</span>How to Use
              </button>
              <button className="footer-button">
                <span className="text-lg mr-2">🔄</span>Updates
              </button>
              <button className="footer-button">
                <span className="text-lg mr-2">📧</span>Contact
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 hover:text-white/80 transition-colors">
            © {currentYear} Wheel of Names. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 