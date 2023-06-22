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
/**
 * Generate random numbers to randomly show questions
 * @param {*} param0
 */
const generateUniqueRandomNumber = ({ questChoiceAnsData, dispatch }) => {
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
        tempDataArray.push({ num: randomNumber });
        trackLoop++;
      } else {
        tempDataArray.map(({ num }) => {
          if (num != randomNumber) {
            count++;
          }
        });

        if (count == tempDataArray.length) {
          tempDataArray.push({ num: randomNumber });
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
  generateUniqueRandomNumber,
  markedChoices,
  isMyAnswerToQuestionCorrect,
  isMyAnswerEmpty,
  isMyAnswerToQuestionCorrect_V2,
};
