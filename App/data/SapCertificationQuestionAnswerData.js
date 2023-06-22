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
  //   -----------------------------------------------------------
  {
    id: 1,
    numInReviewer: 13,
    question:
      "What is the recommended way to deploy Solr in a production environment?",
    choices: [
      {
        id: 1,
        choice: "As one master server and multiple slave servers",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "As a cluster of co-equal master servers",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "As a standalone server",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "As embedded with the hybris server",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 2,
    numInReviewer: 17,
    question: "How can CronJobs be started?",
    choices: [
      {
        id: 1,
        choice:
          "CronJobs can be started and aborted automatically if a configurable",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "CronJobs can be started and aborted only if implemented as abortable.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "CronJobs can be started manually using flexible search",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          'CronJobs can be started manually via the command line by invoking "ant runcronjob"',
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 5,
        choice: "CronJobs can be started manually via the Backoffice",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 3,
    numInReviewer: 21,
    question:
      "How do you include new sample data in your accelerator project using impex?",
    choices: [
      {
        id: 1,
        choice:
          "A. By modifying the CoreSystemSetup class in the yacceleratorcore extension.",
        marked: false,
        isChoiceCorrect: true,
      },
      {
        id: 2,
        choice:
          "B. By modifying the @SystemSetup annotation in the platform exteion.",
        marked: false,
        isChoiceCorrect: false,
      },
      {
        id: 3,
        choice:
          "C. By modifying the InitialDataSystemSetup class in the yacceleratorinitialdata extension",
        marked: false,
        isChoiceCorrect: true,
      },
      {
        id: 4,
        choice:
          "D. By creating a file with the name sampledata impex in the yacceleratorcore extension.",
        marked: false,
        isChoiceCorrect: false,
      },
    ],
  },
  //   -----------------------------------------------------------
];

// ************************************************************************************************************************************
// ************************************************************************************************************************************
// ************************************************************************************************************************************

export default sapCertificationQuestAnsData;
