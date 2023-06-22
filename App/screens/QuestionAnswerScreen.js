import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
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
  selectSelectedQuestionIndex,
  setQuestChoiceAnsData,
  setSelectedQuestionIndex,
} from "../slices/globalSlice";
import {
  generateUniqueRandomNumber,
  isMyAnswerEmpty,
  isMyAnswerToQuestionCorrect,
  markedChoices,
} from "../util/Util";
import Constants from "../constants/Constants";

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

  console.log("[QuestionAnswerScreen.js] Render QuestionAnswerScreen ");

  useEffect(() => {
    console.log("[QuestionAnswerScreen.js] useEffect()");
    if (questionTracker.length == 0) {
      generateUniqueRandomNumber({
        questionTracker,
        questChoiceAnsData,
        dispatch,
      });
    }
  }, []);

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
            <Entypo name="home" size={30} color={Colors.hot_pink} />
          </TouchableOpacity>

          {/*  */}
          {console.log(
            "[QuestionAnswerScreen.js]questChoiceAnsData.length: ",
            questChoiceAnsData.length
          )}

          {/* Question and Choices  */}
          {questChoiceAnsData.length > 0 &&
            questionTracker.length > 0 &&
            questChoiceAnsData.map((data, index) => {
              console.log("[QuestionAnswerScreen.js]index: ", index);
              console.log("[QuestionAnswerScreen.js]data: ", data);
              const { num } = questionTracker[selectedQuestionIndex];
              if (index == num) {
                const { id, question, choices, numInReviewer } = data;
                const id_1 = id;
                return (
                  <View key={id}>
                    {/* Question */}
                    <View style={styles.questionContainerWrapper}>
                      <Text style={styles.questionTitleWrapper}>
                        Question #{selectedQuestionIndex + 1}
                      </Text>

                      <View style={styles.questionContentWrapper}>
                        <Text style={{ fontSize: 25 }}>{question}</Text>
                      </View>
                      <Text># in Reviewer: {numInReviewer}</Text>
                    </View>

                    {/* Choice */}
                    {choices.map(({ id, choice, marked, isChoiceCorrect }) => {
                      const id_2 = id;
                      return (
                        <View key={id} style={styles.choiceWrapper}>
                          {/* Show Check Answers */}
                          {isShowAnswers && isChoiceCorrect && (
                            <Entypo name="check" size={30} color="green" />
                          )}

                          {/* Show Wrong Answers */}
                          {isShowAnswers && !isChoiceCorrect && (
                            <Entypo name="cross" size={30} color="red" />
                          )}

                          <TouchableOpacity
                            style={[
                              {
                                flexDirection: "row",
                                alignItems: "center",
                                flex: 1,
                              },
                              isShowAnswers ? { opacity: 0.4 } : { opacity: 1 },
                            ]}
                            onPress={() => {
                              markedChoices({
                                questChoiceAnsData,
                                id_1,
                                id_2,
                                marked,
                                dispatch,
                              });
                            }}
                            disabled={isShowAnswers}
                          >
                            {/* Radio Button of Choices */}
                            <RadioButton
                              value="first"
                              color={Colors.radioButton_gray}
                              uncheckedColor={Colors.radioButton_gray}
                              onPress={() => {
                                markedChoices({
                                  questChoiceAnsData,
                                  id_1,
                                  id_2,
                                  marked,
                                  dispatch,
                                });
                              }}
                              status={marked ? "checked" : "unchecked"}

                              // status="checked"
                            />

                            {/* Choices Text */}
                            <View style={styles.choiceContainerTextWrapper}>
                              <Text style={styles.choiceTextWrapper}>
                                {choice}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      );
                    })}

                    {/* Text Label if Answer is Correct or Wrong! */}

                    {isShowAnswers && (
                      <View
                        style={
                          styles.textLabelIfAnswerIsCorrectWrongContainerWrapper
                        }
                      >
                        <Text
                          style={[
                            styles.textLabelIfAnswerIsCorrectWrongWrapper,
                            isAnswerCorrect == Constants.WRONG_ANSWER
                              ? { color: "red" }
                              : { color: "green" },
                          ]}
                        >
                          {isAnswerCorrect == Constants.WRONG_ANSWER
                            ? "Your answer is Wrong!"
                            : isAnswerCorrect == Constants.HALF_CORRECT_ANSWER
                            ? "Your answer is only HALF correct"
                            : "Your answer is Correct!"}
                        </Text>
                      </View>
                    )}
                  </View>
                );
              }
            })}

          {/* Buttons */}
          <View style={styles.buttonsContainerWrapper}>
            {/* Show Answers Button */}
            {!isShowAnswers && (
              <Button
                title="Show Answers"
                buttonStyle={styles.buttonStyleWrapper}
                titleStyle={styles.buttonTitleStyleWrapper}
                onPress={() => {
                  // const newData = questChoiceAnsData.map((item) => {
                  //   if (item.id == 2) {
                  //     return { ...item, numInReviewer: 999 };
                  //   }
                  //   return item;
                  // });
                  // dispatch(setQuestChoiceAnsData(newData));

                  // console.log(
                  //   "[QuestionAnswerScreen,js] questChoiceAnsData NEW: ",
                  //   questChoiceAnsData
                  // );

                  // console.log(
                  //   "[QuestionAnswerScreen.js] isMyAnswerToQuestionCorrect: ",
                  //   isMyAnswerToQuestionCorrect({
                  //     questChoiceAnsData,
                  //     selectedQuestionIndex,
                  //     questionTracker,
                  //   })
                  // );

                  // console.log(
                  //   "[QuestionAnswerScreen.js] isMyAnswerEmpty: ",
                  //   isMyAnswerEmpty({
                  //     questChoiceAnsData,
                  //     selectedQuestionIndex,
                  //     questionTracker,
                  //   })
                  // );

                  // -->
                  if (
                    !isMyAnswerEmpty({
                      questChoiceAnsData,
                      selectedQuestionIndex,
                      questionTracker,
                    })
                  ) {
                    setAnswerCorrect(
                      isMyAnswerToQuestionCorrect({
                        questChoiceAnsData,
                        selectedQuestionIndex,
                        questionTracker,
                      })
                    );
                    setShowAnswers(true);
                  } else {
                    alert("Please select answer");
                  }
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
                  setShowAnswers(false);
                }}
              />
            )}

            {/* Prev Button */}
            <View style={styles.leftButtonsContainerWrapper}>
              <Button
                title="Prev"
                disabled={
                  selectedQuestionIndex && selectedQuestionIndex > 0
                    ? false
                    : true
                }
                buttonStyle={styles.buttonStyleWrapper}
                titleStyle={styles.buttonTitleStyleWrapper}
                containerStyle={{ marginRight: 8, width: 80 }}
                onPress={() => {
                  setShowAnswers(false);
                  dispatch(setSelectedQuestionIndex(selectedQuestionIndex - 1));
                }}
              />

              {/* Next Button */}
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
                  setShowAnswers(false);
                  dispatch(setSelectedQuestionIndex(selectedQuestionIndex + 1));
                }}
              />
            </View>
          </View>

          {/* Done  Text/Label Indicator */}
          {selectedQuestionIndex >= questionTracker.length - 1 && (
            <View style={styles.doneTextLabelContainerWrapper}>
              <Text style={styles.doneTextWrapper}>
                DONE! Click home Icon to go back to Main Menu
              </Text>
            </View>
          )}
        </SafeAreaView>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default QuestionAnswerScreen;
