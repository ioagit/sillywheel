import React from 'react';
import siteConfig from "../config/siteConfig";

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              🎡 {siteConfig.siteName}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="nav-button">
              🎨 Themes
            </button>
            <button className="nav-button">
              🌍 Language
            </button>
            <a 
              href="https://github.com/yourusername/wheel-of-names" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-button"
            >
              <span>📖 GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 