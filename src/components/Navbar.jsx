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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-1 flex items-center justify-between">
              <a href="/" className="flex items-center group">
                <div className="relative">
                  <span
                    className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                    text-transparent bg-clip-text animate-gradient-x relative z-10 group-hover:opacity-0 transition-opacity duration-300"
                  >
                    SillyWheel.com
                  </span>
                  <span
                    className="absolute inset-0 text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 animate-gradient-x opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"
                  >
                    SillyWheel.com
                  </span>
                  <span
                    className="absolute -inset-x-2 -inset-y-1 bg-white/10 rounded-lg blur-lg group-hover:bg-white/20 
                    transition-all duration-300 group-hover:scale-110"
                  ></span>
                </div>
                <div className="ml-2 text-lg text-white/60">✨</div>
              </a>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowShare(true)}
                  className="hidden md:flex items-center gap-2 px-4 py-2 
                    bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                    hover:from-purple-500/30 hover:to-pink-500/30
                    text-white rounded-lg transition-all duration-300
                    border border-white/10 hover:border-white/20
                    transform hover:scale-105 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    ✨
                  </span>
                  <span className="text-sm font-medium">Share the Magic</span>
                </button>
                <button
                  onClick={onThemeClick}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 
                    transition-colors relative group overflow-hidden"
                >
                  <span className="relative z-10 text-white">🎨</span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </button>
              </div>
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
            className={`${
              currentTheme.customStyles?.modal || "bg-slate-900/90"
            } 
              rounded-2xl p-8 max-w-2xl w-full mx-4 
              ${currentTheme.customStyles?.border || "border border-white/10"} 
              shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className={`text-2xl font-bold mb-4 
              ${currentTheme.customStyles?.text || "text-white"}
              ${currentTheme.id === "hacker" ? "font-mono" : ""}`}
            >
              How to Use SillyWheel
            </h2>
            <div
              className={`space-y-4 ${
                currentTheme.customStyles?.muted || "text-white/70"
              }`}
            >
              <p>
                1. Add names to the wheel by typing them in the input field and
                pressing Enter or clicking Add.
              </p>
              <p>
                2. Click the "Spin the Silly Wheel!" button to start the spin
                animation.
              </p>
              <p>
                3. Wait for the wheel to stop to see who's the lucky winner!
              </p>
              <p>Additional Features:</p>
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
                ${
                  currentTheme.customStyles?.button ||
                  "bg-white/10 hover:bg-white/20"
                } 
                ${currentTheme.customStyles?.text || "text-white"} 
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
