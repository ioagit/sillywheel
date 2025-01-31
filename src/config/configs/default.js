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
      presetButton: "📋 Load Preset",
      presetTitle: "Choose a Wheel Preset",
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
      presetButton: "📋 Cargar Preset",
      presetTitle: "Elegir un Preset",
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
  audio: {
    type: 'toy', // can be 'mechanical', 'electronic', 'casino', or 'toy'
    volume: 0.3,
  },
};

export default config; 