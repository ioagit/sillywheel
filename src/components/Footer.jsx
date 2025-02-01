import React from 'react';
import { Helmet } from 'react-helmet';
import siteConfig from '../config/siteConfig';
import WheelSoundsModal from './WheelSoundsModal';
import VictorySoundModal from './VictorySoundModal';
import VolumeControlModal from './VolumeControlModal';
import WheelSizeModal from './WheelSizeModal';
import AnimationSpeedModal from './AnimationSpeedModal';
import PresetListModal from './PresetListModal';
import HowToUseModal from './HowToUseModal';
import UpdatesModal from './UpdatesModal';
import ComingSoonModal from './ComingSoonModal';

export default function Footer({ 
  audioType, 
  onAudioTypeChange,
  selectedWinSound,
  onWinSoundChange,
  wheelSize,
  onWheelSizeChange,
  currentSpeed,
  onSpeedChange,
  currentPreset,
  onPresetSelect
}) {
  const currentYear = new Date().getFullYear();
  const [showWheelSoundsModal, setShowWheelSoundsModal] = React.useState(false);
  const [showVictorySoundModal, setShowVictorySoundModal] = React.useState(false);
  const [showVolumeControl, setShowVolumeControl] = React.useState(false);
  const [showWheelSize, setShowWheelSize] = React.useState(false);
  const [showAnimationSpeed, setShowAnimationSpeed] = React.useState(false);
  const [showPresetList, setShowPresetList] = React.useState(false);
  const [showHowToUse, setShowHowToUse] = React.useState(false);
  const [showUpdates, setShowUpdates] = React.useState(false);
  const [showSaveCurrent, setShowSaveCurrent] = React.useState(false);
  const [showExportList, setShowExportList] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>{siteConfig.siteName} - Random Name Picker Wheel</title>
        <meta name="description" content={siteConfig.siteDescription} />
        <meta name="keywords" content={siteConfig.siteKeywords.join(', ')} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={siteConfig.siteName} />
        <meta property="og:description" content={siteConfig.siteDescription} />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content={siteConfig.siteName} />
        <meta name="twitter:description" content={siteConfig.siteDescription} />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content={siteConfig.author} />
        <link rel="canonical" href={window.location.href} />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": siteConfig.siteName,
            "description": siteConfig.siteDescription,
            "url": window.location.href,
            "applicationCategory": "Utility",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>

        {/* Add specific meta tags for sound control */}
        <meta name="description" content="Customize your wheel experience with volume controls for spinning and victory sounds. Adjust the wheel size to perfectly fit your screen." />
        <meta name="keywords" content="volume control, wheel size, customization, sound effects, accessibility, user preferences" />
        
        {/* Schema.org markup for controls */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Wheel of Names Sound Controls",
            "applicationCategory": "Customization",
            "featureList": [
              "Volume control for wheel sounds",
              "Volume control for victory sounds",
              "Adjustable wheel size",
              "Sound testing capability",
              "Responsive design"
            ]
          })}
        </script>
      </Helmet>

      <footer className="bg-black/20 backdrop-blur-md mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors">
              <h3 className="footer-heading">
                <span className="text-xl mr-2">🎵</span>Sound Effects
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setShowWheelSoundsModal(true)}
                  className="footer-button"
                >
                  <span className="text-lg mr-2">🔊</span>Wheel Sounds
                </button>
                <button 
                  onClick={() => setShowVictorySoundModal(true)}
                  className="footer-button"
                >
                  <span className="text-lg mr-2">🏆</span>Victory Sounds
                </button>
                <button 
                  onClick={() => setShowVolumeControl(true)}
                  className="footer-button"
                >
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
                <button 
                  onClick={() => setShowWheelSize(true)}
                  className="footer-button"
                >
                  <span className="text-lg mr-2">📏</span>Wheel Size
                </button>
                <button 
                  onClick={() => setShowAnimationSpeed(true)}
                  className="footer-button"
                >
                  <span className="text-lg mr-2">⚡</span>Animation Speed
                </button>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors">
              <h3 className="footer-heading">
                <span className="text-xl mr-2">📋</span>Presets
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setShowPresetList(true)}
                  className="footer-button"
                >
                  <span className="text-lg mr-2">✨</span>Magic Lists
                </button>
                <button 
                  onClick={() => setShowSaveCurrent(true)}
                  className="footer-button"
                >
                  <span className="text-lg mr-2">💾</span>Save Current
                </button>
                <button 
                  onClick={() => setShowExportList(true)}
                  className="footer-button"
                >
                  <span className="text-lg mr-2">📤</span>Export List
                </button>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors">
              <h3 className="footer-heading">
                <span className="text-xl mr-2">ℹ️</span>About
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setShowHowToUse(true)}
                  className="footer-button"
                >
                  <span className="text-lg mr-2">📖</span>How to Use
                </button>
                <button 
                  onClick={() => setShowUpdates(true)}
                  className="footer-button"
                >
                  <span className="text-lg mr-2">🔄</span>Updates
                </button>
                <button 
                  onClick={() => setShowContact(true)}
                  className="footer-button"
                >
                  <span className="text-lg mr-2">📧</span>Contact
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 hover:text-white/80 transition-colors">
              © {currentYear} PickerWheelKids.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {showWheelSoundsModal && (
        <WheelSoundsModal
          currentType={audioType}
          onTypeChange={onAudioTypeChange}
          onClose={() => setShowWheelSoundsModal(false)}
        />
      )}

      {showVictorySoundModal && (
        <VictorySoundModal
          currentSound={selectedWinSound}
          onSoundChange={onWinSoundChange}
          onClose={() => setShowVictorySoundModal(false)}
        />
      )}

      {showVolumeControl && (
        <VolumeControlModal
          onClose={() => setShowVolumeControl(false)}
        />
      )}

      {showWheelSize && (
        <WheelSizeModal
          currentSize={wheelSize}
          onSizeChange={onWheelSizeChange}
          onClose={() => setShowWheelSize(false)}
        />
      )}

      {showAnimationSpeed && (
        <AnimationSpeedModal
          currentSpeed={currentSpeed}
          onSpeedChange={onSpeedChange}
          onClose={() => setShowAnimationSpeed(false)}
        />
      )}

      {showPresetList && (
        <PresetListModal
          currentPreset={currentPreset}
          onSelect={onPresetSelect}
          onClose={() => setShowPresetList(false)}
        />
      )}

      {showHowToUse && (
        <HowToUseModal
          onClose={() => setShowHowToUse(false)}
        />
      )}

      {showUpdates && (
        <UpdatesModal
          onClose={() => setShowUpdates(false)}
        />
      )}

      {showSaveCurrent && (
        <ComingSoonModal
          type="save"
          onClose={() => setShowSaveCurrent(false)}
        />
      )}

      {showExportList && (
        <ComingSoonModal
          type="export"
          onClose={() => setShowExportList(false)}
        />
      )}

      {showContact && (
        <ComingSoonModal
          type="contact"
          onClose={() => setShowContact(false)}
        />
      )}
    </>
  );
} 