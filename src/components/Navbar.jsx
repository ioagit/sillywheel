import React from 'react';
import siteConfig from "../config/siteConfig";
import ShareModal from './ShareModal';

export default function Navbar({ onThemeClick }) {
  const [showShare, setShowShare] = React.useState(false);
  const translations = siteConfig.translations[siteConfig.language];

  return (
    <>
      <nav className="bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-3 hover:scale-105 transition-transform">
                <span className="text-3xl animate-spin-slow">🎡</span>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                    bg-clip-text text-transparent animate-gradient">
                    {siteConfig.siteName.split(' ')[0]}
                  </span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                    bg-clip-text text-transparent animate-gradient ml-2">
                    {siteConfig.siteName.split(' ')[1]}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowShare(true)}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg 
                  transition-colors flex items-center gap-2"
              >
                <span>🔗</span>
                {translations.shareButton}
              </button>
              <button
                onClick={onThemeClick}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg 
                  transition-colors flex items-center gap-2"
              >
                <span>🎨</span>
                {translations.themeButton}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showShare && (
        <ShareModal onClose={() => setShowShare(false)} />
      )}
    </>
  );
} 