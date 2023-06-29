import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../stylesheets/QuestionAnswerScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon, Text } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import Colors from "../constants/Color";
import sapCertificationQuestAnsData from "../data/SapCertificationQuestionAnswerData";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHomeMenuOption,
  selectQuestChoiceAnsData,
  selectQuestionTracker,
  selectScoreTracking,
  selectSelectedQuestionIndex,
  setQuestChoiceAnsData,
  setScoreTracking,
  setSelectedQuestionIndex,
} from "../slices/globalSlice";
import {
  generateDefaultSequenceOfQuestions,
  generateRandomSequenceOfQuestions,
  isMyAnswerEmpty,
  isMyAnswerToQuestionCorrect_V2,
  markedChoices,
} from "../util/Util";
import Constants from "../constants/Constants";
import QuestionChoiceComponent from "../components/QuestionChoiceComponent";

const QuestionAnswerScreen = () => {
  const navigation = useNavigation();
  const [isShowAnswers, setShowAnswers] = useState(false);
  const [isAnswerCorrect, setAnswerCorrect] = useState(null);
  const viewData = [{ id: 1 }];

  const dispatch = useDispatch();
  const homeMenuOption = useSelector(selectHomeMenuOption);
  const questChoiceAnsData = useSelector(selectQuestChoiceAnsData);
  const questionTracker = useSelector(selectQuestionTracker);
  const selectedQuestionIndex = useSelector(selectSelectedQuestionIndex);
  const scoreTracking = useSelector(selectScoreTracking);

  console.log("[QuestionAnswerScreen.js] Render QuestionAnswerScreen ");

  /**
   * Track the score
   */
  const trackTheScore = () => {
    if (homeMenuOption == Constants.MENU_OPTION_TWO) {
      questChoiceAnsData.map(({ choices }) => {
        if (
          isMyAnswerToQuestionCorrect_V2({
            choices,
          }) == Constants.FULL_CORRECT_ANSWER
        ) {
          dispatch(setScoreTracking(scoreTracking + 1));
        }
      });
    }
  };

  /**
   * Show Score
   * @returns
   */
  const showScore = () => {
    if (isShowAnswers && homeMenuOption == Constants.MENU_OPTION_TWO) {
      return (
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 10,
            marginTop: 10,
            justifyContent: "flex-start",
            width: 250,
            borderTopEndRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: Colors.yelloww,
          }}
        >
          <Text style={{ fontSize: 35, fontWeight: 700 }}>
            SCORE: {scoreTracking}/{questChoiceAnsData.length}
          </Text>
        </View>
      );
    }
  };

  useEffect(() => {
    console.log("[QuestionAnswerScreen.js] useEffect()");
    if (questionTracker.length == 0) {
      // --> Show Questions in Random manner
      generateRandomSequenceOfQuestions({
        questionTracker,
        questChoiceAnsData,
        dispatch,
      });

      // // --> Show question in default sequence saved in data
      // generateDefaultSequenceOfQuestions({ questChoiceAnsData, dispatch });
    }
  }, [questionTracker]);

  /**
   * Handle what happens on key press
   */
  const handleKeyPress = useCallback(
    (event) => {
      console.log(`Key pressed: ${event.key}`);
      console.log("(event.key=='q'): ", event.key == "q");
      console.log("(event.key=='w'): ", event.key == "w");
      console.log("(event.key=='e'): ", event.key == "e");
      console.log(
        "[QuestionAnswerScreen,js] handleKeyPressed questChoiceAnsData: ",
        questChoiceAnsData
      );

      console.log(
        "[QuestionAnswerScreen.js] handleKeyPressed questionTracker: ",
        questionTracker
      );

      console.log(
        "[QuestionAnswerScreen.js] handleKeyPressed selectedQuestionIndex: ",
        selectedQuestionIndex
      );

      if (questionTracker.length > 0) {
        if (event.key == "q") {
          if (!isShowAnswers && homeMenuOption == Constants.MENU_OPTION_ONE) {
            console.log(
              "[QuestionAnswerScreen.js] handleKeyPressed executeShowAnswersButton()"
            );
            executeShowAnswersButton();
          } else if (
            !isShowAnswers &&
            homeMenuOption == Constants.MENU_OPTION_TWO &&
            selectedQuestionIndex >= questionTracker.length - 1
          ) {
            console.log(
              "[QuestionAnswerScreen.js] handleKeyPressed executeShowAllAnswersButton();"
            );
            executeShowAllAnswersButton();
          } else if (isShowAnswers) {
            console.log(
              "[QuestionAnswerScreen.js] handleKeyPressed executeHideAnswersButton();"
            );
            executeHideAnswersButton();
          }
        } else if (
          event.key == "w" &&
          selectedQuestionIndex &&
          selectedQuestionIndex > 0
        ) {
          console.log(
            "[QuestionAnswerScreen.js] handleKeyPressed executePrevButton();"
          );
          executePrevButton();
        } else if (
          event.key == "e" &&
          selectedQuestionIndex < questionTracker.length - 1
        ) {
          console.log(
            "[QuestionAnswerScreen.js] handleKeyPressed executeNextButton();"
          );
          executeNextButton();
        }
      }
    },
    [questionTracker, questChoiceAnsData, selectedQuestionIndex, isShowAnswers]
  );
  // --> Attach event listener when key pressed
  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  /**
   * Show answer for only 1 question
   */
  const executeShowAnswersButton = () => {
    // -->
    if (
      !isMyAnswerEmpty({
        questChoiceAnsData,
        selectedQuestionIndex,
        questionTracker,
      })
    ) {
      // setAnswerCorrect(
      //   isMyAnswerToQuestionCorrect({
      //     questChoiceAnsData,
      //     selectedQuestionIndex,
      //     questionTracker,
      //   })
      // );
      setShowAnswers(true);
    } else {
      alert("Please select answer");
    }
  };

  /**
   * Show ALL Answers
   */
  const executeShowAllAnswersButton = () => {
    // -->
    if (
      !isMyAnswerEmpty({
        questChoiceAnsData,
        selectedQuestionIndex,
        questionTracker,
      })
    ) {
      setShowAnswers(true);
      trackTheScore();
    } else {
      alert("Please select answer");
    }
  };

  /**
   * Hide answers
   */
  const executeHideAnswersButton = () => {
    setShowAnswers(false);
  };

  /**
   * Execute prev button when clicked or pressed
   */
  const executePrevButton = () => {
    setShowAnswers(false);
    if (isShowAnswers && homeMenuOption == Constants.MENU_OPTION_TWO) {
      dispatch(setSelectedQuestionIndex(selectedQuestionIndex));
    } else {
      dispatch(setSelectedQuestionIndex(selectedQuestionIndex - 1));
    }
  };

  /**
   * Execute next button when clicked or pressed
   */
  const executeNextButton = () => {
    if (
      !isMyAnswerEmpty({
        questChoiceAnsData,
        selectedQuestionIndex,
        questionTracker,
      })
    ) {
      setShowAnswers(false);
      dispatch(setSelectedQuestionIndex(selectedQuestionIndex + 1));
    } else {
      alert("Please select answer");
    }
  };

  // --> For printing at consle.log() for debugging purposes
  console.log(
    "[QuestionAnswerScreen.js] questChoiceAnsData ID: ",
    questChoiceAnsData[0].id
  );

  console.log("[QuestionAnswerScreen.js] homeMenuOption: ", homeMenuOption);
  console.log(
    "[QuestionAnswerScreen.js] (homeMenuOption == 1): ",
    homeMenuOption == 1
  );

  console.log(
    "[QuestionAnswerScreen,js] questChoiceAnsData: ",
    questChoiceAnsData
  );

  console.log("[QuestionAnswerScreen.js] questionTracker: ", questionTracker);

  console.log(
    "[QuestionAnswerScreen.js] selectedQuestionIndex: ",
    selectedQuestionIndex
  );

  return (
    <FlatList
      style={{ backgroundColor: "white" }}
      data={viewData}
      renderItem={({ item }) => (
        //--> ADD DESIGN HERE
        <SafeAreaView style={styles.container}>
          {/* Home Button  */}
          <TouchableOpacity
            style={styles.homeButtonWrapper}
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          >
            <Entypo name="home" size={35} color={Colors.hot_pink} />
          </TouchableOpacity>

          {/* Show Score */}
          {showScore()}

          {/*  */}
          {console.log(
            "[QuestionAnswerScreen.js]questChoiceAnsData.length: ",
            questChoiceAnsData.length
          )}

          {/* Question and Choices  */}
          {(!isShowAnswers ||
            (isShowAnswers && homeMenuOption == Constants.MENU_OPTION_ONE)) && (
            <QuestionChoiceComponent
              isShowAnswers={isShowAnswers}
              selectedQuestionIndex={selectedQuestionIndex}
            />
          )}

          {isShowAnswers &&
            homeMenuOption == Constants.MENU_OPTION_TWO &&
            questionTracker.map((data, index) => {
              return (
                <QuestionChoiceComponent
                  key={index}
                  isShowAnswers={isShowAnswers}
                  selectedQuestionIndex={index}
                />
              );
            })}

          {/* Buttons */}
          <View style={[styles.buttonsContainerWrapper]}>
            {/* Show Answers Button */}
            {!isShowAnswers && homeMenuOption == Constants.MENU_OPTION_ONE && (
              <Button
                title="Show Answers"
                buttonStyle={styles.buttonStyleWrapper}
                titleStyle={styles.buttonTitleStyleWrapper}
                onPress={() => {
                  executeShowAnswersButton();
                }}
              />
            )}

            {/* Show ALL Answers Button */}
            {!isShowAnswers && homeMenuOption == Constants.MENU_OPTION_TWO && (
              <Button
                title="Show ALL Answers"
                buttonStyle={styles.buttonStyleWrapper}
                titleStyle={styles.buttonTitleStyleWrapper}
                disabled={
                  selectedQuestionIndex >= questionTracker.length - 1
                    ? false
                    : true
                }
                onPress={() => {
                  executeShowAllAnswersButton();
                }}
              />
            )}

            {/* Hide Answers Button */}
            {isShowAnswers && (
              <Button
                title="Hide Answers"
                buttonStyle={styles.buttonStyleWrapper}
                titleStyle={styles.buttonTitleStyleWrapper}
                onPress={() => {
                  executeHideAnswersButton();
                }}
                disabled={
                  isShowAnswers && homeMenuOption == Constants.MENU_OPTION_TWO
                    ? true
                    : false
                }
              />
            )}

            {/* Prev Button */}
            <View style={styles.leftButtonsContainerWrapper}>
              <Button
                title={
                  isShowAnswers && homeMenuOption == Constants.MENU_OPTION_TWO
                    ? "Back"
                    : "Prev"
                }
                disabled={
                  selectedQuestionIndex && selectedQuestionIndex > 0
                    ? false
                    : true
                }
                buttonStyle={styles.buttonStyleWrapper}
                titleStyle={styles.buttonTitleStyleWrapper}
                containerStyle={{ marginRight: 8, width: 80 }}
                onPress={() => {
                  executePrevButton();
                }}
              />

              {/* Next Button */}
              {!(
                isShowAnswers && homeMenuOption == Constants.MENU_OPTION_TWO
              ) && (
                <Button
                  title="Next"
                  disabled={
                    selectedQuestionIndex < questionTracker.length - 1
                      ? false
                      : true
                  }
                  buttonStyle={styles.buttonStyleWrapper}
                  titleStyle={styles.buttonTitleStyleWrapper}
                  containerStyle={{ width: 80 }}
                  onPress={() => {
                    executeNextButton();
                  }}
                />
              )}
            </View>
          </View>

          {/* Show Score */}
          {showScore()}

          {/* Done  Text/Label Indicator */}
          {((homeMenuOption == Constants.MENU_OPTION_ONE &&
            selectedQuestionIndex >= questionTracker.length - 1) ||
            (homeMenuOption == Constants.MENU_OPTION_TWO && isShowAnswers)) && (
            <TouchableOpacity
              style={styles.doneTextLabelContainerWrapper}
              onPress={() => {
                navigation.navigate("HomeScreen");
              }}
            >
              <Text style={styles.doneTextWrapper}>
                DONE! Click home Icon or Click Here to go back to Main Menu
              </Text>
            </TouchableOpacity>
          )}

          {/* Keyboard Tip Key */}
          <View style={{ marginTop: 50, marginLeft: 20, marginBottom: 50 }}>
            <Text>Tips for Using Web:</Text>
            <View style={{ marginTop: 10, marginLeft: 20 }}>
              <Text>Press 'q' to execute show or hide answers</Text>
              <Text>Press 'w' to execute prev button</Text>
              <Text>Press 'e' to execute next button</Text>
            </View>
          </View>
        </SafeAreaView>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default QuestionAnswerScreen;
