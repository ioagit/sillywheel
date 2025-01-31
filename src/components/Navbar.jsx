import React from 'react';
import siteConfig from "../config/siteConfig";
import ShareModal from './ShareModal';

export default function Navbar({ onThemeClick }) {
  const [showShare, setShowShare] = React.useState(false);

  return (
    <>
      <nav className="bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl">🎡</span>
              <span className="ml-2 text-xl font-bold text-white">
                {siteConfig.siteName}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowShare(true)}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg 
                  transition-colors flex items-center gap-2"
              >
                <span>🔗</span>
                Share
              </button>
              <button
                onClick={onThemeClick}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg 
                  transition-colors flex items-center gap-2"
              >
                <span>🎨</span>
                Theme
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