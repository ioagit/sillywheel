import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import siteConfig from "../config/siteConfig";
import ShareModal from "./ShareModal";
import { Link } from "react-router-dom";

const Navbar = ({ onThemeClick, currentTheme }) => {
  const [showShare, setShowShare] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showHowTo, setShowHowTo] = React.useState(false);
  const translations = siteConfig.translations[siteConfig.language];

  const QRCodeModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Scan to Visit</h3>
          <button
            onClick={() => setShowQR(false)}
            className="text-gray-500 hover:text-gray-700"
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
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <QRCodeSVG
              value="https://sillywheel.com"
              size={200}
              level="H"
              includeMargin={true}
              imageSettings={{
                src: "/favicon.ico",
                x: undefined,
                y: undefined,
                height: 24,
                width: 24,
                excavate: true,
              }}
            />
          </div>
          <p className="text-gray-600 text-center">
            Scan this QR code to open SillyWheel.com on your phone!
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={`${
          currentTheme.customStyles?.navbar || "bg-white/10"
        } backdrop-blur-md border-b ${
          currentTheme.customStyles?.border || "border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className={`text-xl font-bold ${
                  currentTheme.customStyles?.text || "text-white"
                } ${currentTheme.customStyles?.glow || ""} ${
                  currentTheme.id === "hacker" ? "font-mono" : ""
                }`}
              >
                SillyWheel.com
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setShowQR(true)}
                className={`px-4 py-2 rounded-lg ${
                  currentTheme.customStyles?.button ||
                  "bg-white/10 hover:bg-white/20 text-white"
                }`}
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
                    d="M12 4v1m6 11h2m-6 0h-2m0 0H8m4 0h4m-4-8a3 3 0 100 6 3 3 0 000-6z"
                  />
                </svg>
                <span className="hidden sm:inline">Scan QR</span>
              </button>
              <button
                onClick={() => setShowShare(true)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 
                  ${currentTheme.id === 'hacker' 
                    ? `${currentTheme.customStyles?.button} border-2` 
                    : 'bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white'
                  }
                  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`w-5 h-5 ${
                    currentTheme.id === 'hacker' 
                      ? currentTheme.customStyles?.text 
                      : 'text-white'
                  }`}
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                <span className={`font-medium ${
                  currentTheme.id === 'hacker' 
                    ? `${currentTheme.customStyles?.text} font-mono` 
                    : 'text-white'
                }`}>
                  Share the Magic! ✨
                </span>
              </button>
              <button
                onClick={() => setShowHowTo(true)}
                className={`px-4 py-2 rounded-lg ${
                  currentTheme.customStyles?.button ||
                  "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                How to Use
              </button>
              <button
                onClick={onThemeClick}
                className={`px-4 py-2 rounded-lg ${
                  currentTheme.customStyles?.button ||
                  "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Themes
              </button>
              <a
                href="https://github.com/yourusername/sillywheel"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg ${
                  currentTheme.customStyles?.button ||
                  "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                GitHub
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => {
              setShowQR(true);
              setIsMenuOpen(false);
            }}
            className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-white/10"
          >
            📱 Scan QR
          </button>
          <button
            onClick={() => {
              onThemeClick();
              setIsMenuOpen(false);
            }}
            className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-white/10"
          >
            🎨 Themes
          </button>
          <button
            onClick={() => {
              setShowHowTo(true);
              setIsMenuOpen(false);
            }}
            className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-white/10"
          >
            How to Use
          </button>
          <a
            href="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            🏠 Home
          </a>
        </div>
      </div>

      {showHowTo && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setShowHowTo(false)}
        >
          <div
            className={`${currentTheme.customStyles?.modal || 'bg-slate-900/90'} 
              rounded-2xl p-8 max-w-2xl w-full mx-4 
              ${currentTheme.customStyles?.border || 'border border-white/10'} 
              shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={`text-2xl font-bold mb-4 
              ${currentTheme.customStyles?.text || 'text-white'}
              ${currentTheme.id === 'hacker' ? 'font-mono' : ''}`}
            >
              How to Use SillyWheel
            </h2>
            <div className={`space-y-4 ${
              currentTheme.customStyles?.muted || 'text-white/70'
            }`}>
              <p>
                1. Add names to the wheel by typing them in the input field and pressing Enter or clicking Add.
              </p>
              <p>
                2. Click the "Spin the Silly Wheel!" button to start the spin animation.
              </p>
              <p>
                3. Wait for the wheel to stop to see who's the lucky winner!
              </p>
              <p>
                Additional Features:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use "Winner Out" to automatically remove winners</li>
                <li>Enable "Keep Score" to track multiple spins</li>
                <li>Choose different sound effects for spinning</li>
                <li>Select victory sounds for winners</li>
                <li>Adjust wheel size and spin speed</li>
              </ul>
            </div>
            <button
              onClick={() => setShowHowTo(false)}
              className={`mt-6 w-full py-2 px-4 rounded-lg 
                ${currentTheme.customStyles?.button || 'bg-white/10 hover:bg-white/20'} 
                ${currentTheme.customStyles?.text || 'text-white'} 
                transition-colors duration-200`}
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {showShare && <ShareModal onClose={() => setShowShare(false)} />}

      {showQR && <QRCodeModal />}
    </>
  );
};

export default Navbar;