import React from "react";
import { useParams, useLocation } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import { spinningAudio } from "../utils/audio";
import { wheelAudio } from "../utils/wheelAudio";
import { winSoundPlayer } from "../utils/winSounds";
import wheelPresets from "../config/wheelPresets";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Confetti from "./Confetti";
import { themes } from "../config/themes";
import ThemeSelector from "./ThemeSelector";
import PresetListModal from "./PresetListModal";
import ScoreBoard from "./ScoreBoard";
import ShareListModal from "./ShareListModal";
import { useState } from "react";

export default function SpinningWheel() {
  const { presetSlug, id } = useParams();
  const location = useLocation();
  const isSharedList = location.pathname.startsWith("/s/");

  // Change preset from const to state
  const [preset, setPreset] = React.useState(() => {
    if (presetSlug && wheelPresets[presetSlug]) {
      return wheelPresets[presetSlug];
    }
    return null;
  });

  // If a valid preset is provided via URL, use its items; otherwise use default participants.
  const [names, setNames] = React.useState(() => {
    if (preset) {
      return preset.items;
    }
    return siteConfig.defaultParticipants;
  });

  // Update preset and names when presetSlug changes
  React.useEffect(() => {
    if (!isSharedList && presetSlug && wheelPresets[presetSlug]) {
      setPreset(wheelPresets[presetSlug]);
      setNames(wheelPresets[presetSlug].items);
    }
  }, [presetSlug, isSharedList]);

  // Fetch shared list data
  React.useEffect(() => {
    const fetchSharedList = async () => {
      if (isSharedList && id) {
        try {
          const response = await fetch(`/api/post/${id}`);
          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || "Failed to fetch shared list");
          }

          // Update the names list with the shared data
          setNames(data.data);

          // Setup the preset from shared data
          setPreset({
            name: data.name,
            description: data.description,
            title: data.title,
            content: data.content,
            items: data.data,
          });

          document.title = `${data.name} - SillyWheel.com`;
        } catch (error) {
          console.error("Error loading shared list:", error);
          // Optionally show error to user
        }
      }
    };

    fetchSharedList();
  }, [id, isSharedList]);

  const [rotation, setRotation] = React.useState(0);
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const wheelRef = React.useRef(null);
  const [audioType, setAudioType] = React.useState(siteConfig.audio.type);
  const [selectedWinSound, setSelectedWinSound] = React.useState(0);
  const winSounds = winSoundPlayer.getSoundsList();
  const [showPresetList, setShowPresetList] = React.useState(false);
  const [currentPreset, setCurrentPreset] = React.useState(null);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState(themes[0]);
  const [showThemeSelector, setShowThemeSelector] = React.useState(false);
  const [wheelSize, setWheelSize] = React.useState(384);
  const [spinAnimation, setSpinAnimation] = React.useState({
    duration: 5000,
    curve: "cubic-bezier(0.2, 0, 0.1, 1)",
  });
  const [winner, setWinner] = React.useState(null);
  const [winningIndex, setWinningIndex] = React.useState(null); // New state for winning index
  const [autoRemoveWinner, setAutoRemoveWinner] = React.useState(false); // Winner Gobbler toggle
  const [wheelRenderKey, setWheelRenderKey] = React.useState(0); // New state for forcing re-render of the wheel
  const [keepScores, setKeepScores] = React.useState(false);
  const [scores, setScores] = React.useState({});
  const [showScoreBoard, setShowScoreBoard] = React.useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const translations = siteConfig.translations[siteConfig.language];

  const getWheelColors = (index) => {
    return siteConfig.wheelColors[index % siteConfig.wheelColors.length];
  };

  const polarToCartesian = (radius, angle) => {
    const angleInRadians = ((angle - 90) * Math.PI) / 180;
    return {
      x: radius * Math.cos(angleInRadians),
      y: radius * Math.sin(angleInRadians),
    };
  };

  const createWheelSegment = (startAngle, endAngle, radius) => {
    const start = polarToCartesian(radius, startAngle);
    const end = polarToCartesian(radius, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return [
      "M",
      0,
      0,
      "L",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      1,
      end.x,
      end.y,
      "Z",
    ].join(" ");
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowConfetti(false);

    const extraSpins =
      siteConfig.minExtraSpins +
      Math.floor(
        Math.random() * (siteConfig.maxExtraSpins - siteConfig.minExtraSpins)
      );
    const baseRotation = extraSpins * 360;
    const randomAngle = Math.random() * 360;
    const totalRotation = baseRotation + randomAngle;

    spinningAudio.start(names.length, totalRotation);

    const newRotation = rotation + totalRotation; // Capture new rotation value
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      spinningAudio.stop();
      setShowConfetti(true);

      const finalRotation = newRotation % 360; // Use the newRotation here
      const segmentAngle = 360 / names.length;
      // Calculate effective pointer angle (pointer is at top, i.e. 0° in global frame)
      const effectiveAngle = (360 - finalRotation) % 360;
      const winIndex = Math.floor(effectiveAngle / segmentAngle);
      const winningName = names[winIndex];
      winSoundPlayer.playWinSound(selectedWinSound);
      setWinner(winningName); // Set winner to trigger the announcement overlay
      setWinningIndex(winIndex); // Save the winning index for later removal
    }, spinAnimation.duration);
  };

  // Updated handleWinnerClose to align rotation with n-1 segments covering entire wheel
  const handleWinnerClose = () => {
    if (keepScores && winner) {
      setScores((prev) => ({
        ...prev,
        [winner]: (prev[winner] || 0) + 1,
      }));
    }

    if (autoRemoveWinner && winningIndex !== null) {
      const segmentEl = document.getElementById(
        `wheel-segment-${winningIndex}`
      );
      if (segmentEl) {
        segmentEl.classList.add("animate-remove");
        const finalRotation = rotation % 360; // capture current final rotation
        setTimeout(() => {
          setNames((prevNames) => {
            const newNames = [...prevNames];
            newNames.splice(winningIndex, 1);
            const newCount = newNames.length;
            if (newCount > 0) {
              const newSegAngle = 360 / newCount;
              // Use floor to align the wheel segments with boundaries covering full circle
              const adjustedRotation =
                Math.floor(finalRotation / newSegAngle) * newSegAngle;
              setRotation(adjustedRotation);
            } else {
              setRotation(0);
            }
            return newNames;
          });
          setWheelRenderKey((prev) => prev + 1); // Force re-render of wheel segments
          setWinner(null);
          setWinningIndex(null);
        }, 1000); // delay to match CSS animation duration
        return;
      }
    }
    setWinner(null);
    setWinningIndex(null);
  };

  const addName = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      setNames([...names, newName.trim()]);
      setNewName("");
    }
  };

  const removeName = (indexToRemove) => {
    setNames(names.filter((_, index) => index !== indexToRemove));
  };

  const audioTypes = {
    none: {
      id: "none",
      name: "🤫 Silent Ninja",
      description: "Sneaky and silent mode",
    },
    tick: {
      id: "tick",
      name: "🎵 Bouncy Boop",
      description: "Classic bouncy sound effects",
    },
    slot: {
      id: "slot",
      name: "🎰 Lucky Ducky",
      description: "Quacking good slot machine sounds",
    },
    drum: {
      id: "drum",
      name: "🥁 Rhythm Riot",
      description: "Drum-tastic excitement builder",
    },
    bell: {
      id: "bell",
      name: "🔔 Ding Dong Delight",
      description: "Jingly bell happiness",
    },
    arcade: {
      id: "arcade",
      name: "👾 Pixel Party",
      description: "Old school gaming goodness",
    },
    magic: {
      id: "magic",
      name: "✨ Sparkle Spells",
      description: "Magical whooshes and tingles",
    },
    party: {
      id: "party",
      name: "🎉 Confetti Chaos",
      description: "Party time sound explosion",
    },
    space: {
      id: "space",
      name: "🛸 UFO Disco",
      description: "Intergalactic sound waves",
    },
  };

  const handlePresetSelect = (presetItems, presetKey) => {
    setNames(presetItems);
    setCurrentPreset(presetKey);
  };

  const getResponsiveSize = () => {
    const width = window.innerWidth;
    if (width < 480) return 240; // Small mobile
    if (width < 640) return 280; // Mobile
    if (width < 768) return 340; // Tablet
    if (width < 1024) return 400; // Small desktop
    if (width < 1280) return 480; // Large desktop
    return 560; // Extra large screens
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (wheelSize === "auto") {
        setWheelSize(getResponsiveSize());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [wheelSize]);

  // New helper to shuffle the participants list
  const shuffleParticipants = () => {
    const shuffled = [...names];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setNames(shuffled);
    setWheelRenderKey((prev) => prev + 1); // Force wheel update
  };

  React.useEffect(() => {
    spinningAudio.type = audioType;
  }, [audioType]);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${currentTheme.background}`}
    >
      <Navbar 
        onThemeClick={() => setShowThemeSelector(true)} 
        currentTheme={currentTheme} 
      />

      <main className="flex-grow p-8">
        <div className="relative pt-20 pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1
                className={`text-4xl sm:text-6xl font-bold mb-8 
                ${currentTheme.customStyles?.text || "text-white"} 
                ${currentTheme.customStyles?.glow || ""} 
                ${
                  currentTheme.id === "hacker"
                    ? "font-mono tracking-tight"
                    : "font-sans"
                }`}
              >
                SillyWheel.com - Spin for laughs, chaos, and totally fair
                mayhem!
              </h1>
              <p
                className={`text-lg 
                ${currentTheme.customStyles?.muted || "text-white/70"} 
                ${currentTheme.id === "hacker" ? "font-mono" : "font-sans"}`}
              >
                Add names, spin the wheel, and let randomness decide! Perfect
                for picking winners, making decisions, or just having fun.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8">
              <div
                className={`relative bg-white/10 backdrop-blur-md p-8 rounded-2xl 
                  ${currentTheme.wheelShadow}
                  hover:${currentTheme.wheelShadowHover} transition-all duration-500 
                  animate-float group overflow-hidden`}
              >
                <div
                  className="absolute -top-2 -left-2 w-4 h-4 md:w-6 md:h-6 
                  bg-pink-500 rounded-full animate-ping-slow opacity-75"
                ></div>
                <div
                  className="absolute -bottom-2 -right-2 w-4 h-4 md:w-6 md:h-6 
                  bg-purple-500 rounded-full animate-ping-slow opacity-75 delay-300"
                ></div>

                <div
                  className="relative cursor-pointer"
                  onClick={!isSpinning ? spinWheel : undefined}
                  style={{
                    width:
                      wheelSize === "auto" ? getResponsiveSize() : wheelSize,
                    height:
                      wheelSize === "auto" ? getResponsiveSize() : wheelSize,
                  }}
                >
                  <svg
                    key={wheelRenderKey}
                    ref={wheelRef}
                    viewBox="-150 -150 300 300"
                    className="w-full h-full hover:scale-[1.02] transition-transform"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transition: isSpinning
                        ? `transform ${spinAnimation.duration / 1000}s ${
                            spinAnimation.curve
                          }`
                        : "transform 0.5s ease-out",
                    }}
                  >
                    {names.map((name, index) => {
                      const segmentAngle = 360 / names.length;
                      const startAngle = index * segmentAngle;
                      const endAngle = (index + 1) * segmentAngle;
                      const radius = 150;
                      const midAngle = startAngle + segmentAngle / 2;
                      const textRadius = radius * 0.6;
                      const textPos = polarToCartesian(textRadius, midAngle);

                      return (
                        <g
                          key={`${wheelRenderKey}-${index}`}
                          id={`wheel-segment-${index}`}
                        >
                          <path
                            d={createWheelSegment(startAngle, endAngle, radius)}
                            fill={getWheelColors(index)}
                            stroke="white"
                            strokeWidth="2"
                          />
                          <text
                            x={0}
                            y={0}
                            fill="white"
                            fontSize="14"
                            fontWeight="bold"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            transform={`
                              rotate(${midAngle - 90})
                              translate(${radius * 0.5}, 0)
                            `}
                          >
                            {name}
                          </text>
                        </g>
                      );
                    })}
                    <circle cx="0" cy="0" r="15" fill="#333" />
                  </svg>

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className={`w-14 h-14 flex items-center justify-center transition-transform duration-75 ${
                        isSpinning ? "animate-picker-bounce" : ""
                      }`}
                    >
                      <div
                        className="w-0 h-0 
                          border-l-[24px] border-l-transparent 
                          border-r-[24px] border-r-transparent 
                          border-t-[48px] border-t-yellow-400 
                          filter drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={spinWheel}
                  disabled={isSpinning || names.length < 2}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold 
                    py-4 px-12 rounded-full shadow-lg 
                    transform hover:scale-105 hover:rotate-1 active:scale-95
                    disabled:opacity-50 transition-all duration-300
                    animate-bounce-subtle
                    relative overflow-hidden group
                    before:absolute before:inset-0 before:bg-white/20 before:transform before:-skew-x-12 
                    before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
                >
                  <span className="relative z-10 group-hover:animate-pulse">
                    {isSpinning
                      ? "🎡 " + translations.spinningText
                      : "✨ Spin the Silly Wheel!"}
                  </span>
                </button>
                {/* silly and fun toggle for Winner Gobbler 🍽 */}
                <div className="flex items-center space-x-4 mt-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={autoRemoveWinner}
                      onChange={() => setAutoRemoveWinner((prev) => !prev)}
                      disabled={keepScores}
                      className="form-checkbox h-5 w-5 text-purple-600"
                    />
                    <span className="text-white">Winner Out 🍽</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={keepScores}
                      onChange={() => {
                        setKeepScores((prev) => !prev);
                        if (!keepScores) setAutoRemoveWinner(false);
                      }}
                      className="form-checkbox h-5 w-5 text-yellow-400"
                    />
                    <span className="text-white">Keep Score 🏆</span>
                  </label>
                  {keepScores && Object.keys(scores).length > 0 && (
                    <button
                      onClick={() => setShowScoreBoard((prev) => !prev)}
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 
                        text-white px-3 py-1 rounded-full text-sm
                        hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      View Scores 🏆
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6">
              <div className="flex flex-wrap gap-2 justify-center md:justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white w-full md:w-auto text-center md:text-left">
                  ✨ The silly and fun Wheel!
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => setShowPresetList(true)}
                    className="text-sm md:text-base bg-white/20 text-white px-3 md:px-4 py-2 rounded-lg 
                      hover:bg-white/30 transition-colors flex items-center gap-2
                      hover:scale-105 transform"
                  >
                    <span className="animate-bounce-subtle">✨</span>
                    <span className="hidden md:inline">Magic Lists</span>
                    <span className="md:hidden">Lists</span>
                  </button>
                  <button
                    onClick={() => setNames([])}
                    className="text-sm md:text-base bg-gradient-to-r from-blue-400 to-purple-400 text-white 
                      px-3 md:px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 
                      transform hover:scale-105 flex items-center gap-2"
                  >
                    <span>🌟</span>
                    <span className="hidden md:inline">Start Fresh!</span>
                    <span className="md:hidden">Clear</span>
                  </button>
                </div>
              </div>

              <form onSubmit={addName} className="space-y-4 mb-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder={translations.inputPlaceholder}
                    className="flex-1 px-4 py-2 bg-white/10 border-2 border-white/20 rounded-lg 
                      focus:outline-none focus:border-white/40 text-white placeholder-white/50
                      transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-400 to-emerald-500 text-white 
                      font-bold py-2 px-6 rounded-lg hover:scale-105 transform transition-all
                      hover:shadow-lg hover:shadow-green-500/30 whitespace-nowrap"
                  >
                    {translations.addButtonText}
                  </button>
                </div>
              </form>

              <div className="max-h-[50vh] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
                <div className="space-y-2">
                  {names.map((name, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-black/20 p-3 rounded-lg
                        backdrop-blur-sm border border-white/20
                        transform hover:scale-[1.02] hover:shadow-lg transition-all duration-200
                        group/item relative overflow-hidden"
                    >
                      <span className="font-medium text-white/90 group-hover/item:text-white transition-colors truncate mr-2">
                        {name}
                      </span>
                      <button
                        onClick={() => removeName(index)}
                        className="text-white/90 hover:text-red-400 font-bold text-xl w-8 h-8 
                          rounded-full hover:bg-black/20 hover:rotate-90 transition-all duration-300
                          flex items-center justify-center flex-shrink-0
                          bg-black/10"
                        aria-label="Remove participant"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
            <div className="mt-4 flex justify-center gap-2">
              {Object.entries(audioTypes).map(([key, type]) => (
                <button
                  key={type.id}
                  onClick={() => {
                    setAudioType(key);
                  }}
                  className={`px-4 py-2 rounded-lg ${
                    audioType === key
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-center text-white mb-4">
                🏆 Victory Sound
              </h3>
              <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                {winSounds.map((sound) => (
                  <button
                    key={sound.id}
                    onClick={() => setSelectedWinSound(sound.id)}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                      selectedWinSound === sound.id
                        ? "bg-purple-600 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    <span>{sound.emoji}</span>
                    <span>{sound.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {preset && (
          // SEO Content Section with adjusted width
          <div className="max-w-xl mx-auto">
            <section className="seo-content bg-white/20 backdrop-blur-md p-6 mt-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-white">
                {preset.title || `Dive Deeper into ${preset.name}!`}
              </h2>
              <p className="text-white/80 mt-4">
                {preset.content ||
                  (preset.description
                    ? preset.description
                    : "Discover a world of fun!")}
              </p>
              <p className="text-white/80 mt-2">
                Let your imagination run wild with engaging ideas and playful
                challenges. Explore, learn, and celebrate creativity!
              </p>
            </section>
          </div>
        )}
      </main>

      {showScoreBoard && keepScores && (
        <ScoreBoard
          scores={scores}
          onClose={() => setShowScoreBoard(false)}
          onClearScores={() => {
            if (window.confirm("Are you sure you want to clear all scores?")) {
              setScores({});
            }
          }}
        />
      )}

      {/* New explanation panel added above the footer */}
      <div className="max-w-xl mx-auto">
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-4">
            What is SillyWheel.com?
          </h3>
          <p className="text-white/80 mb-2">
            SillyWheel.com is a silly and fun and interactive tool designed to
            add excitement to every classroom or party.
          </p>
          <p className="text-white/80 mb-2">
            How to Play: Simply add participants, spin the wheel, and let
            fortune decide the winner.
          </p>
          <p className="text-white/80">
            Footer Tools: Use the footer to choose audio styles, adjust the
            wheel size, set spin speed, and select victory sounds for a
            personalized experience.
          </p>
        </div>
      </div>

      {/* Preset List Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            ✨ All Magic Presets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(wheelPresets).map(([key, preset]) => (
              <a
                key={key}
                href={`/${key}`}
                className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 
                  transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {preset.emoji}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {preset.name}
                  </h3>
                </div>
                <p className="text-sm text-white/70 line-clamp-2 mb-4">
                  {preset.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {preset.items.slice(0, 3).map((item, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-black/20 text-white/60"
                    >
                      {item}
                    </span>
                  ))}
                  {preset.items.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                      +{preset.items.length - 3} more
                    </span>
                  )}
                </div>
                <div className="mt-4 text-sm text-purple-300 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Try this preset</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer
        audioType={audioType}
        onAudioTypeChange={(type) => {
          setAudioType(type);
        }}
        selectedWinSound={selectedWinSound}
        onWinSoundChange={setSelectedWinSound}
        wheelSize={wheelSize}
        onWheelSizeChange={setWheelSize}
        currentSpeed={spinAnimation.duration}
        onSpeedChange={setSpinAnimation}
        currentPreset={currentPreset}
        onPresetSelect={(items, key) => handlePresetSelect(items, key)}
      />

      {showPresetList && (
        <PresetListModal
          currentPreset={currentPreset}
          onSelect={(items, key) => handlePresetSelect(items, key)}
          onClose={() => setShowPresetList(false)}
        />
      )}

      {showConfetti && <Confetti />}

      {showThemeSelector && (
        <ThemeSelector
          onSelect={setCurrentTheme}
          onClose={() => setShowThemeSelector(false)}
        />
      )}

      {/* Update the winner announcement overlay */}
      {winner && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
          <div
            className="bg-slate-900/90 rounded-2xl p-8 max-w-md w-full mx-4 
            border border-white/10 shadow-2xl text-center transform animate-modal-in"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Congratulations!
            </h2>
            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <p className="text-2xl font-bold text-purple-300 break-words">
                {winner}
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <button
                onClick={handleWinnerClose}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white 
                  px-6 py-3 rounded-lg font-semibold hover:scale-105 
                  transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Continue
              </button>
              <button
                onClick={() => setShowShareModal(true)}
                className="bg-white/10 border border-white/20 p-3 rounded-lg
                  hover:bg-white/20 transition-all duration-300 group"
                aria-label="Share result"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
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
              </button>
            </div>
          </div>
        </div>
      )}

      <ShareListModal
        show={showShareModal}
        onHide={() => setShowShareModal(false)}
        listData={names}
      />
    </div>
  );
}
