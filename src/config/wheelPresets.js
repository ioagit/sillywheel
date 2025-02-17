const wheelPresets = {
  "excuse-generator": {
    name: "Excuse Generator",
    emoji: "🤥",
    items: [
      "🦄 Got Magiced",
      "👻 Ghost Did It",
      "🌪️ Time Vortex",
      "🦖 Dino Attack",
      "🛸 Alien Abduct",
      "🧙‍♂️ Am Potato Now",
      "🌈 Rainbow Hunt",
      "🦩 Bird Party",
    ],
    title:
      "The Silly Picker Wheel of Professional Excuses | Creative Late Excuses Generator",
    content:
      "Need a creative way to explain why you're late? Our Silly Picker Wheel of Excuses generates hilarious and totally unbelievable excuses! Perfect for lightening the mood and adding humor to those awkward late arrival moments. Disclaimer: Use these excuses at your own risk - results may vary, and we can't guarantee your boss will believe the 'time vortex' excuse!",
  },
  "random-chaos": {
    name: "Chaos Picker",
    emoji: "🎲",
    items: [
      "🕺 Dance Now!",
      "🎭 Fake Accent",
      "🦒 Be Giraffe",
      "🎪 Do Magic",
      "🎨 Paint Face",
      "🎯 High Five",
      "🤹 Juggle This",
      "🎪 Act Silly",
    ],
    title: "The Silly Picker Wheel of Random Chaos | Fun Party Game Generator",
    content:
      "Transform any gathering into an unforgettable experience with our Silly Picker Wheel of Random Chaos! Perfect for parties, team building, or just adding spontaneous fun to your day. Each spin brings a new challenge that's guaranteed to create laughter and memorable moments. Great for ice-breakers, party games, and turning boring meetings into adventures!",
  },
  "food-crimes": {
    name: "Food Crimes",
    emoji: "🍽️",
    items: [
      "🌭 Cold Hotdog",
      "🍕 Pineapple++",
      "🥪 Fish + Ice",
      "🧃 Mayo Coffee",
      "🥤 Soup Shake",
      "🍝 Raw Spaghet",
      "🥪 Banana Sand",
      "🥛 Spicy Milk",
    ],
    title:
      "The Silly Picker Wheel of Food Crimes | Bizarre Food Combinations Generator",
    content:
      "Dare to explore the world's most questionable food combinations with our Silly Picker Wheel of Food Crimes! Perfect for adventurous eaters, party challenges, or just shocking your friends. These combinations might be illegal in some countries (and probably should be in all of them). Warning: Some food combinations may cause raised eyebrows, shocked expressions, and uncontrollable laughter!",
  },
  "pet-thoughts": {
    name: "Pet Thoughts",
    emoji: "🐾",
    items: [
      "😼 Evil Plans",
      "🐕 Want Snacks",
      "🐹 Need Gold",
      "🐱 Plot Revenge",
      "🦜 Write Book",
      "🐠 Start Band",
      "🐢 Run Race",
      "🦎 Learn Math",
    ],
    title:
      "The Silly Picker Wheel of Pet Thoughts | Funny Pet Mind Reader Game",
    content:
      "Ever wondered what's going on in your pet's mind? Our Silly Picker Wheel of Pet Thoughts reveals the hilarious secret life of pets! Perfect for pet lovers, veterinary waiting rooms, or amusing animal-themed parties. These whimsical pet thoughts will have you looking at your furry friends in a whole new way. Warning: May cause excessive giggling and pet conspiracy theories!",
  },
  "bad-ideas": {
    name: "Bad Ideas",
    emoji: "💡",
    items: [
      "🎪 Poke Bear",
      "🌶️ Ghost Pepper",
      "💇 Cut Own Hair",
      "🧪 Mix Drinks",
      "📱 Text Ex",
      "🛹 Do Flip",
      "🎰 All In",
      "🎭 Tell Truth",
    ],
    title: "The Silly Picker Wheel of Bad Ideas | Humorous Decision Generator",
    content:
      "Welcome to the Silly Picker Wheel of Bad Ideas, where common sense comes to die! Perfect for comedy nights, party games, or when you need a reminder of what NOT to do. Each spin brings a hilariously terrible suggestion that's guaranteed to make you question life choices. Remember: These are meant to be jokes - please don't actually try these at home!",
  },
  "office-chaos": {
    name: "Office Chaos",
    emoji: "🏢",
    items: [
      "📎 Hide Clips",
      "💼 Desk Fort",
      "🖨️ Spam Print",
      "☕ Salt Coffee",
      "🪑 Swap Chairs",
      "📱 Duck Noise",
      "🖥️ Flip Screen",
      "📊 Comic Sans",
    ],
    title: "The Silly Picker Wheel of Office Pranks | Workplace Fun Generator",
    content:
      "Bring some controlled chaos to your workplace with the Silly Picker Wheel of Office Pranks! Perfect for April Fools' Day, office parties, or brightening up the mundane workday. These harmless office shenanigans will add a dash of fun to your workplace while keeping things professional(ish). Note: Best used in offices with a good sense of humor - results may vary in more serious environments!",
  },
  "weird-sports": {
    name: "Weird Sports",
    emoji: "🎯",
    items: [
      "🧦 Sock Slide",
      "🛁 Tub Racing",
      "🪑 Chair Spin",
      "🧊 Ice Boxing",
      "📦 Box Jump",
      "🎈 Balloon War",
      "🧘 Speed Yoga",
      "🎪 Desk Rodeo",
    ],
    title:
      "The Silly Picker Wheel of Weird Sports | Funny Sports Activities Generator",
    content:
      "Dive into a world of hilarious and unconventional sports with our Silly Picker Wheel! Perfect for party games, indoor recess, or adding excitement to physical education. These wacky sports alternatives will get everyone moving and laughing. Great for team building, ice breakers, and creating unforgettable moments of fun exercise!",
  },
  "monday-mood": {
    name: "Monday Moods",
    emoji: "😴",
    items: [
      "😴 Need Coffee",
      "💤 Still Sleep",
      "🙃 Send Help",
      "🧟 Zombie Mode",
      "😫 Why Today",
      "🥱 5 More Min",
      "😶 No Talk",
      "🫠 Melting",
    ],
    title:
      "The Silly Picker Wheel of Monday Moods | Funny Start-of-Week Mood Generator",
    content:
      "Turn Monday blues into Monday muse with our Silly Picker Wheel of Moods! Perfect for office ice-breakers, classroom morning routines, or just adding humor to the start of your week. These relatable Monday states will have everyone nodding in agreement and laughing together. Great for social media posts, team meetings, or anyone needing a mood lift!",
  },
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

    title:
      "The Silly Picker Wheel of Yes or No | Fun Decision Making Generator",
    content:
      "Make decisions more fun with our Silly Picker Wheel of Yes or No answers! Perfect for classroom activities, party games, or any situation where you need a playful way to make choices. This entertaining decision-maker adds excitement to simple yes/no questions while encouraging participation and discussion. Great for teaching probability, decision-making skills, and adding an element of chance to any activity!",
  },
  "magic-numbers": {
    name: "Magic Numbers",
    description: "Magic numbers for fun and learning",
    emoji: "🔢",
    items: ["1️⃣ One", "2️⃣ Two", "3️⃣ Three", "4️⃣ Four", "5️⃣ Five", "6️⃣ Six"],

    title:
      "The Silly Picker Wheel of Magic Numbers | Fun Math Learning Generator",
    content:
      "Transform number learning into magical fun with our Silly Picker Wheel of Magic Numbers! Perfect for elementary education, math games, and making numbers exciting for young learners. Each spin brings a new number adventure, helping children develop number recognition and counting skills while having fun. Ideal for teachers, parents, and anyone looking to make math more engaging!",
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

    title:
      "The Silly Picker Wheel of Animal Adventures | Fun Animal Learning Generator",
    content:
      "Embark on wild adventures with our Silly Picker Wheel of Cute Animals! Perfect for early learning, story time, and animal-themed activities. Each spin introduces children to different animals in a fun and engaging way, sparking imagination and fostering love for wildlife. Great for educators, parents, and animal enthusiasts looking to make learning about animals more interactive and enjoyable!",
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

    title:
      "The Silly Picker Wheel of Yummy Foods | Fun Food Discovery Generator",
    content:
      "Explore delicious adventures with our Silly Picker Wheel of Yummy Foods! Perfect for meal planning, cooking classes, and food education. Each spin introduces exciting food choices that make eating fun and encourage trying new things. Great for picky eaters, family dinner decisions, and teaching about different food groups in an entertaining way!",
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

    title:
      "The Silly Picker Wheel of Fun Activities | Interactive Entertainment Generator",
    content:
      "Discover exciting new ways to have fun with our Silly Picker Wheel of Activities! Perfect for family game nights, classroom breaks, or any time you need inspiration for entertainment. Each spin suggests an engaging activity that brings people together and creates memorable moments. Ideal for parents, teachers, and anyone looking to add variety to their daily routine!",
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
    title:
      "The Silly Picker Wheel of Custom Activities | Personal Fun List Generator",
    content:
      "Create your own magical collection of activities with our Silly Picker Wheel Custom List maker! Perfect for personalizing your experience, creating themed activities, or designing your own unique challenges. This customizable wheel lets you build the perfect list for any occasion. Great for teachers creating lesson plans, party planners organizing events, or anyone wanting to add their personal touch to the fun!",
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
    title: "The Silly Picker Wheel of Giggles | Funny Sound Effects Generator",
    content:
      "Get ready for endless laughter with our Silly Picker Wheel of Giggles! Perfect for kids' parties, classroom fun breaks, or anywhere you need some comic relief. Each spin delivers a hilarious sound effect that will have everyone laughing. Great for ice-breakers, party games, and creating memorable silly moments. Warning: May cause uncontrollable fits of giggles!",
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

    title: "The Silly Picker Wheel of Team Names | Classroom Team Generator",
    content:
      "Create exciting and memorable team names for your classroom with our Silly Picker Wheel! Perfect for teachers, group activities, and educational games. These fun team names help build team spirit, encourage collaboration, and make learning more engaging. Great for all grade levels, school projects, and educational competitions!",
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
    title:
      "The Silly Picker Wheel of Classroom Helpers | Student Role Generator",
    content:
      "Make classroom management fun with our Silly Picker Wheel of Classroom Helpers! Perfect for fairly assigning classroom responsibilities and creating an organized learning environment. Each spin gives students exciting opportunities to help and learn leadership skills. Ideal for teachers looking to maintain classroom structure while keeping students engaged and excited about helping!",
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
    title:
      "The Silly Picker Wheel of Family Chores | Fun Household Task Generator",
    content:
      "Transform everyday chores into exciting family activities with our Silly Picker Wheel! Perfect for parents looking to make housework more engaging and teaching responsibility in a fun way. Each spin turns mundane tasks into mini-adventures, making cleaning and organizing an enjoyable family experience. Great for establishing routines, teaching life skills, and bringing the family together!",
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
    title:
      "The Silly Picker Wheel of School Games | Educational Fun Activities Generator",
    content:
      "Bring excitement to learning with our Silly Picker Wheel of School Games! Perfect for teachers, after-school programs, and educational events. Each spin suggests an engaging activity that combines fun with learning objectives. Ideal for brain breaks, reward time, or making any lesson more interactive and memorable. Great for all grade levels and subjects!",
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
    title:
      "The Silly Picker Wheel of Sports Activities | Physical Fun Generator",
    content:
      "Get active and have fun with our Silly Picker Wheel of Sports Activities! Perfect for PE classes, recess, or family outdoor time. Each spin suggests an exciting sport that promotes movement, teamwork, and healthy competition. Great for physical education teachers, sports coaches, and parents looking to encourage active play and develop athletic skills!",
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
    title:
      "The Silly Picker Wheel of Cartoon Movies | Family Entertainment Generator",
    content:
      "Discover delightful animated adventures with our Silly Picker Wheel of Cartoon Movies! Perfect for family movie nights, classroom rewards, or kids' parties. Each spin suggests an entertaining cartoon that brings joy and imagination to viewers of all ages. Great for parents, teachers, and anyone looking to find the perfect animated feature for their next viewing!",
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
