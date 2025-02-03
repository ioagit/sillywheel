const wheelPresets = {
  "yes-no-fun": {
    name: "Yes or No Fun",
    emoji: "❓",
    items: [
      "✅ Yes, for sure!",
      "❌ No way!",
      "✅ Yes, please!",
      "❌ No thank you!",
      "🤔 Not sure yet",
      "💫 Try one more time!",
    ],

    title: "Decisions Made Fun with Yes or No",
    content:
      "Explore a playful way to choose between yes and no. Perfect for games and classroom activities, this list sparks fun debate and decision making!",
  },
  "magic-numbers": {
    name: "Magic Numbers",
    description: "Magic numbers for fun and learning",
    emoji: "🔢",
    items: ["1️⃣ One", "2️⃣ Two", "3️⃣ Three", "4️⃣ Four", "5️⃣ Five", "6️⃣ Six"],

    title: "Unlock the Mysteries of Magic Numbers",
    content:
      "Discover how numbers can be enchanting and educational. A magical journey perfect for playful learning and fun math games.",
  },
  "animal-adventures": {
    name: "Cute Animals",
    description: "Cute animals for fun and learning",
    emoji: "🦁",
    items: [
      "🦁 Lion King",
      "🐘 Big Elephant",
      "🦒 Tall Giraffe",
      "🦊 Sneaky Fox",
      "🐼 Panda Bear",
      "🦄 Magical Unicorn",
    ],

    title: "Cute Animals Adventure",
    content:
      "Explore the world of cute animals. Perfect for classroom activities and fun games.",
  },
  "yummy-foodies": {
    name: "Yummy Foods",
    description: "Yummy foods for fun and learning",
    emoji: "🍕",
    items: [
      "🍕 Pizza Party",
      "🍔 Tasty Burger",
      "🌮 Taco Time",
      "🍜 Noodle Fun",
      "🍣 Sushi Surprise",
      "🥗 Healthy Salad",
    ],

    title: "Yummy Foods Adventure",
    content:
      "Explore the world of yummy foods. Perfect for classroom activities and fun games.",
  },
  "action-adventures": {
    name: "Fun Activities",
    description: "Fun activities for fun and learning",
    emoji: "🎮",
    items: [
      "🎮 Video Games",
      "🎨 Arts & Crafts",
      "📚 Story Time",
      "🎵 Sing-Along",
      "🎬 Movie Time",
      "🏃 Outdoor Play",
    ],

    title: "Fun Activities Adventure",
    content:
      "Explore the world of fun activities. Perfect for classroom activities and fun games.",
  },
  "custom-fun": {
    name: "My Fun List",
    description: "Custom fun list for fun and learning",
    emoji: "✨",
    items: [
      "🎮 Game On",
      "🎨 Little Artist",
      "🎵 Music Maker",
      "🎪 Star Performer",
      "⭐ Shining Star",
      "🎯 Champion",
    ],

    title: "Your Custom Fun Adventure",
    content:
      "Craft your very own list of fun activities tailored to your imagination. Get inspired and share your creative ideas with friends!",
  },
  "silly-giggles": {
    name: "Silly Giggles",
    description: "Silly giggles for fun and learning",
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
      "🎆 Sparkle Surprise",
    ],

    title: "Silly Giggles Adventure",
    content:
      "Explore the world of silly giggles. Perfect for classroom activities and fun games.",
  },
  "fun-teams": {
    name: "Classroom Teams",
    emoji: "👥",
    description: "Fun team names for school projects",
    items: [
      "Red Rockets",
      "Blue Stars",
      "Green Gators",
      "Yellow Tigers",
      "Purple Pals",
      "Orange Owls",
      "Black Panthers",
      "White Wolves",
    ],

    title: "Classroom Teams Adventure",
    content:
      "Explore the world of classroom teams. Perfect for classroom activities and fun games.",
  },
  "classroom-helpers": {
    name: "Classroom Helpers",
    emoji: "📚",
    description: "Roles and fun duties in the classroom",
    items: [
      "Line Leader",
      "Door Holder",
      "Board Cleaner",
      "Paper Passer",
      "Calendar Helper",
      "Attendance Buddy",
      "Light Monitor",
      "Plant Waterer",
    ],
  },
  "family-fun": {
    name: "Family Fun Chores",
    emoji: "🏠",
    description: "Simple chores for family time",
    items: [
      "Help with Dishes",
      "Laundry Assistant",
      "Vacuuming Fun",
      "Dusting Duty",
      "Trash Helper",
      "Bed Maker",
      "Pet Walker",
      "Plant Watering",
    ],

    title: "Family Fun Chores Adventure",
    content:
      "Explore the world of family fun chores. Perfect for classroom activities and fun games.",
  },
  "school-games": {
    name: "School Games",
    emoji: "🎲",
    description: "Classic and modern fun games",
    items: [
      "Charades",
      "Drawing Game",
      "Truth or Fun",
      "Musical Chairs",
      "Simon Says",
      "Scavenger Hunt",
      "Trivia Time",
      "Twenty Questions",
    ],

    title: "School Games Adventure",
    content:
      "Explore the world of school games. Perfect for classroom activities and fun games.",
  },
  "play-time-sports": {
    name: "Play Time Sports",
    emoji: "⚽",
    description: "Fun sports activities for everyone",
    items: [
      "Soccer",
      "Basketball",
      "Tennis",
      "Volleyball",
      "Baseball",
      "Swimming",
      "Running",
      "Cycling",
    ],

    title: "Play Time Sports Adventure",
    content:
      "Explore the world of play time sports. Perfect for classroom activities and fun games.",
  },
  "cartoon-movies": {
    name: "Cartoon Movies",
    emoji: "🎬",
    description: "Favorite cartoons and kids movies",
    items: [
      "Action Adventures",
      "Funny Tales",
      "Heartwarming Stories",
      "Spooky Fun",
      "Space Adventures",
      "Love Stories",
      "Nature Wonders",
      "Animated Dreams",
    ],

    title: "Cartoon Movies Adventure",
    content:
      "Explore the world of cartoon movies. Perfect for classroom activities and fun games.",
  },
  "classroom-jobs": {
    name: "Classroom Jobs",
    emoji: "💼",
    description: "Simple classroom tasks for students",
    items: [
      "Note Sharing",
      "Homework Helper",
      "Organizing Books",
      "Filing Papers",
      "Phone Greetings",
      "Schedule Reminder",
      "Book Research",
      "Presentation Prep",
    ],

    title: "Classroom Jobs Adventure",
    content:
      "Explore the world of classroom jobs. Perfect for classroom activities and fun games.",
  },
  "team-roles-fun": {
    name: "Team Roles",
    emoji: "🗣️",
    description: "Fun roles during group work",
    items: [
      "Leader",
      "Timer",
      "Note Taker",
      "Presenter",
      "Tech Buddy",
      "Question Checker",
      "Task Tracker",
      "Follow-up Helper",
    ],

    title: "Team Roles Adventure",
    content:
      "Explore the world of team roles. Perfect for classroom activities and fun games.",
  },
  "classroom-projects": {
    name: "Classroom Projects",
    emoji: "📋",
    description: "Fun activities for classroom projects",
    items: [
      "Planning Time",
      "Research Fun",
      "Creative Design",
      "Building Tasks",
      "Testing Ideas",
      "Writing Notes",
      "Review Time",
      "Showcase",
    ],

    title: "Classroom Projects Adventure",
    content:
      "Explore the world of classroom projects. Perfect for classroom activities and fun games.",
  },
  "happy-holidays": {
    name: "Happy Holidays",
    emoji: "🎄",
    description: "Fun celebrations and holidays",
    items: [
      "New Year's Party",
      "Valentine's Fun",
      "Easter Egg Hunt",
      "Halloween Spook",
      "Thanksgiving Feast",
      "Christmas Joy",
      "Independence Fest",
      "Labor Day Fun",
    ],

    title: "Happy Holidays Adventure",
    content:
      "Explore the world of happy holidays. Perfect for classroom activities and fun games.",
  },
  "birthday-party": {
    name: "Birthday Party",
    emoji: "🎂",
    description: "Exciting activities for birthday celebrations",
    items: [
      "Pin the Tail",
      "Balloon Pop",
      "Treasure Hunt",
      "Face Painting",
      "Dance Party",
      "Piñata Smash",
      "Gift Time",
      "Cake Celebration",
    ],

    title: "Birthday Party Adventure",
    content:
      "Explore the world of birthday party. Perfect for classroom activities and fun games.",
  },
  "fun-rewards": {
    name: "Fun Rewards",
    emoji: "🎁",
    description: "Exciting prizes and treats",
    items: [
      "Fun Gift Card",
      "Extra Playtime",
      "Yummy Lunch",
      "Movie Tickets",
      "Book of Fun",
      "Special Treat",
      "Super Star Award",
      "Mystery Surprise",
    ],

    title: "Fun Rewards Adventure",
    content:
      "Explore the world of fun rewards. Perfect for classroom activities and fun games.",
  },
};

export default wheelPresets;
