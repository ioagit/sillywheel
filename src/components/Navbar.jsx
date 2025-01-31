import React from 'react';
import siteConfig from "../config/siteConfig";

export default function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-white flex items-center gap-3 hover:scale-105 transition-transform">
              <span className="animate-spin-slow">🎡</span>
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                {siteConfig.siteName}
              </span>
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="nav-button-glass">
              <span className="text-xl">🎨</span>
              <span className="text-white">Themes</span>
            </button>
            <button className="nav-button-glass">
              <span className="text-xl">🌍</span>
              <span className="text-white">Language</span>
            </button>
            <a 
              href="https://github.com/yourusername/wheel-of-names" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-button-glass"
            >
              <span className="text-xl">📖</span>
              <span className="text-white">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 