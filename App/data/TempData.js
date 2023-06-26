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
        choice: "A. maxEntries",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. capacity",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. evictionPolicy",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. statsEnabled",
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
        choice: "A. POINTS OF SERVICE",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. WAREHOUSE",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. CUSTOMERS",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. DISCOUNTS",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 5,
        choice: "E. WEBSITES",
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
      "4.	Which is correct site for the following. Something like this: (?i)^https?://hybris.store(:[\\d]+)?/us(|/.|\\?.)$",
    choices: [
      {
        id: 1,
        choice: "A. https://electronics-site/",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. https://electronics/?site=base",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. https://?something",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. https://?something",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
];

export default tempData;
