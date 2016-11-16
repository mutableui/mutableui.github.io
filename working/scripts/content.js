// bigHead = 1 makes content a headline
//textSize and bubbleType only needed for small text




var data = [
  { "bigHead": 1,
    "textContent": "<br/>hi there!",
    "vidContent": "coffee2",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "...nose?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "...nose?",
      "Ears, eyes, mouth, hands...",
      "Like all sensory organs, the nose plays a vital role in how you perceive your environment.",
      "Yes you.",
      "Who are you?",
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "who's asking?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "who's asking?",
      "I am a constructed narrative meant to forward an idea. I wish I were real.",
      "But you…",
      "You're special.",
      "A unique island universe of experiences and knowledge unlike any other."
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bText": "Some text here",
      "bImg": "hm"
    }
  },

  { "bigHead": 1,
    "textContent": "take a moment<br/>to look outside.",
    "vidContent": "nature",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "why?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "why?",
      "Just do it.",
      "What do you see?",
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "people...cars...buildings...trees...",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "people...cars...buildings...trees...",
      "Yes. Real things.",
      "You live in a beautiful world filled with real people and real things.",
      "Interfacing with people, with nature, with thought, happens in an immersive world of concurrent stimuli.",
      "These stimuli shape the present moment and our goals, dreams and desires.",
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "what are you getting at?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "what are you getting at?",
      "Digital information hides behind screens, coming to life only when explicitly asked."
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "robot",
    }
  },

  { "bigHead": 1,
    "textContent": "screens screens screens... tap click tap click tap",
    "vidContent": "screens",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "*click*",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "*click*",
      "how many times a day do you tap, swipe, click, type and pinch?",
      "...to access a simple fact...",
      "that the brain could recall...",
      "instantly."
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "maybe 100?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "maybe 100?",
      "More like 2,000.",
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "turnt",
    }
  },

  { "bigHead": 1,
    "textContent": "yeah...",
    "vidContent": "chickens2",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "am i dumb?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "am i dumb?",
      "No.",
      "You're an agent using a tool.",
      "A tool designed in a simpler time.",
      "With the principles of mass production in mind.",
      "A tool that references real objects.",
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "a metaphor?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "a metaphor?",
      "A metaphor.",
      "Screens supplant the printed book… household appliances… buttons, switches and knobs… the assembly line… one size fits all.",
      "You are not dumb.",
      "Quite the opposite…"
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "hands",
    }
  },


  { "bigHead": 1,
    "textContent": "your<br/> smart phone<br/> is dumb.",
    "vidContent": "dumb",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "that's mean",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "that's mean",
      "Really?",
      "When’s the last time Siri gave you information <i>before</i> you asked for it?"
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "...",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "...",
      "Our technology is stuck in the mechanized dream of the Industrial Age.",
      "It ignores the rich datascapes of the Information Age.",
      "It ignores reality."
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "...it ignores me!",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "...it ignores me!",
      "Precisely!"
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "sad",
    }
  },

  { "bigHead": 1,
    "textContent": "putting the user<br/>first again",
    "vidContent": "user",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "how?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "how?",
      "Understanding.",
      "Understanding you.",
      "Understanding reality.",
      "The interface must understand the user and conform to his needs.",
      "An intelligent tool for an intelligent agent."
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "is this possible?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "is this possible?",
      "The technology exists.",
      "And is awaiting application.",
      "Combining collected data with an intelligent system will bring about a fluid technological revolution."
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "fist",
    }
  },

  { "bigHead": 1,
    "textContent": "THE MUTABLE INTERFACE",
    "vidContent": "mutable",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "one size fits none!",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "one size fits none!",
      "The industrial paradigm of standard forms is no longer relevant.",
      "Combining real-time data with intelligent understanding can craft a unique experience.",
      "Unique to you.",
      "Unique to the moment."
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "I can almost see it…",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "I can almost see it…",
      "Imagine an interface that knows when you’re home, and surfaces social content…",
      "knows when you’re working and surfaces emails…",
      "knows when you’re traveling and surfaces navigation…"
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "yes!!!",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "yes!!!",
      "Mutable interfaces.",
      "Fluid technology.",
      "This is the future."
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "man",
    }
  },

  { "bigHead": 1,
    "textContent": "<br/>REFLECT REALITY.",
    "vidContent": "mirror",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "xxxend",
    }
  },
];
