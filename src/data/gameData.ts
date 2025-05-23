import type { GameResource } from "../types/games";

// Sample game resources data
export const GAME_RESOURCES: GameResource[] = [
  {
    id: "clash-of-clans",
    title: "Clash of Clans",
    category: "strategy",
    description: "Build your village, train troops, and battle with millions of players online! Raise a clan and compete in epic Clan Wars against players around the world.",
    image: "/images/games/clash-of-clans/clash-of-clans-2.jpg",
    rating: 4.7,
    unlocks: 42570,
    featured: true,
    new: true,
    developer: "Supercell",
    publishYear: 2012,
    version: "15.547.8",
    size: "286MB",
    platforms: ["Android", "iOS"],
    ageRating: "9+",
    features: [
      "Build and defend your village",
      "Train different types of troops with unique abilities",
      "Join a Clan and participate in Clan Wars",
      "Fight against the Goblin King in a single-player campaign",
      "Forge alliances and establish diplomatic ties with other players",
      "Regular content updates with new features, troops, and buildings"
    ],
    requirements: "Android 5.0 or higher, iOS 12.0 or later with at least 1GB RAM",
    storeLink: "https://supercell.com/en/games/clashofclans/",
    downloadLink: "https://dl.game/clash-of-clans.apk",
    screenshots: [
      "/images/games/clash-of-clans/clash-of-clans-2.jpg",
      "/images/games/clash-of-clans/clash-of-clans-1.jpg",
      "/images/games/clash-of-clans/clash-of-clans-3.jpg",
      "/images/games/clash-of-clans/clash-of-clans-4.jpg",
      "/images/games/clash-of-clans/clash-of-clans-5.jpg",
      "/images/games/clash-of-clans/clash-of-clans-6.jpg",
      "/images/games/clash-of-clans/clash-of-clans-7.jpg",
      "/images/games/clash-of-clans/clash-of-clans-8.jpg",
      "/images/games/clash-of-clans/clash-of-clans-9.jpg",
      "/images/games/clash-of-clans/clash-of-clans-10.jpg",
      "/images/games/clash-of-clans/clash-of-clans-11.jpg"
    ]
  },
  {
    id: "free-fire",
    title: "Free Fire MAX",
    category: "shooter",
    description: "Engage in intense battle royale combat with enhanced graphics and gameplay. Survive as one of 50 players in a 10-minute match on a remote island.",
    image: "/images/games/free-fire/free-fire-3.jpg",
    rating: 4.6,
    unlocks: 35820,
    featured: true,
    new: true,
    developer: "Garena",
    publishYear: 2021,
    version: "2.104.1",
    size: "1.2GB",
    platforms: ["Android", "iOS"],
    ageRating: "16+",
    features: [
      "Enhanced graphics and visual effects",
      "Battle royale gameplay with up to 50 players",
      "Squad-based (4-player teams) combat",
      "Wide variety of weapons and vehicles",
      "Character customization with special abilities",
      "Regular esports tournaments",
      "In-game voice chat"
    ],
    requirements: "Android 4.1 or higher, iOS 11.0 or later with at least 2GB RAM",
    storeLink: "https://ff.garena.com/",
    downloadLink: "https://dl.game/free-fire.apk",
    screenshots: [
      "/images/games/free-fire/free-fire-3.jpg",
      "/images/games/free-fire/free-fire-4.jpg",
      "/images/games/free-fire/free-fire-5.jpg",
      "/images/games/free-fire/free-fire-6.jpg",
      "/images/games/free-fire/free-fire-7.jpg",
      "/images/games/free-fire/free-fire-8.jpg"
    ]
  },
  {
    id: "clash-royale",
    title: "Clash Royale",
    category: "strategy",
    description: "Build your ultimate deck and duel players from around the world in fast-paced real-time strategy battles.",
    image: "/images/games/clash-royale-updated/clash-royale-main.jpg",
    rating: 4.8,
    unlocks: 24650,
    featured: true,
    developer: "Supercell",
    publishYear: 2016,
    version: "3.3.2",
    size: "150MB",
    platforms: ["Android", "iOS"],
    ageRating: "9+",
    features: [
      "Real-time multiplayer battles",
      "Collect and upgrade dozens of cards",
      "Build and upgrade your card collection",
      "Construct your ultimate Battle Deck",
      "Form a Clan to share cards and build your community",
      "Challenge Clanmates and friends to private duels"
    ],
    requirements: "Android 4.1 or higher, iOS 11.0 or later",
    storeLink: "https://supercell.com/en/games/clashroyale/",
    downloadLink: "https://dl.game/clash-royale.apk",
    screenshots: [
      "/images/games/clash-royale-updated/clash-royale-main.jpg",
      "/images/games/clash-royale-updated/clash-royale-1.jpg",
      "/images/games/clash-royale-updated/clash-royale-3.jpg",
      "/images/games/clash-royale-updated/clash-royale-4.jpg",
      "/images/games/clash-royale-updated/clash-royale-5.jpg",
      "/images/games/clash-royale-updated/clash-royale-6.jpg",
      "/images/games/clash-royale-updated/clash-royale-7.jpg",
      "/images/games/clash-royale-updated/clash-royale-8.jpg",
      "/images/games/clash-royale-updated/clash-royale-9.jpg",
      "/images/games/clash-royale-updated/clash-royale-10.jpg",
      "/images/games/clash-royale-updated/clash-royale-11.jpg",
      "/images/games/clash-royale-updated/clash-royale-12.jpg",
      "/images/games/clash-royale-updated/clash-royale-13.jpg",
      "/images/games/clash-royale-updated/clash-royale-14.jpg",
      "/images/games/clash-royale-updated/clash-royale-15.jpg",
      "/images/games/clash-royale-updated/clash-royale-16.jpg"
    ]
  },
  {
    id: "candy-crush",
    title: "Candy Crush Saga",
    category: "puzzle",
    description: "Match candies in this tasty puzzle adventure. With thousands of levels, sweet challenges await you in this delightful game.",
    image: "/images/games/candy-crush-updated/candy-crush-2.jpg",
    rating: 4.5,
    unlocks: 18320,
    developer: "King",
    publishYear: 2012,
    version: "1.231.0",
    size: "98MB",
    platforms: ["Android", "iOS", "Windows"],
    ageRating: "E for Everyone",
    features: [
      "Thousands of levels and challenging game modes",
      "Tasty candy graphics that will leave you hungry for more",
      "Easy and fun to play, challenging to master",
      "Rewards, boosters, and hundreds of sweet levels",
      "Leaderboards to watch your friends and competitors"
    ],
    requirements: "Android 5.0 or higher, iOS 12.0 or later",
    storeLink: "https://king.com/game/candycrush",
    downloadLink: "https://dl.game/candy-crush.apk",
    screenshots: [
      "/images/games/candy-crush-updated/candy-crush-2.jpg",
      "/images/games/candy-crush-updated/candy-crush-1.jpg",
      "/images/games/candy-crush-updated/candy-crush-3.jpg",
      "/images/games/candy-crush-updated/candy-crush-4.jpg",
      "/images/games/candy-crush-updated/candy-crush-5.jpg",
      "/images/games/candy-crush-updated/candy-crush-6.jpg",
      "/images/games/candy-crush-updated/candy-crush-7.jpg",
      "/images/games/candy-crush-updated/candy-crush-8.jpg",
      "/images/games/candy-crush-updated/candy-crush-9.jpg",
      "/images/games/candy-crush-updated/candy-crush-10.jpg",
      "/images/games/candy-crush-updated/candy-crush-11.jpg",
      "/images/games/candy-crush-updated/candy-crush-12.jpg",
      "/images/games/candy-crush-updated/candy-crush-13.jpg",
      "/images/games/candy-crush-updated/candy-crush-14.jpg"
    ]
  },
  {
    id: "pubg-mobile",
    title: "PUBG Mobile",
    category: "shooter",
    description: "Drop into intense battle royale combat with 100 players fighting to be the last one standing. Survive, loot, and conquer.",
    image: "/images/games/pubg-mobile-updated/pubg-mobile-main.jpg",
    rating: 4.7,
    unlocks: 31540,
    developer: "Tencent Games",
    publishYear: 2018,
    version: "2.5.0",
    size: "1.5GB",
    platforms: ["Android", "iOS"],
    ageRating: "16+",
    features: [
      "HD graphics and realistic gameplay",
      "Massive battle maps with various terrain and weather",
      "Form squads of up to 4 players",
      "Voice chat with teammates",
      "Extensive arsenal of weapons and vehicles",
      "Regular content updates with new maps and modes"
    ],
    requirements: "Android 5.1.1 or above with at least 2GB RAM, iOS 11.0 or later",
    storeLink: "https://www.pubgmobile.com",
    downloadLink: "https://dl.game/pubg-mobile.apk",
    screenshots: [
      "/images/games/pubg-mobile-updated/pubg-mobile-main.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-1.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-2.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-3.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-4.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-5.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-6.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-7.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-8.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-9.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-10.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-11.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-12.jpeg",
      "/images/games/pubg-mobile-updated/pubg-mobile-13.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-14.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-15.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-16.jpeg",
      "/images/games/pubg-mobile-updated/pubg-mobile-17.jpg",
      "/images/games/pubg-mobile-updated/pubg-mobile-18.jpg"
    ]
  },
  {
    id: "pokemon-go",
    title: "Pokemon GO",
    category: "adventure",
    description: "Explore the real world to catch Pokémon and battle at gyms. Adventure awaits as you discover Pokémon around you.",
    image: "/images/games/pokemon-go.jpg",
    rating: 4.6,
    unlocks: 15980,
    new: true,
    developer: "Niantic, Inc",
    publishYear: 2016,
    version: "0.251.0",
    size: "205MB",
    platforms: ["Android", "iOS"],
    ageRating: "9+",
    features: [
      "Augmented reality gameplay",
      "Real-world exploration",
      "Catch and collect hundreds of Pokémon species",
      "Battle at Gyms and Raid Bosses",
      "Trade Pokémon with friends",
      "Community events and special challenges",
      "Team competitions"
    ],
    requirements: "Android 7.0 or higher, iOS 14.0 or later. GPS and internet required.",
    storeLink: "https://pokemongolive.com",
    downloadLink: "https://dl.game/pokemon-go.apk",
    screenshots: [
      "/images/games/screenshots/pokemon-go-1.jpg",
      "/images/games/screenshots/pokemon-go-2.jpg",
      "/images/games/screenshots/pokemon-go-3.jpg"
    ]
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    category: "runner",
    description: "Dash through the subway and dodge oncoming trains. Run as far as you can in this endless runner game with colorful HD graphics.",
    image: "/images/games/subway-surfers-updated/subway-surfers-2.jpg",
    rating: 4.4,
    unlocks: 29460,
    developer: "SYBO Games",
    publishYear: 2012,
    version: "3.1.0",
    size: "82MB",
    platforms: ["Android", "iOS"],
    ageRating: "9+",
    features: [
      "Colorful and HD graphics",
      "Jetpack-powered gameplay",
      "Paint-powered hoverboard",
      "Lightning fast swipe acrobatics",
      "Challenge and help your friends",
      "Regular updates with new content",
      "Weekly Hunt events"
    ],
    requirements: "Android 5.0 or above, iOS 12.0 or later",
    storeLink: "https://www.sybo.com/subway-surfers/",
    downloadLink: "https://dl.game/subway-surfers.apk",
    screenshots: [
      "/images/games/subway-surfers-updated/subway-surfers-2.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-1.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-3.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-4.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-5.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-6.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-7.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-8.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-9.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-10.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-11.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-12.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-13.jpg",
      "/images/games/subway-surfers-updated/subway-surfers-14.jpg"
    ]
  },
  {
    id: "genshin-impact",
    title: "Genshin Impact",
    category: "rpg",
    description: "Embark on a journey across Teyvat to find your lost sibling in this open-world action RPG. Explore seven nations, each with unique elements.",
    image: "/images/games/genshin-impact.jpg",
    rating: 4.9,
    unlocks: 22180,
    featured: true,
    developer: "miHoYo",
    publishYear: 2020,
    version: "4.2.0",
    size: "15GB",
    platforms: ["Android", "iOS", "PC", "PlayStation"],
    ageRating: "12+",
    features: [
      "Vast open world to explore",
      "Element-based combat system",
      "Multiple playable characters with unique abilities",
      "Co-op play with friends",
      "Beautiful anime-inspired graphics",
      "Regular updates with new areas and events",
      "Deep story with voice acting"
    ],
    requirements: "Android 8.0 or higher with at least 4GB RAM, iOS 14.0 or later",
    storeLink: "https://genshin.hoyoverse.com",
    downloadLink: "https://dl.game/genshin-impact.apk",
    screenshots: [
      "/images/games/screenshots/genshin-impact-1.jpg",
      "/images/games/screenshots/genshin-impact-2.jpg",
      "/images/games/screenshots/genshin-impact-3.jpg"
    ]
  },
  {
    id: "roblox",
    title: "Roblox",
    category: "sandbox",
    description: "Join millions of players in creating and sharing immersive 3D experiences. Imagine, create, and play together in user-generated worlds.",
    image: "/images/games/roblox.jpg",
    rating: 4.5,
    unlocks: 27630,
    developer: "Roblox Corporation",
    publishYear: 2006,
    version: "2.573.524",
    size: "125MB (base app)",
    platforms: ["Android", "iOS", "Windows", "Xbox", "macOS"],
    ageRating: "9+",
    features: [
      "Millions of user-created games to play",
      "Create your own games with Roblox Studio",
      "Customize your avatar with thousands of items",
      "Play with friends across multiple devices",
      "In-game chat and messaging",
      "Virtual economy with Robux currency"
    ],
    requirements: "Android 5.0 or above, iOS 12.0 or later",
    storeLink: "https://www.roblox.com",
    downloadLink: "https://dl.game/roblox.apk",
    screenshots: [
      "/images/games/screenshots/roblox-1.jpg",
      "/images/games/screenshots/roblox-2.jpg",
      "/images/games/screenshots/roblox-3.jpg"
    ]
  },
  {
    id: "among-us",
    title: "Among Us",
    category: "social",
    description: "Work together on a spaceship, but beware of impostors! Complete tasks before the impostors eliminate the crew in this multiplayer party game.",
    image: "/images/games/among-us.jpg",
    rating: 4.3,
    unlocks: 12750,
    new: true,
    developer: "InnerSloth",
    publishYear: 2018,
    version: "2023.7.12",
    size: "157MB",
    platforms: ["Android", "iOS", "PC", "Switch", "Xbox", "PlayStation"],
    ageRating: "9+",
    features: [
      "Online multiplayer for 4-15 players",
      "Cross-platform play",
      "Multiple maps with different layouts",
      "Customizable characters",
      "Various tasks and mini-games",
      "Voice chat integration",
      "Free-to-play with optional cosmetics"
    ],
    requirements: "Android 5.0 or higher, iOS 13.0 or later",
    storeLink: "https://www.innersloth.com/games/among-us/",
    downloadLink: "https://dl.game/among-us.apk",
    screenshots: [
      "/images/games/screenshots/among-us-1.jpg",
      "/images/games/screenshots/among-us-2.jpg",
      "/images/games/screenshots/among-us-3.jpg"
    ]
  },
  {
    id: "minecraft",
    title: "Minecraft",
    category: "sandbox",
    description: "Build, explore, survive! Create your own world in this block-building game where the only limit is your imagination.",
    image: "/images/games/minecraft-updated/minecraft-main.jpg",
    rating: 4.8,
    unlocks: 19840,
    developer: "Mojang Studios",
    publishYear: 2011,
    version: "1.20.30",
    size: "800MB",
    platforms: ["Android", "iOS", "Windows", "macOS", "Linux", "PlayStation", "Xbox", "Switch"],
    ageRating: "7+",
    features: [
      "Infinite worlds to explore",
      "Survival and creative gameplay modes",
      "Multiplayer servers and realms",
      "Thousands of items and blocks to discover",
      "Redstone circuits for automation",
      "Regular updates with new content",
      "Cross-platform play between mobile and console"
    ],
    requirements: "Android 5.0 or above, iOS 12.0 or later",
    storeLink: "https://www.minecraft.net/",
    downloadLink: "https://dl.game/minecraft.apk",
    screenshots: [
      "/images/games/minecraft-updated/minecraft-main.jpg",
      "/images/games/minecraft-updated/minecraft-1.jpg",
      "/images/games/minecraft-updated/minecraft-2.jpg",
      "/images/games/minecraft-updated/minecraft-4.jpg",
      "/images/games/minecraft-updated/minecraft-5.jpg",
      "/images/games/minecraft-updated/minecraft-6.jpg",
      "/images/games/minecraft-updated/minecraft-7.jpg",
      "/images/games/minecraft-updated/minecraft-8.jpg",
      "/images/games/minecraft-updated/minecraft-9.jpg",
      "/images/games/minecraft-updated/minecraft-10.jpg",
      "/images/games/minecraft-updated/minecraft-11.jpg",
      "/images/games/minecraft-updated/minecraft-12.jpg",
      "/images/games/minecraft-updated/minecraft-13.jpg",
      "/images/games/minecraft-updated/minecraft-14.jpg"
    ]
  },
  {
    id: "baseball-9",
    title: "Baseball 9",
    category: "sports",
    description: "Experience realistic baseball gameplay with easy controls. Build and train your dream team, compete in leagues, and become a baseball champion!",
    image: "/images/games/baseball-9/baseball-9-2.jpg",
    rating: 4.7,
    unlocks: 14520,
    featured: true,
    new: true,
    developer: "Playus Soft",
    publishYear: 2019,
    version: "1.8.5",
    size: "94MB",
    platforms: ["Android", "iOS"],
    ageRating: "4+",
    features: [
      "Simple controls with realistic gameplay",
      "Create and customize your own baseball team",
      "Multiple leagues and tournaments to compete in",
      "Train and level up your players with unique skills",
      "Upgrade equipment and facilities",
      "Seasonal events and challenges",
      "Offline play supported"
    ],
    requirements: "Android 5.0 or higher, iOS 11.0 or later",
    storeLink: "https://play.google.com/store/apps/details?id=com.playus.baseball9",
    downloadLink: "https://dl.game/baseball-9.apk",
    screenshots: [
      "/images/games/baseball-9/baseball-9-2.jpg",
      "/images/games/baseball-9/baseball-9-1.jpg",
      "/images/games/baseball-9/baseball-9-3.jpg",
      "/images/games/baseball-9/baseball-9-4.jpg",
      "/images/games/baseball-9/baseball-9-5.jpg",
      "/images/games/baseball-9/baseball-9-6.jpg",
      "/images/games/baseball-9/baseball-9-7.jpg",
      "/images/games/baseball-9/baseball-9-8.jpg",
      "/images/games/baseball-9/baseball-9-9.jpg",
      "/images/games/baseball-9/baseball-9-10.jpg",
      "/images/games/baseball-9/baseball-9-11.jpg",
      "/images/games/baseball-9/baseball-9-12.jpg",
      "/images/games/baseball-9/baseball-9-13.jpg",
      "/images/games/baseball-9/baseball-9-14.jpg",
      "/images/games/baseball-9/baseball-9-15.jpg",
      "/images/games/baseball-9/baseball-9-16.jpg"
    ]
  }
];
