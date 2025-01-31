const config = {
  siteName: "Classroom Picker",
  language: "en",
  translations: {
    en: {
      title: "✨ Classroom Picker ✨",
      spinButton: "🎯 Pick Student!",
      spinningText: "🎡 Choosing...",
      winnerTitle: "🎉 Selected Student!",
      addParticipantsTitle: "✏️ Add Student",
      participantsListTitle: "📝 Class List",
      addButtonText: "Add Student ✨",
      inputPlaceholder: "Enter student name",
    },
  },
  defaultParticipants: [
    "📚 Student 1",
    "✏️ Student 2",
    "🎒 Student 3",
    "📝 Student 4",
  ],
  wheelColors: [
    "#FF9999",
    "#99FF99",
    "#9999FF",
    "#FFFF99",
    "#FF99FF",
    "#99FFFF",
    "#FFB366",
    "#99FF66",
  ],
  spinDuration: 3000,
  minExtraSpins: 4,
  maxExtraSpins: 7,
  audio: {
    type: "toy",
    volume: 0.25,
  },
};

export default config;
