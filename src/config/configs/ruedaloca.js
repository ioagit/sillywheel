const config = {
  siteName: "Rueda Loca",
  language: "es",
  translations: {
    en: {
      title: "✨ Silly Wheel ✨",
      spinButton: "🎯 SPIN!",
      spinningText: "🎡 Spinning...",
      winnerTitle: "🎉 Winner!",
      addParticipantsTitle: "✏️ Add Participants",
      participantsListTitle: "📝 Participants List",
      addButtonText: "Add ✨",
      inputPlaceholder: "Enter a name",
      shareButton: "Share",
      themeButton: "Theme",
      soundEffectsTitle: "Sound Effects",
      wheelSoundsButton: "Wheel Sounds",
      victorySoundsButton: "Victory Sounds",
      volumeControlButton: "Volume Control",
      customizationTitle: "Customization",
      colorThemesButton: "Color Themes",
      wheelSizeButton: "Wheel Size",
      animationSpeedButton: "Animation Speed",
      presetsTitle: "Presets",
      magicListsButton: "Magic Lists",
      saveCurrentButton: "Save Current",
      exportListButton: "Export List",
      aboutTitle: "About",
      howToUseButton: "How to Use",
      updatesButton: "Updates",
      contactButton: "Contact",
      shareModalTitle: "Share",
      shareModalDescription:
        "Share this wheel with your friends and colleagues",
      copyButton: "Copy",
      closeButton: "Close",
      comingSoonText: "Coming soon!",
      stayTunedText:
        "We're working hard to bring you these features soon! Stay tuned for updates.",
      howToUseTitle: "How to Use",
      howToUseWelcome:
        "Welcome to Silly Wheel! Learn how to make the most of our random picker wheel.",
      gettingStartedTitle: "🎯 Getting Started",
      featuresTitle: "✨ Special Features",
      proTipsTitle: "💡 Pro Tips",
      commonUsesTitle: "🎪 Common Uses",
      upcomingFeaturesTitle: "Upcoming Features",
      updatesTitle: "Latest Updates",
      updatesDescription:
        "Stay up to date with our latest features and improvements",
      copyrightText: "© {year} Silly Wheel. All rights reserved.",
      shareTitle: "Random Name Picker Wheel - Free Online Tool",
      shareDescription:
        "Check out this awesome random name picker wheel! Perfect for classroom activities, team building, and decision making.",
      facebook: "Facebook",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      reddit: "Reddit",
      pinterest: "Pinterest",
      email: "Email",
    },
    es: {
      title: "✨ Rueda Loca ✨",
      spinButton: "🎯 ¡GIRAR!",
      spinningText: "🎡 Girando...",
      winnerTitle: "🎉 ¡Ganador!",
      addParticipantsTitle: "✏️ Agregar Participantes",
      participantsListTitle: "📝 Lista de Participantes",
      addButtonText: "Agregar ✨",
      inputPlaceholder: "Ingrese un nombre",
      shareButton: "Compartir",
      themeButton: "Tema",
      soundEffectsTitle: "Efectos de Sonido",
      wheelSoundsButton: "Sonidos de Rueda",
      victorySoundsButton: "Sonidos de Victoria",
      volumeControlButton: "Control de Volumen",
      customizationTitle: "Personalización",
      colorThemesButton: "Temas de Color",
      wheelSizeButton: "Tamaño de Rueda",
      animationSpeedButton: "Velocidad de Animación",
      presetsTitle: "Plantillas",
      magicListsButton: "Listas Mágicas",
      saveCurrentButton: "Guardar Actual",
      exportListButton: "Exportar Lista",
      aboutTitle: "Acerca de",
      howToUseButton: "Cómo Usar",
      updatesButton: "Actualizaciones",
      contactButton: "Contacto",
      shareModalTitle: "Compartir",
      shareModalDescription: "Comparte esta rueda con tus amigos y colegas",
      copyButton: "Copiar",
      closeButton: "Cerrar",
      comingSoonText: "¡Próximamente!",
      stayTunedText:
        "¡Estamos trabajando para traerte estas funciones pronto! Mantente atento a las actualizaciones.",
      howToUseTitle: "Cómo Usar",
      howToUseWelcome:
        "¡Bienvenido a Silly Wheel! Aprende a sacar el máximo provecho de nuestra rueda de selección aleatoria.",
      gettingStartedTitle: "🎯 Primeros Pasos",
      featuresTitle: "✨ Características Especiales",
      proTipsTitle: "💡 Consejos Pro",
      commonUsesTitle: "🎪 Usos Comunes",
      upcomingFeaturesTitle: "Próximas Funciones",
      updatesTitle: "Últimas Actualizaciones",
      updatesDescription:
        "Mantente al día con nuestras últimas funciones y mejoras",
      copyrightText: "© {year} Silly Wheel. Todos los derechos reservados.",
      shareTitle: "Rueda de Selección Aleatoria - Herramienta Gratuita",
      shareDescription:
        "¡Descubre esta increíble rueda de selección aleatoria! Perfecta para actividades en clase, construcción de equipos y toma de decisiones.",
      facebook: "Facebook",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      reddit: "Reddit",
      pinterest: "Pinterest",
      email: "Correo",
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
    "#FF61D8",
    "#FF8139",
    "#FFD93D",
    "#6BCB77",
    "#4D96FF",
    "#9145B6",
    "#FF5B5B",
    "#00C2A8",
    "#FF9A8C",
    "#4DEEEA",
    "#74F2CE",
    "#FFC75F",
  ],
  spinDuration: 5000,
  minExtraSpins: 5,
  maxExtraSpins: 10,
  audio: {
    type: "toy", // can be 'mechanical', 'electronic', 'casino', or 'toy'
    volume: 0.3,
  },
};

export default config;
