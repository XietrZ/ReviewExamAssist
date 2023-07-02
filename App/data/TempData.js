const tempData = [
  //   -----------------------------------------------------------
  {
    id: 1,
    numInReviewer: 2,
    question:
      "Which configuration options are available on a cache region? Note: there are 3 correct answers to this question",
    choices: [
      {
        id: 1,
        choice: "maxEntries",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "capacity",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "evictionPolicy",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "statsEnabled",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },

  //   -----------------------------------------------------------
  {
    id: 2,
    numInReviewer: 3,
    question:
      "Base Stores configuratoon. Note: there are 3 correct answers to this question ",
    choices: [
      {
        id: 1,
        choice: "POINTS OF SERVICE",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "WAREHOUSE",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "CUSTOMERS",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "DISCOUNTS",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 5,
        choice: "WEBSITES",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 3,
    numInReviewer: 4,
    question:
      "Which is correct site for the following. Something like this: (?i)^https?://hybris.store(:[\\d]+)?/us(|/.|\\?.)$",
    choices: [
      {
        id: 1,
        choice: "https://electronics-site/",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "https://electronics/?site=base",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "https://?something",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "https://?something",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
];

export default tempData;
