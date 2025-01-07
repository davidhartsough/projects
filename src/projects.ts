const projects = [
  {
    id: "minder",
    title: "minder",
    description:
      "Twice daily reminders: for what's worth remembering. Keep your habits, values, skills, etc, fresh in your mind.",
    link: "https://re-minder.netlify.app/",
    github: "https://github.com/davidhartsough/minder-web-app",
  },
  {
    id: "minder",
    title: "Reconnection",
    description:
      "Friendly reminders to reconnect with friends — someone different every day. (Sister project to minder)",
    link: "https://reconnection.netlify.app/",
    github: "https://github.com/davidhartsough/reconnect",
  },
  {
    id: "all-my-favs",
    title: "All My Favs",
    description:
      "Your profile. Your favs. All in one place. Share your lists of your favorites.",
    link: "https://all-my-favs.web.app/",
    github: "https://github.com/davidhartsough/all-my-favs-web-app",
  },
  {
    id: "invite-info",
    title: "Invite Info",
    description: "Simple event pages to easily share invitation information.",
    link: "https://invite-info.web.app/",
    github: "https://github.com/davidhartsough/invite-info",
  },
  {
    id: "monthly-moments",
    title: "Monthly Moments",
    description:
      "The minimal yet meaningful social platform for sharing amazing moments with amazing people — one month at a time.",
    color: "#1471eb",
    link: "https://monthly-moments.web.app/",
    github: "https://github.com/davidhartsough/monthly-moments",
  },
  {
    id: "moments",
    title: "Moments",
    description:
      "Capture and explore the amazing moments, memories, people, places, and activities in your life.",
    color: "#1471eb",
    link: "https://moments-memories.web.app/",
    github: "https://github.com/davidhartsough/moments",
  },
  {
    id: "when-tho",
    title: "when tho",
    description:
      "Scheduling for calls with people across different cities and timezones.",
    link: "https://when-tho.web.app/",
    github: "https://github.com/davidhartsough/when-tho",
  },
  {
    id: "call-me-up",
    title: "Call Me Up",
    description:
      "Instant 1:1 audio calls for now or later — as simple as an old phone.",
    link: "https://call-me-up.web.app/",
    github: "https://github.com/davidhartsough/call",
  },
  {
    id: "correla",
    title: "Correla",
    description:
      "Connecting people through correlation and conversation. Explore the directory, discover amazing people, and make new connections.",
    color: "#198bed",
    link: "https://correla.vercel.app/",
    github: "https://github.com/davidhartsough/correla-next",
  },
  {
    id: "read",
    title: "Let Me Read",
    description:
      "Strip any webpage down to nothing but its text for easy readability.",
    link: "https://chrome.google.com/webstore/detail/let-me-read/bjbmfhoongjfogbbdniakknanfdgajda",
    github: "https://github.com/davidhartsough/read-browser-extension",
  },
  {
    id: "simi-yt",
    title: "SiMi YT",
    description:
      "A Chrome extension for a more simplistic/minimalistic YouTube: stripping the app down to its bare minimum essentials.",
    link: "https://chromewebstore.google.com/detail/simi-yt/cdhgaakafmlmidiojeakgbmilmhghahe",
    github: "https://github.com/davidhartsough/simi-yt-ext",
  },
  {
    id: "simi-ig",
    title: "SiMi IG",
    description:
      "A Chrome extension for a more simplistic/minimalistic Instagram: stripping the app down to its bare minimum essentials.",
    link: "https://chromewebstore.google.com/detail/simi-ig/odfakbjpnmjpjmacamemnmkdmciepogi",
    github: "https://github.com/davidhartsough/simi-ig-ext",
  },
  {
    id: "simi-fb",
    title: "SiMi FB",
    description:
      "A Chrome extension for a more simplistic/minimalistic Facebook: stripping the app down to its bare minimum essentials.",
    link: "https://chromewebstore.google.com/detail/simi-fb/khlglnlobabeajodhgheklleopbiajfe",
    github: "https://github.com/davidhartsough/simi-fb-ext",
  },
  {
    id: "rn-simi-comps",
    title: "React Native SiMi Comps",
    description:
      "Simplistic/Minimalistic Components for React Native: my first published package to npm!",
    link: "https://www.npmjs.com/package/react-native-simi-comps",
    github: "https://github.com/davidhartsough/react-native-simi-comps",
  },
  {
    id: "try-axios",
    title: "Try Axios",
    description:
      "Test out sending POST requests with Axios in this handy online tool.",
    link: "https://try-axios.netlify.app/",
    github: "https://github.com/davidhartsough/try-axios",
  },
  {
    id: "gas",
    title: "GAS: for Spotify",
    description:
      "The Genre/Artist Shuffler: Fuel your listening. Explore the universe of music. Discover artists for every genre ever.",
    color: "#1db954",
    link: "https://spotify-gas.vercel.app/",
    github: "https://github.com/davidhartsough/gas",
  },
  {
    id: "spootify",
    title: "Dave's Faves on Spotify",
    description:
      "A somewhat silly site to explore my favorite mixes and shuffle through thousands of my fav artists and albums.",
    link: "https://davidhartsough.com/spotify/",
    github: "https://github.com/davidhartsough/spotify",
  },
  {
    id: "hapidaily",
    title: "HapiDaily",
    description:
      "HapiDaily: have a positive impact daily. Empowering people with ideas on how to make a difference in the lives of others through everyday expressions of love.",
    color: "#1997FF",
    link: "https://app.hapidaily.com/",
    github: "https://github.com/davidhartsough/hapidaily-app",
  },
  {
    id: "lifetime-calculator",
    title: "Lifetime Calculator",
    description:
      "Calculate your lifetime. See your lifespan. Breakdown how much time you'll spend doing daily, weekly, and monthly activities over the course of your entire life.",
    color: "##98ccfd",
    link: "https://davidhartsough.com/lifetime-calculator/",
    github: "https://github.com/davidhartsough/lifetime-calculator",
  },
  {
    id: "wonderful-world",
    title: "Wonderful World",
    description:
      "Get lost in a wave of wanderlust while exploring this wonderful world, one photosphere at a time.",
    color: "#3F51B5",
    link: "https://davidhartsough.com/wonderful-world/",
    github: "https://github.com/davidhartsough/wonderful-world",
  },
  {
    id: "3-a-day",
    title: "3-a-day",
    description:
      "A place to practice positivity by writing down 3 things that went well and why they went well every day.",
    color: "#00BE6A",
    link: "https://davidhartsough.com/3-a-day.co/",
    github: "https://github.com/davidhartsough/3-a-day.co",
  },
  {
    id: "spoonerizer",
    title: "Spoonerizer",
    description:
      "A goofy tool to convert any two words into a spoonerism. (It swaps the corresponding consonants or vowels at the beginnings of both words.)",
    color: "#00BCD4",
    link: "https://davidhartsough.com/spoonerizer/",
    github: "https://github.com/davidhartsough/spoonerizer",
  },
  {
    id: "coin-machine",
    title: "COIN Machine",
    description:
      'The Coin-Operated Inter-Net Machine: an absurd Chrome extension that offers cutting-edge, exclusive "Web Surfing features".',
    color: "#de3133",
    link: "https://chrome.google.com/webstore/detail/coin-machine/konmkbglhickglfceeifbffogcocojbf",
    github: "https://github.com/davidhartsough/COIN-Machine",
  },
  {
    id: "friendly-feed",
    title: "Friendly Feed",
    description:
      "A Chrome extension that cleans up your Facebook feed. No more trending, related, suggested, paid, or sponsored content; just updates from friends.",
    color: "#2d88ff",
    link: "https://chrome.google.com/webstore/detail/friendly-feed/dohehejmmbcfejempphbkcehfhinodem",
    github: "https://github.com/davidhartsough/friendly-feed",
  },
  {
    id: "spot-seeker",
    title: "Spot Seeker",
    description:
      "A social cartography app for Spot Seekers to help each other explore the most beautiful places nearby.",
    color: "#E91E63",
    link: "https://davidhartsough.com/spotseeker.co/",
    github: "https://github.com/davidhartsough/spotseeker.co",
  },
  {
    id: "my-big-bio",
    title: "My Big Bio",
    description:
      "Who are you? Create a full autobiography by simply answering questions. As your bio grows, My Big Bio generates a timeline and map of your life.",
    color: "#46469B",
    link: "https://davidhartsough.com/mybig.bio/",
    github: "https://github.com/davidhartsough/mybig.bio",
  },
  {
    id: "answers-from-all",
    title: "Answers From All",
    description:
      "Ask big questions. Explore all answers. Answers From All aims to aid in the exploration of one's perspectives on life by asking big questions.",
    color: "#09f",
    link: "https://davidhartsough.com/answersfromall.com/",
    github: "https://github.com/davidhartsough/answersfromall.com",
  },
];

export default projects;
