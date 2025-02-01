const wheelPresets = {
  yesNo: {
    name: "Yes or No Fun",
    emoji: "❓",
    items: [
      "✅ Yes, for sure!",
      "❌ No way!",
      "✅ Yes, please!",
      "❌ No thank you!",
      "🤔 Not sure yet",
      "💫 Try one more time!"
    ]
  },
  numbers: {
    name: "Magic Numbers",
    emoji: "🔢",
    items: [
      "1️⃣ One",
      "2️⃣ Two",
      "3️⃣ Three",
      "4️⃣ Four",
      "5️⃣ Five",
      "6️⃣ Six"
    ]
  },
  animals: {
    name: "Cute Animals",
    emoji: "🦁",
    items: [
      "🦁 Lion King",
      "🐘 Big Elephant",
      "🦒 Tall Giraffe",
      "🦊 Sneaky Fox",
      "🐼 Panda Bear",
      "🦄 Magical Unicorn"
    ]
  },
  food: {
    name: "Yummy Foods",
    emoji: "🍕",
    items: [
      "🍕 Pizza Party",
      "🍔 Tasty Burger",
      "🌮 Taco Time",
      "🍜 Noodle Fun",
      "🍣 Sushi Surprise",
      "🥗 Healthy Salad"
    ]
  },
  activities: {
    name: "Fun Activities",
    emoji: "🎮",
    items: [
      "🎮 Video Games",
      "🎨 Arts & Crafts",
      "📚 Story Time",
      "🎵 Sing-Along",
      "🎬 Movie Time",
      "🏃 Outdoor Play"
    ]
  },
  custom: {
    name: "My Fun List",
    emoji: "✨",
    items: [
      "🎮 Game On",
      "🎨 Little Artist",
      "🎵 Music Maker",
      "🎪 Star Performer",
      "⭐ Shining Star",
      "🎯 Champion"
    ]
  },
  farts: {
    name: "Silly Giggles",
    emoji: "💨",
    items: [
      "💨 Giggle Puff",
      "🌪️ Whirlwind Whoopee",
      "💦 Silly Spritz",
      "🎵 Toot Tunes",
      "💣 Boom Bubble",
      "🎺 Tooty Trumpet",
      "🫧 Bubbly Burst",
      "⚡ Lightning Laugh",
      "🌬️ Silent Giggle",
      "🎆 Sparkle Surprise"
    ],
    soundIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  teams: {
    name: "Classroom Teams",
    icon: "👥",
    description: "Fun team names for school projects",
    items: [
      "Red Rockets",
      "Blue Stars",
      "Green Gators",
      "Yellow Tigers",
      "Purple Pals",
      "Orange Owls",
      "Black Panthers",
      "White Wolves"
    ]
  },
  classroom: {
    name: "Classroom Helpers",
    icon: "📚",
    description: "Roles and fun duties in the classroom",
    items: [
      "Line Leader",
      "Door Holder",
      "Board Cleaner",
      "Paper Passer",
      "Calendar Helper",
      "Attendance Buddy",
      "Light Monitor",
      "Plant Waterer"
    ]
  },
  family: {
    name: "Family Fun Chores",
    icon: "🏠",
    description: "Simple chores for family time",
    items: [
      "Help with Dishes",
      "Laundry Assistant",
      "Vacuuming Fun",
      "Dusting Duty",
      "Trash Helper",
      "Bed Maker",
      "Pet Walker",
      "Plant Watering"
    ]
  },
  games: {
    name: "School Games",
    icon: "🎲",
    description: "Classic and modern fun games",
    items: [
      "Charades",
      "Drawing Game",
      "Truth or Fun",
      "Musical Chairs",
      "Simon Says",
      "Scavenger Hunt",
      "Trivia Time",
      "Twenty Questions"
    ]
  },
  sports: {
    name: "Play Time Sports",
    icon: "⚽",
    description: "Fun sports activities for everyone",
    items: [
      "Soccer",
      "Basketball",
      "Tennis",
      "Volleyball",
      "Baseball",
      "Swimming",
      "Running",
      "Cycling"
    ]
  },
  movies: {
    name: "Cartoon Movies",
    icon: "🎬",
    description: "Favorite cartoons and kids movies",
    items: [
      "Action Adventures",
      "Funny Tales",
      "Heartwarming Stories",
      "Spooky Fun",
      "Space Adventures",
      "Love Stories",
      "Nature Wonders",
      "Animated Dreams"
    ]
  },
  office: {
    name: "Classroom Jobs",
    icon: "💼",
    description: "Simple classroom tasks for students",
    items: [
      "Note Sharing",
      "Homework Helper",
      "Organizing Books",
      "Filing Papers",
      "Phone Greetings",
      "Schedule Reminder",
      "Book Research",
      "Presentation Prep"
    ]
  },
  meetings: {
    name: "Team Roles",
    icon: "🗣️",
    description: "Fun roles during group work",
    items: [
      "Leader",
      "Timer",
      "Note Taker",
      "Presenter",
      "Tech Buddy",
      "Question Checker",
      "Task Tracker",
      "Follow-up Helper"
    ]
  },
  tasks: {
    name: "Classroom Projects",
    icon: "📋",
    description: "Fun activities for classroom projects",
    items: [
      "Planning Time",
      "Research Fun",
      "Creative Design",
      "Building Tasks",
      "Testing Ideas",
      "Writing Notes",
      "Review Time",
      "Showcase"
    ]
  },
  holidays: {
    name: "Happy Holidays",
    icon: "🎄",
    description: "Fun celebrations and holidays",
    items: [
      "New Year's Party",
      "Valentine's Fun",
      "Easter Egg Hunt",
      "Halloween Spook",
      "Thanksgiving Feast",
      "Christmas Joy",
      "Independence Fest",
      "Labor Day Fun"
    ]
  },
  birthdays: {
    name: "Birthday Party",
    icon: "🎂",
    description: "Exciting activities for birthday celebrations",
    items: [
      "Pin the Tail",
      "Balloon Pop",
      "Treasure Hunt",
      "Face Painting",
      "Dance Party",
      "Piñata Smash",
      "Gift Time",
      "Cake Celebration"
    ]
  },
  rewards: {
    name: "Fun Rewards",
    icon: "🎁",
    description: "Exciting prizes and treats",
    items: [
      "Fun Gift Card",
      "Extra Playtime",
      "Yummy Lunch",
      "Movie Tickets",
      "Book of Fun",
      "Special Treat",
      "Super Star Award",
      "Mystery Surprise"
    ]
  }
};

export default wheelPresets;