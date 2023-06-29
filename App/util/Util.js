import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setQuestChoiceAnsData,
  setQuestionTracker,
  setSelectedQuestionIndex,
} from "../slices/globalSlice";
import Constants from "../constants/Constants";

// ******************************************************************
const generateDefaultSequenceNumbersAndStoreInArrayBasedFromLength = (
  length
) => {
  let tempDataArray = [];
  let trackLoop = 0;

  for (; trackLoop < length; ) {
    tempDataArray.push(trackLoop);
    trackLoop++;
  }
  return tempDataArray;
};
// ******************************************************************
const generateRandomNumbersAndStoreInArrayBasedFromLength = (length) => {
  let tempDataArray = [];
  let trackLoop = 0;

  console.log(
    "[Util.js] generateRandomNumbersAndStoreInArrayBasedFromLength = (length) =>{} "
  );
  console.log("[Util.js] length: ", length);
  for (; trackLoop < length; ) {
    const temp_1 = Math.random();
    const temp_2 = temp_1 * length;
    const randomNumber = Math.floor(temp_2);
    console.log("[Util.js] randomNumber: ", randomNumber);

    if (tempDataArray.length == 0) {
      tempDataArray.push(randomNumber);
      trackLoop++;
    } else {
      let count = 0;
      tempDataArray.map((data, index) => {
        console.log("[Util.js] \tdata: ", data);
        if (data != randomNumber) {
          count++;
        }
      });
      if (count == tempDataArray.length) {
        tempDataArray.push(randomNumber);
        trackLoop++;
      }
    }
  }

  return tempDataArray;
};

// ******************************************************************
/**
 * Generate random numbers to randomly show questions
 * @param {*} param0
 */
const generateRandomSequenceOfQuestions = ({
  questChoiceAnsData,
  dispatch,
  sequenceChoices,
}) => {
  if (questChoiceAnsData != null) {
    let count = 0;
    let trackLoop = 0;
    let tempDataArray = [];
    for (; true; ) {
      count = 0;
      const temp_1 = Math.random();
      const temp_2 = temp_1 * questChoiceAnsData.length;
      const randomNumber = Math.floor(temp_2);

      // console.log("[Util.js] temp_1: ", temp_1);
      // console.log("[Util.js] temp_2: ", temp_2);
      // console.log("[Util.js]randomNumber: ", randomNumber);
      // console.log("[Util.js]trackLoop: ", trackLoop);
      // console.log(
      //   "[Util.js] questChoiceAnsData.length: ",
      //   questChoiceAnsData.length
      // );
      // console.log(
      //   "[Util.js](trackLoop >= questChoiceAnsData.length): ",
      //   trackLoop >= questChoiceAnsData.length
      // );

      if (tempDataArray.length == 0) {
        const { choices } = questChoiceAnsData[randomNumber];
        const length = choices.length;
        const tempChoiceArray = generateChoicesArrays({
          length,
          sequenceChoices,
        });
        tempDataArray.push({
          num: randomNumber,
          choicesIndex: tempChoiceArray,
        });
        trackLoop++;
      } else {
        tempDataArray.map(({ num }) => {
          if (num != randomNumber) {
            count++;
          }
        });

        if (count == tempDataArray.length) {
          const { choices } = questChoiceAnsData[randomNumber];
          const length = choices.length;
          const tempChoiceArray = generateChoicesArrays({
            length,
            sequenceChoices,
          });
          tempDataArray.push({
            num: randomNumber,
            choicesIndex: tempChoiceArray,
          });
          trackLoop++;
        }
      }

      if (trackLoop >= questChoiceAnsData.length) {
        // console.log("[Util.js]tempDataArray: ", tempDataArray);

        dispatch(setQuestionTracker(tempDataArray));
        dispatch(setSelectedQuestionIndex(0));

        break;
      }
    }
  }
};
// ******************************************************************
const generateDefaultSequenceOfQuestions = ({
  questChoiceAnsData,
  dispatch,
  sequenceChoices,
}) => {
  let tempDataArray = [];
  questChoiceAnsData.map((data, index) => {
    const { choices } = data;
    const length = choices.length;
    const tempChoiceArray = generateChoicesArrays({ length, sequenceChoices });
    tempDataArray.push({ num: index, choicesIndex: tempChoiceArray });
  });
  dispatch(setQuestionTracker(tempDataArray));
  dispatch(setSelectedQuestionIndex(0));
};

// ******************************************************************
const generateChoicesArrays = ({ length, sequenceChoices }) => {
  let tempArray = [];
  // console.log(
  //   "[Util.js] generateChoicesArrays = ({ length, sequenceChoices }) => {"
  // );
  // console.log(
  //   "[Util.js] generateChoicesArrays sequenceChoices: ",
  //   sequenceChoices
  // );
  if (sequenceChoices == Constants.SEQUENCE_DEFAULT) {
    tempArray =
      generateDefaultSequenceNumbersAndStoreInArrayBasedFromLength(length);
  } else if (sequenceChoices == Constants.SEQUENCE_RANDOM) {
    tempArray = generateRandomNumbersAndStoreInArrayBasedFromLength(length);
  }

  return tempArray;
};
// ******************************************************************

/**
 * This will mark radio button when clicked
 * @param {*} param0
 */
const markedChoices = ({
  questChoiceAnsData,
  id_1,
  id_2,
  marked,
  dispatch,
}) => {
  const newData = questChoiceAnsData.map((item) => {
    if (item.id == id_1) {
      const newChoices = item.choices.map((item_2) => {
        if (item_2.id == id_2) {
          return { ...item_2, marked: marked ? false : true };
        }
        return item_2;
      });

      return { ...item, choices: newChoices };
    }
    return item;
  });
  dispatch(setQuestChoiceAnsData(newData));
};

// ******************************************************************
/**
 * Checked if answers are correct or wrong
 * @param {*} param0
 * @returns
 */
const isMyAnswerToQuestionCorrect = ({
  questChoiceAnsData,
  selectedQuestionIndex,
  questionTracker,
}) => {
  let isBoolean = true,
    isStart = null,
    markedCount = 0,
    isChoiceCorrectCount = 0;
  console
    .log
    // "[Util.js]isMyAnswerToQuestionCorrect = ({questChoiceAnsData,selectedQuestionIndex,questionTracker})=>{} "
    ();
  questChoiceAnsData.map((data, index) => {
    const { num } = questionTracker[selectedQuestionIndex];
    if (index == num) {
      const { choices } = data;
      choices.map(({ choice, marked, isChoiceCorrect }) => {
        // console.log(
        //   "\t[Util.js]choice: ",
        //   choice,
        //   "\tMarked: ",
        //   marked,
        //   "\tisChoiceCorrect: ",
        //   isChoiceCorrect,
        //   "\t(!isChoiceCorrect && marked): ",
        //   !isChoiceCorrect && marked
        // );
        if (!isChoiceCorrect && marked) {
          if (isStart == null) {
            isStart = true;
            isBoolean = false;
          }
        }

        if (isStart == null) {
          if (marked) {
            markedCount++;
          }
          if (isChoiceCorrect) {
            isChoiceCorrectCount++;
          }
        }
      });
    }
  });

  if (isStart == null && isChoiceCorrectCount == markedCount) {
    return Constants.FULL_CORRECT_ANSWER;
  } else if (isStart == null) {
    return Constants.HALF_CORRECT_ANSWER;
  }

  return Constants.WRONG_ANSWER;
};

// ******************************************************************
/**
 * Checked if answers are correct or wrong
 * @param {*} param0
 * @returns
 */
const isMyAnswerToQuestionCorrect_V2 = ({ choices }) => {
  let isBoolean = true,
    isStart = null,
    markedCount = 0,
    isChoiceCorrectCount = 0;

  choices.map(({ choice, marked, isChoiceCorrect }) => {
    // console.log(
    //   "\t[Util.js]choice: ",
    //   choice,
    //   "\tMarked: ",
    //   marked,
    //   "\tisChoiceCorrect: ",
    //   isChoiceCorrect,
    //   "\t(!isChoiceCorrect && marked): ",
    //   !isChoiceCorrect && marked
    // );
    if (!isChoiceCorrect && marked) {
      if (isStart == null) {
        isStart = true;
        isBoolean = false;
      }
    }

    if (isStart == null) {
      if (marked) {
        markedCount++;
      }
      if (isChoiceCorrect) {
        isChoiceCorrectCount++;
      }
    }
  });

  if (isStart == null && isChoiceCorrectCount == markedCount) {
    return Constants.FULL_CORRECT_ANSWER;
  } else if (isStart == null) {
    return Constants.HALF_CORRECT_ANSWER;
  }

  return Constants.WRONG_ANSWER;
};

// ******************************************************************
/**
 * Checks If I selected some choices
 * @param {*} param0
 * @returns
 */
const isMyAnswerEmpty = ({
  questChoiceAnsData,
  selectedQuestionIndex,
  questionTracker,
}) => {
  let count = 0;
  let choiceLength = 0;
  questChoiceAnsData.map((data, index) => {
    const { num } = questionTracker[selectedQuestionIndex];
    if (index == num) {
      const { choices } = data;
      choiceLength = choices.length;

      choices.map(({ marked, isChoiceCorrect }) => {
        if (!marked) {
          count++;
        }
      });
    }
  });

  if (count >= choiceLength) {
    return true;
  }
  return false;
};

export {
  generateRandomSequenceOfQuestions,
  generateDefaultSequenceOfQuestions,
  generateChoicesArrays,
  markedChoices,
  isMyAnswerToQuestionCorrect,
  isMyAnswerEmpty,
  isMyAnswerToQuestionCorrect_V2,
};
