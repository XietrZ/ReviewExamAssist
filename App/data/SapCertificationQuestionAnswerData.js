//-->TEMPLATE
const template = [
  //   -----------------------------------------------------------
  {
    id: 1,
    question: "?",
    choices: [
      {
        id: 1,
        choice: "?",
        marked: false,
        isChoiceCorrect: false,
      },
    ],
  },
];

// ************************************************************************************************************************************
// ********************DATA****************************************************************************************************************
// ************************************************************************************************************************************

const sapCertificationQuestAnsData = [
  // //   -----------------------------------------------------------
  // {
  //   id: 1,
  //   numInReviewer: 2,
  //   question:
  //     "Which configuration options are available on a cache region? Note: there are 3 correct answers to this question",
  //   choices: [
  //     {
  //       id: 1,
  //       choice: "A. maxEntries",
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //     {
  //       id: 2,
  //       choice: "B. capacity",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //     {
  //       id: 3,
  //       choice: "C. evictionPolicy",
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //     {
  //       id: 4,
  //       choice: "D. statsEnabled",
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //   ],
  // },

  // //   -----------------------------------------------------------
  // {
  //   id: 2,
  //   numInReviewer: "3",
  //   question:
  //     "Base Stores configuratoon. Note: there are 3 correct answers to this question ",
  //   choices: [
  //     {
  //       id: 1,
  //       choice: "A. POINTS OF SERVICE",
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //     {
  //       id: 2,
  //       choice: "B. WAREHOUSE",
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //     {
  //       id: 3,
  //       choice: "C. CUSTOMERS",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //     {
  //       id: 4,
  //       choice: "D. DISCOUNTS",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //     {
  //       id: 5,
  //       choice: "E. WEBSITES",
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //   ],
  // },
  // //   -----------------------------------------------------------
  // {
  //   id: 3,
  //   numInReviewer: 4,
  //   question:
  //     "4.	Which is correct site for the following. Something like this: (?i)^https?://hybris.store(:[\\d]+)?/us(|/.|\\?.)$",
  //   choices: [
  //     {
  //       id: 1,
  //       choice: "A. https://electronics-site/",
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //     {
  //       id: 2,
  //       choice: "B. https://electronics/?site=base",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //     {
  //       id: 3,
  //       choice: "C. https://?something",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //     {
  //       id: 4,
  //       choice: "D. https://?something",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //   ],
  // },
  //   -----------------------------------------------------------
  {
    id: 4,
    numInReviewer: 5,
    question: "How can express checkout enabled for a specific store??",
    choices: [
      {
        id: 1,
        choice:
          "A. Set the expressCheckoutEnabled attribute to true on Customers registered on the Basesite",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. Set the expressCheckoutEnabled attribute to true for the CMS Catalog on the Basesite.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice:
          "C. Set the expressCheckoutEnabled attribute to true for the BaseStore configured on the Basesite",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice:
          "D. Set the expressCheckoutEnabled attribute to true for customers supported by the Basesite",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },

  //   -----------------------------------------------------------
  {
    id: 5,
    numInReviewer: 7,
    question: null,
    questionImg: require("../assets/images/numinreviewer-7-2023-06-25.png"),
    choices: [
      {
        id: 1,
        choice:
          'A. A table "barlp" is created and used to store the localized data',
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice:
          'B. An existing "genericitems" table is used to store the localized data',
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice:
          'C. An existing "props" table is used to store the localized data',
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          'D. A table "bar" is created and used to store the localized data',
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },

  // //   -----------------------------------------------------------
  // {

  //   id: ?,
  //   numInReviewer: 13,
  //   question:
  //     "What is the recommended way to deploy Solr in a production environment?",
  //   choices: [
  //     {
  //       id: 1,
  //       choice: "A. As one master server and multiple slave servers",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //     {
  //       id: 2,
  //       choice: "B. As a cluster of co-equal master servers",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //     {
  //       id: 3,
  //       choice: "C. As a standalone server",
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //     {
  //       id: 4,
  //       choice: "D. As embedded with the hybris server",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //   ],
  // },
  // //   -----------------------------------------------------------
  // {
  //   id: ?,
  //   numInReviewer: 17,
  //   question: "How can CronJobs be started?",
  //   choices: [
  //     {
  //       id: 1,
  //       choice:
  //         "A. CronJobs can be started and aborted automatically if a configurable",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //     {
  //       id: 2,
  //       choice:
  //         "B. CronJobs can be started and aborted only if implemented as abortable.",
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //     {
  //       id: 3,
  //       choice: "C. CronJobs can be started manually using flexible search",
  //       marked: false,
  //       isChoiceCorrect: false, // true or false
  //     },
  //     {
  //       id: 4,
  //       choice:
  //         'D. CronJobs can be started manually via the command line by invoking "ant runcronjob"',
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //     {
  //       id: 5,
  //       choice: "E. CronJobs can be started manually via the Backoffice",
  //       marked: false,
  //       isChoiceCorrect: true, // true or false
  //     },
  //   ],
  // },
  // //   -----------------------------------------------------------
  // {
  //   id: ?,
  //   numInReviewer: 21,
  //   question:
  //     "How do you include new sample data in your accelerator project using impex?",
  //   choices: [
  //     {
  //       id: 1,
  //       choice:
  //         "A. By modifying the CoreSystemSetup class in the yacceleratorcore extension.",
  //       marked: false,
  //       isChoiceCorrect: true,
  //     },
  //     {
  //       id: 2,
  //       choice:
  //         "B. By modifying the @SystemSetup annotation in the platform exteion.",
  //       marked: false,
  //       isChoiceCorrect: false,
  //     },
  //     {
  //       id: 3,
  //       choice:
  //         "C. By modifying the InitialDataSystemSetup class in the yacceleratorinitialdata extension",
  //       marked: false,
  //       isChoiceCorrect: true,
  //     },
  //     {
  //       id: 4,
  //       choice:
  //         "D. By creating a file with the name sampledata impex in the yacceleratorcore extension.",
  //       marked: false,
  //       isChoiceCorrect: false,
  //     },
  //   ],
  // },
  // //   -----------------------------------------------------------
];

// ************************************************************************************************************************************
// ************************************************************************************************************************************
// ************************************************************************************************************************************

export default sapCertificationQuestAnsData;
