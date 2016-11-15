// bigHead = 1 makes content a headline
//textSize and bubbleType only needed for small text




var data = [
  { "bigHead": 1,
    "textContent": "Get to the point...",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "Some text here",
      "bImg": "pig-nose"
    }
  },

  { "bigHead": 0,
    "textContent": [
      "Get to the point...",
      "Get to the point...This is a really long sentence that will hopefully trigger the small text.",
      "Get to the point...",
      "Get to the point...",
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "Some text here",
      "bImg": "pig-nose"
    }
  },

  { "bigHead": 0,
    "textContent": [
      "A new one.",
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bText": "Some text here 2",
      "bImg": "pig-nose"
    }
  },
];
