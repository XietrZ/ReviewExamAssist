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
  // -----------------------------------------------------------
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
  //   -----------------------------------------------------------
  {
    id: 6,
    numInReviewer: 9,
    question: null,
    questionImg: require("../assets/images/numinreviewer-9-2023-06-25.png"),
    choices: [
      {
        id: 1,
        choice: "A. The flexible search query returns a SQL exception.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          'B. The flexible search query returns "PinkCandle" because the restriction applies on Product and not on VariantProduct',
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "B. The flexible search query returns an empty list.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 7,
    numInReviewer: 10,
    question:
      "SOLR INDEXED QUERY What do you need to provide to define the data that is to be loaded into solr index? Note: there are 2 correct ansers for this question",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. An impex script for full load",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. A flexible search query for a full load",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. A flexible search query for an incremental update",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. A solr configuration file",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 8,
    numInReviewer: 11,
    question:
      "A SolrIndexProperty allows you to define facets. You want to define facet ranges instead of simple facets. You already created a new solr indexed property of a facet What do you need to do next to define the facet ranges? ",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Define the cadence of the ranges in the solr index property. Provide the sample data that is used to define the solr value rangeset",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. reate solrvaluerange items to define the range boundaries. Create a solrvaluerange set, add solr valuerange items and add to the solrindex property",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice:
          "C. Define the number of ranges in the solrindexproperty. Provide the sample data that is used to generate the solr value range items",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. Define a list of upper range boundaries in the solrindexproperty. Trigger the generation of solrvaluerange items from the backoffice",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 9,
    numInReviewer: 13,
    question:
      "What is the recommended way to deploy Solr in a production environment?",
    choices: [
      {
        id: 1,
        choice: "A. As one master server and multiple slave servers",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. As a cluster of co-equal master servers",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. As a standalone server",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. As embedded with the hybris server",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 10,
    numInReviewer: 14,
    question:
      "How can you create asynchronous events in the SAP hybris platform? Note: There are 2 correct answers to this question.",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Change the platformClusterEventSender Spring bean configuration.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. Extend the AbstractEvent class.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. Implement the TransactionAwareEvent interface.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. Implement the ClusterAwareEvent interface.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 11,
    numInReviewer: 15,
    question:
      "You synchronize a media item stored in Hybris from a Staged version to an Online VersionWhat happens? Note: There are 2 correct answers to this question.",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Both Staged and Online Media items will refer to the same image file on the file system.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice:
          "B. The values of the attribute of the source item in the Staged catalog are copied to the target item in the Online catalog.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice:
          "C. The Staged and Online media items will refer to two different image files on the filesystem.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. The different formats of the Staged media item image will be automatically synchronized to the Online catalog version.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 12,
    numInReviewer: 16,
    question: "16.	DEFINITION WIDGET (3 TRUE)",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. DEFAULTTITLE",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. SETTINGS",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. CONTROLLERCLASS",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. •	SOCKETS VIRTUAL AVAILABLES",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 5,
        choice: "E. SOCKETS AVAILABLES",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 13,
    numInReviewer: 17,
    question: "How can CronJobs be started?",
    choices: [
      {
        id: 1,
        choice:
          "A. CronJobs can be started and aborted automatically if a configurable",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. CronJobs can be started and aborted only if implemented as abortable.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. CronJobs can be started manually using flexible search",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          'D. CronJobs can be started manually via the command line by invoking "ant runcronjob"',
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 5,
        choice: "E. CronJobs can be started manually via the Backoffice",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 14,
    numInReviewer: 18,
    question: "Table relationship (3 TRUE)",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. N:M NEW TABLE",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. 1:N NEW COLUMN",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. N:M BINARY",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. 1:N ORDERED = TRUE",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 15,
    numInReviewer: 20,
    question: "COMPONENTS BACKOFFICE (2 TRUE)",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. USAGE",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. POSITION",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. VIEW",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. PRINCIPAL",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 5,
        choice: "E. TYPE",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 16,
    numInReviewer: 21,
    question:
      "How do you include new sample data in your accelerator project using impex?",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. By modifying the CoreSystemSetup class in the yacceleratorcore extension.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. By modifying the @SystemSetup annotation in the platform exteion.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice:
          "C. By modifying the InitialDataSystemSetup class in the yacceleratorinitialdata extension",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice:
          "D. By creating a file with the name sampledata impex in the yacceleratorcore extension.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 17,
    numInReviewer: 23,
    question:
      "What happens when you use a deployment tag in the items.xml Note: 2 answers are only correct",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. New item types are automatically deployed into their own tables",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. All instances of the enclosing type are stored in specific database table",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice:
          "C. The deployment typecode is used as part of primary key {pk} to the table",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. The name of the deployment table is generated",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 18,
    numInReviewer: 24,
    question:
      "CUSTOMER SUPPORT: CUSTOMER SUPPORT BACKOFFICE – What can they do (2 answers)",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. Register Users ",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. Delete Expired Cards",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. Cancel Consignments ",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. Refund of orders ",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 19,
    numInReviewer: 25,
    question: "How to change url of product page",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. Product page controller",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. xml config",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. Product page Jsp",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 20,
    numInReviewer: 27,
    question:
      "How can you configure ContentSlots? Note: There are 3 correct answers to this question.",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. A ContentSlot can be configured with a list of Content Management System(CMS) Components",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. A ContentSlot can be configured with a list of pages.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice:
          "C. A ContentSlot can be assigned to a Page using a ContentSlotForPage",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice:
          "D. A ContentSlot can be assigned to a PageTemplate using a ContentSlotForTemplate.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 5,
        choice:
          "E. A ContentSlot can be assigned to a Catalog using a ContentSlotForPage.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 21,
    numInReviewer: 28,
    question:
      "Extension A configures a Spring bean with an id=”WebA” in a web context. Extension B is dependent on Extension A. You try to create a bean id=”BeanB” inside the extension B. Spring tenant context that injects bean “WebA”. What happens?",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. The Spring application context starts with a warning that bean “WebA” cannot be accessed.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. The Spring application context fails to start",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. The Spring application context starts successfully.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. The Spring tenant context automatically loads all web context beans",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 22,
    numInReviewer: 29,
    question:
      "You have the following scenario: A product type with the custom attribute CostOfSale of type CostOfSale which is Catalog aware A synchronization job configured to synchronize product types and attribute costOfSale. What do you need to do to synchronize a product item including the related costOfSale item?",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. Synchronize the entire catalog version",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. Mark the costOfSale as a partOf attribute of the ProductType and synchronize the product.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice:
          "C. Add the CostOfSale into synchronization Root Types and synchronize the product.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice:
          "D. Configure synchronization as copyByValue for the costOfSale attribute and synchronize the product.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 23,
    numInReviewer: 30,
    question:
      "What do you set up to create visibility rules for specific Product items for a user group?",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. A search restriction on the Type UserGroup",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. An item type access right for the type Product for the user group",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice:
          "C. A search restriction on the type Product for the user group",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. An item type access right for the type UserGroup.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 24,
    numInReviewer: 31,
    question: "ANT CLEAN BUILD",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. REMOVE EXTENSION IF SOMETHING REMOVED FROM LOCALEXTENSION",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. PROPERTIES",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. BEANS",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. ITEMS",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 25,
    numInReviewer: 32,
    question:
      "In SmartEdit, Navigation bar, Category B is a child of Category A. How to configure Category B",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. NAVIGATIONBARCOLLECTIONCOMPONENT -NAVIGATIONBARCOMPONENT – CMSLINKCOMPONENT",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice:
          "B. NAVIGATIONBARCOLLECTIONCOMPONENT -NAVIGATIONBARCOMPONENT – OTHER ",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. NAVIGATIONBARCOMPONENT COMO CHILDREN - CMSLINKCOMPONENT",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. OTHER WITH CATEGORY Y HOMEPAGE",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 26,
    numInReviewer: 33,
    question:
      "Which of the following order splitting strategies are provided in the hybris basecommerce extension? There are 3 correct asnwers to this question",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. SplitByWarehouse",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. SplitByNamedDeliveryDate",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. Splitbypayment",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. splitbyavailableCount",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 5,
        choice: "E. splitByOrderDate",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 27,
    numInReviewer: 34,
    question:
      "Why are Rule Aware Object(RAO) used in the rule engine. Note Only 2 answers are correct",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. To store the configuration of the rule engine",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. To eliminate unnecessary data provided by complex objects",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. To persist the results of the rule evaluation",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. To represent the data as facts in Rule conditions and actions",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 28,
    numInReviewer: 35,
    question:
      "How is the primary key(PK) for a hybris item created? Note: There are 2 correct answers to this question",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. It is generated from a counter and the type code of the item",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. It is automatically generated and assigned.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. It is generated from the hybris license",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. It is created manually by setting it in a model of the item prior to saving the item.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 29,
    numInReviewer: 36,
    question:
      "What are the best practices when using models? Note: There are 2 correct answers to this question.",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. Create models using the New keyword",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. Save the model using the Model Service after model is modified",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. Share models between different threads.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. Create models using modelService.create()",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 30,
    numInReviewer: 37,
    question:
      "Where is the validation mechanism applied in the backoffice? Note: There are 2 correct answers",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. In the multiplexer widget",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. In the configurable flow wizard widget",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. In the editor area widget",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. In the property extractor widget",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 31,
    numInReviewer: 38,
    question:
      "38.	Which condition must be met in order to connect two widgets by a widget-connection?",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. It must be possible to assign the input sockets type to the output sockets type",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. The output socket and the input socket must be of exactly the same type",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice:
          "C. It must be possible to assign the output sockets type to the input sockets type",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. The type used for the input socket must be a sub type of a composed item type",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 32,
    numInReviewer: 39,
    question:
      "Which methods can you use to create a new Omni Commerece Connect(OCC) web services? Note: There are 2 correct answers to this question.",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Use ant extgen to create an AddOn extension using acceleratoraddon as the template.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. Use ant extgen to create an AddOn extension using yoccaddon as the template",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice:
          "C. Use ant extgen to create a new extension using ycommercewebservices as the template",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice:
          "D. Use ant modulegen to create a new extension using yacceleratorstorefront as the template.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 33,
    numInReviewer: 40,
    question:
      "What causes item data to be evicted from the sap hybris entity cache? Note: there are 2 correct answers to this question.",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Calling the modelservice.save() method passing an item model.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. Calling the modelservice.create() method passing a model class.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice:
          "C. Receiving an invalidation event for the item via cluster messaging",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. Calling a setter method on a Model class",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 34,
    numInReviewer: 41,
    question:
      "When a customer places an order using the default order management system, at which stage does the fulfillment process send the notification that the order is placed?",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. After the order has been completely sourced",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. At the first stage of the fulfillment process",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. After the order has been fraud checked",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. After the payment has been processed",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 35,
    numInReviewer: 42,
    question:
      'You restart the platform without running "ant all". Which of the following changes take effect? Note: There are 2 correct answers in this question',
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Definition of a new item type in the items.xml file for an extension.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. Removal of an extension from the localextensions.xml file",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. Addition of a spring bean definition",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice:
          "D. Changes to database properties in the local.properties file.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 36,
    numInReviewer: 43,
    question:
      "What is the best practice to add a new parameter to an existing method of CommerceCartService? Note: There are 2 correct answers to this question.",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Add a new property to CommerceCartParameter in a beans.xml file.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice:
          "B. Extend the default strategy called by the method in order to handle the new parameter.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice:
          "C. Overload the existing method of CommerceCartService by adding the new parameter.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. Extend the default implementation of the method in order to handle the new parameter.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 37,
    numInReviewer: 54,
    question:
      "What are the required tags of definition.xml of Backoffice. Which of the following tags can occur in the definition.xml file for a widget? Note: there are 3 correct answers",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. controllerClass",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. keywords",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. view-page",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. defaultTitle",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 5,
        choice: "E. settings",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 38,
    numInReviewer: 56,
    question:
      "hich interface do you re-implement to select different PriceRows for cart calculation?",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. FindPriceStrategy",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. CommerceCartService",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. CalculationService",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. Europe1PriceFactory",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 39,
    numInReviewer: 57,
    question:
      "Where the advantages of using classification attributes? Note: There are 2 correct answers to this question",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Changes can be made without loss of classification attributes data.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. Rebuilding and redeployment are not required",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice: "C. Classification attributes can be applied to any type.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. Business users can create or modify classification attributes using the backoffice.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 40,
    numInReviewer: 58,
    question: "58.	What can be use for the view of BackOffice",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. XML",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. JSP",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. Velocity",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. Zul",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 41,
    numInReviewer: 59,
    question: "When are consignments created for an order?",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. When an administrator approves the order",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. After the order is placed and before it is sourced successfully.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. When the user adds items to the cart.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. After the order is placed and after it is sourced successfully. ",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 42,
    numInReviewer: 60,
    question: "How is a page typically loaded from a specific accelerator URL?",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. A controller method is defined from the URL using the RequestMapping annotation. This the returns the name of the page.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. The path to the page is directly referenced by the URL.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice:
          "C. A Façade method is determined from the URL using the naming convention. This then retrieves the name of the page from the database.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. The path to the page is determined from a singleton that knows the location of the page based, on the static mapping from URL to page name.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 43,
    numInReviewer: 61,
    question:
      "What are Addons specifically designed to allow a Hybris developer to do? Note: 2 answers are correct",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. Extend the Accelerator storefront",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. Extend the backoffice",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. Import sample data by convention",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice: "D. Provide a new web application",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 44,
    numInReviewer: 62,
    question:
      "How can you find the behavior of Dynamic forms within the Backoffice? Note: 2 answers are correct",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. Write an inline Groovy script",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice: "B. Write inline Java code",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. Refer to an URI located script",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. Write an inline script in any programming language",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 45,
    numInReviewer: 63,
    question:
      "How can you customize the web spring context for a cockpit application Note: 2 answers are correct",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Setup an additional web spring context by specifying a property in <webappname>.applicationwebspringconfigs in the local.properties file",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice:
          "B. Create a module that extends a cockpit application and modify its web.xml",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice:
          "C. Create a custom cockpit spring configuration in the config folder",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. Customize the global spring context file in the generated cockpit application",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 46,
    numInReviewer: 64,
    question: "How is a (typed) classification feature persisted",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Its value is stored as a productfeature item in the related deployment table",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice:
          "B. Its value is stored in an additional column in the deployment table of the item it is assigned to",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice:
          "C. Its value is stored in an additional column in the deployment table of the category defined in the classattribute assignment",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. Its value is store in the properties table of the product type(productprops)",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 47,
    numInReviewer: 65,
    question: "What are the two attribute of search restriction: ",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice: "A. customer",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 2,
        choice: "B. user group",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 3,
        choice: "C. restricted type",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 4,
        choice: "D. principal",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
    ],
  },
  //   -----------------------------------------------------------
  {
    id: 48,
    numInReviewer: 69,
    question:
      "How can you start a business process in SAP Hybris Commerce? Note: There are 2 correct answers to this question.",
    questionImg: null,
    choices: [
      {
        id: 1,
        choice:
          "A. Invoke the appropriate method of the BusinessProcessService from a script in the hAC scripting console to start the business process.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 2,
        choice:
          "B. Invoke the appropriate method of the BusinessProcessService from Java code to start the busineess process.",
        marked: false,
        isChoiceCorrect: true, // true or false
      },
      {
        id: 3,
        choice:
          "C. Use the hMC Business Process section to start the business process.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
      {
        id: 4,
        choice:
          "D. Use the Backoffice Business Process section to start the business process.",
        marked: false,
        isChoiceCorrect: false, // true or false
      },
    ],
  },
];

// ************************************************************************************************************************************
// ************************************************************************************************************************************
// ************************************************************************************************************************************

export default sapCertificationQuestAnsData;
