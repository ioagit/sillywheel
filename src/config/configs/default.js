const config = {
  siteName: "Wheel of Names",
  language: "en",
  translations: {
    en: {
      title: "✨ Wheel of Names ✨",
      spinButton: "🎯 SPIN!",
      spinningText: "🎡 Spinning...",
      winnerTitle: "🎉 Winner!",
      addParticipantsTitle: "✏️ Add Participants",
      participantsListTitle: "📝 Participants List",
      addButtonText: "Add ✨",
      inputPlaceholder: "Enter a name",
    },
    es: {
      title: "✨ Ruleta de Nombres ✨",
      spinButton: "🎯 ¡GIRAR!",
      spinningText: "🎡 Girando...",
      winnerTitle: "🎉 ¡Ganador!",
      addParticipantsTitle: "✏️ Agregar Participantes",
      participantsListTitle: "📝 Lista de Participantes",
      addButtonText: "Agregar ✨",
      inputPlaceholder: "Ingrese un nombre",
    },
  },
  defaultParticipants: [
    "🎮 Player 1",
    "🎨 Artist",
    "🎵 Musician",
    "🎪 Performer",
    "⭐ Star",
    "🎯 Winner",
  ],
  wheelColors: [
    "#FF61D8", "#FF8139", "#FFD93D", "#6BCB77",
    "#4D96FF", "#9145B6", "#FF5B5B", "#00C2A8",
    "#FF9A8C", "#4DEEEA", "#74F2CE", "#FFC75F",
  ],
  spinDuration: 5000,
  minExtraSpins: 5,
  maxExtraSpins: 10,
};

export default config; 