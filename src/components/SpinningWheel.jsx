import React from "react";
import siteConfig from "../config/siteConfig";
import SpinningAudio from "../utils/audio";

export default function SpinningWheel() {
  const [names, setNames] = React.useState(siteConfig.defaultParticipants);
  const [rotation, setRotation] = React.useState(0);
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [winner, setWinner] = React.useState("");
  const [newName, setNewName] = React.useState("");
  const wheelRef = React.useRef(null);
  const [audioType, setAudioType] = React.useState(siteConfig.audio.type);
  const [spinningAudio] = React.useState(() => new SpinningAudio(audioType));

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

    spinningAudio.start();

    const extraSpins =
      siteConfig.minExtraSpins +
      Math.floor(
        Math.random() * (siteConfig.maxExtraSpins - siteConfig.minExtraSpins)
      );
    const baseRotation = extraSpins * 360;
    const randomAngle = Math.random() * 360;
    const totalRotation = baseRotation + randomAngle;

    setRotation((prev) => prev + totalRotation);

    setTimeout(() => {
      const winningIndex = Math.floor(
        (360 - (totalRotation % 360)) / (360 / names.length)
      );
      setWinner(names[winningIndex % names.length]);
      setIsSpinning(false);

      spinningAudio.stop();
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          {translations.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="relative">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <svg
                  ref={wheelRef}
                  viewBox="-150 -150 300 300"
                  className="w-72 h-72"
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
                          x={textPos.x}
                          y={textPos.y}
                          fill="white"
                          fontSize="16"
                          fontWeight="bold"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          transform={`rotate(${midAngle}, ${textPos.x}, ${textPos.y})`}
                        >
                          {name}
                        </text>
                      </g>
                    );
                  })}
                  <circle cx="0" cy="0" r="15" fill="#333" />
                </svg>

                <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                  <div className="w-8 h-8">
                    <div className="w-0 h-0 border-r-[16px] border-r-transparent border-l-[16px] border-l-transparent border-b-[32px] border-b-yellow-400 animate-bounce" />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={spinWheel}
              disabled={isSpinning || names.length < 2}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 disabled:opacity-50"
            >
              {isSpinning ? translations.spinningText : translations.spinButton}
            </button>

            {winner && (
              <div className="text-center p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                <h2 className="text-2xl font-bold text-purple-600">
                  {translations.winnerTitle}
                </h2>
                <p className="text-4xl font-bold text-pink-600 animate-bounce mt-2">
                  {winner}
                </p>
              </div>
            )}
          </div>

          <div className="bg-purple-50 rounded-xl p-6">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-xl font-bold text-purple-700 mb-4">
                  {translations.addParticipantsTitle}
                </h3>
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
                      className="flex items-center justify-between bg-white p-3 rounded-lg"
                    >
                      <span className="font-medium text-gray-700">{name}</span>
                      <button
                        onClick={() => removeName(index)}
                        className="text-red-400 hover:text-red-600 font-bold text-xl w-8 h-8 rounded-full hover:bg-red-100 flex items-center justify-center"
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
      </div>
    </div>
  );
}
