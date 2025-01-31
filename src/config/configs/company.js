const config = {
  siteName: "Company Wheel",
  language: "en",
  translations: {
    en: {
      title: "✨ Company Wheel ✨",
      spinButton: "🎯 SPIN!",
      spinningText: "🎡 Spinning...",
      winnerTitle: "🎉 Selected!",
      addParticipantsTitle: "✏️ Add Employee",
      participantsListTitle: "📝 Employee List",
      addButtonText: "Add Employee ✨",
      inputPlaceholder: "Enter employee name",
    },
  },
  defaultParticipants: [
    "👔 Manager",
    "💼 Team Lead",
    "👨‍💻 Developer",
    "🎨 Designer",
  ],
  wheelColors: [
    "#2E3B55",
    "#4A90E2",
    "#50E3C2",
    "#B8E986",
    "#9013FE",
    "#417505",
    "#4A4A4A",
    "#F5A623",
  ],
  spinDuration: 4000,
  minExtraSpins: 3,
  maxExtraSpins: 8,
  audio: {
    type: "electronic",
    volume: 0.2,
  },
};

export default config;
