import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/90 backdrop-blur-sm mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="footer-heading">Sound Effects</h3>
            <div className="space-y-2">
              <button className="footer-button">🎵 Wheel Sounds</button>
              <button className="footer-button">🏆 Victory Sounds</button>
              <button className="footer-button">🔊 Volume Control</button>
            </div>
          </div>
          
          <div>
            <h3 className="footer-heading">Customization</h3>
            <div className="space-y-2">
              <button className="footer-button">🎨 Color Themes</button>
              <button className="footer-button">📏 Wheel Size</button>
              <button className="footer-button">⚡ Animation Speed</button>
            </div>
          </div>
          
          <div>
            <h3 className="footer-heading">Presets</h3>
            <div className="space-y-2">
              <button className="footer-button">📋 Load Preset</button>
              <button className="footer-button">💾 Save Current</button>
              <button className="footer-button">📤 Export List</button>
            </div>
          </div>
          
          <div>
            <h3 className="footer-heading">About</h3>
            <div className="space-y-2">
              <button className="footer-button">ℹ️ How to Use</button>
              <button className="footer-button">🔄 Updates</button>
              <button className="footer-button">📧 Contact</button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© {currentYear} Wheel of Names. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 