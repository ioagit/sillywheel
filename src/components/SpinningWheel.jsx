import React from "react";
import siteConfig from "../config/siteConfig";
import SpinningAudio from "../utils/audio";
import WinnerModal from "./WinnerModal";
import { winSoundPlayer } from "../utils/winSounds";
import PresetSelector from "./PresetSelector";
import wheelPresets from "../config/wheelPresets";
import Confetti from "./Confetti";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SpinningWheel() {
  const [names, setNames] = React.useState(siteConfig.defaultParticipants);
  const [rotation, setRotation] = React.useState(0);
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [winner, setWinner] = React.useState("");
  const [newName, setNewName] = React.useState("");
  const wheelRef = React.useRef(null);
  const [audioType, setAudioType] = React.useState(siteConfig.audio.type);
  const [spinningAudio] = React.useState(() => new SpinningAudio(audioType));
  const [showWinnerModal, setShowWinnerModal] = React.useState(false);
  const [selectedWinSound, setSelectedWinSound] = React.useState(0);
  const winSounds = winSoundPlayer.getSoundsList();
  const [showPresetSelector, setShowPresetSelector] = React.useState(false);
  const [currentPreset, setCurrentPreset] = React.useState(null);

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
    setWinner("");
    setShowWinnerModal(false);

    const extraSpins =
      siteConfig.minExtraSpins +
      Math.floor(
        Math.random() * (siteConfig.maxExtraSpins - siteConfig.minExtraSpins)
      );
    const baseRotation = extraSpins * 360;
    const randomAngle = Math.random() * 360;
    const totalRotation = baseRotation + randomAngle;

    spinningAudio.start(names.length, totalRotation);

    setRotation((prev) => prev + totalRotation);

    setTimeout(() => {
      // Calculate the winning index based on where the wheel stops
      const finalRotation = (rotation + totalRotation) % 360;
      const segmentAngle = 360 / names.length;
      const winningIndex = Math.floor(finalRotation / segmentAngle);
      const actualWinner = names[(names.length - winningIndex) % names.length];

      setWinner(actualWinner);
      setIsSpinning(false);
      spinningAudio.stop();

      if (currentPreset === "farts") {
        const soundIndex =
          wheelPresets.farts.soundIndices[
            (names.length - winningIndex) % names.length
          ];
        winSoundPlayer.playWinSound(soundIndex);
      } else {
        winSoundPlayer.playWinSound(selectedWinSound);
      }

      setShowWinnerModal(true);
    }, siteConfig.spinDuration);
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

  const audioTypes = [
    { id: "mechanical", label: "⚙️ Mechanical" },
    { id: "electronic", label: "🤖 Electronic" },
    { id: "casino", label: "🎰 Casino" },
    { id: "toy", label: "🎪 Toy" },
  ];

  const handlePresetSelect = (presetItems, presetKey) => {
    setNames(presetItems);
    setCurrentPreset(presetKey);

    if (presetKey === "farts") {
      setSelectedWinSound(0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-shift">
      <Navbar />

      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300">
          <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-pulse">
            {translations.title}
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="relative">
                <div className="relative w-96 h-96 flex items-center justify-center">
                  <svg
                    ref={wheelRef}
                    viewBox="-150 -150 300 300"
                    className="w-96 h-96"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transition: isSpinning
                        ? "transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
                        : "none",
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
                        <g key={index}>
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

                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                    <div
                      className={`w-14 h-14 flex items-center justify-center transition-transform duration-75 ${
                        isSpinning ? "animate-picker-bounce" : ""
                      }`}
                    >
                      <div className="w-0 h-0 border-r-[24px] border-r-transparent border-l-[24px] border-l-transparent border-b-[48px] border-b-yellow-400 filter drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={spinWheel}
                disabled={isSpinning || names.length < 2}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg 
                  transform hover:scale-105 hover:rotate-1 active:scale-95
                  disabled:opacity-50 transition-all duration-300
                  animate-bounce-subtle
                  relative overflow-hidden
                  before:absolute before:inset-0 before:bg-white/20 before:transform before:-skew-x-12 before:-translate-x-full
                  hover:before:translate-x-full before:transition-transform before:duration-700"
              >
                <span className="relative z-10">
                  {isSpinning
                    ? translations.spinningText
                    : translations.spinButton}
                </span>
              </button>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-purple-700">
                      {translations.addParticipantsTitle}
                    </h3>
                    <button
                      onClick={() => setShowPresetSelector(true)}
                      className="bg-purple-100 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors flex items-center gap-2"
                    >
                      <span>📋</span>
                      <span>Load Preset</span>
                    </button>
                  </div>
                  <form onSubmit={addName} className="space-y-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder={translations.inputPlaceholder}
                        className="flex-1 px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
                      />
                      <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
                      >
                        {translations.addButtonText}
                      </button>
                    </div>
                  </form>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  <h3 className="text-xl font-bold text-purple-700 mb-4">
                    {translations.participantsListTitle}
                  </h3>
                  <div className="space-y-2">
                    {names.map((name, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white p-3 rounded-lg
                          transform hover:scale-102 hover:shadow-md transition-all duration-200
                          group relative overflow-hidden"
                      >
                        <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                          {name}
                        </span>
                        <button
                          onClick={() => removeName(index)}
                          className="text-red-400 hover:text-red-600 font-bold text-xl w-8 h-8 rounded-full
                            hover:bg-red-100 hover:rotate-90 transition-all duration-300
                            flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {audioTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setAudioType(type.id);
                  spinningAudio.type = type.id;
                }}
                className={`px-4 py-2 rounded-lg ${
                  audioType === type.id
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {type.label}
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
      </main>

      <Footer />

      <WinnerModal
        winner={winner}
        onClose={() => setShowWinnerModal(false)}
        translations={translations}
        show={showWinnerModal}
      />

      {showPresetSelector && (
        <PresetSelector
          onSelect={(items, key) => handlePresetSelect(items, key)}
          onClose={() => setShowPresetSelector(false)}
        />
      )}

      {showWinnerModal && <Confetti />}
    </div>
  );
}
