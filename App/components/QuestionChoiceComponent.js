import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "../stylesheets/QuestionChoiceComponent.style";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHomeMenuOption,
  selectQuestChoiceAnsData,
  selectQuestionTracker,
  selectSelectedQuestionIndex,
} from "../slices/globalSlice";
import Constants from "../constants/Constants";
import Colors from "../constants/Color";
import { RadioButton } from "react-native-paper";
import { isMyAnswerToQuestionCorrect_V2, markedChoices } from "../util/Util";
import { Entypo } from "@expo/vector-icons";

const QuestionChoiceComponent = ({ isShowAnswers, selectedQuestionIndex }) => {
  const dispatch = useDispatch();
  const homeMenuOption = useSelector(selectHomeMenuOption);
  const questChoiceAnsData = useSelector(selectQuestChoiceAnsData);
  const questionTracker = useSelector(selectQuestionTracker);

  return (
    <View style={styles.container}>
      {/* Question and Choices  */}
      {questChoiceAnsData.length > 0 &&
        questionTracker.length > 0 &&
        questChoiceAnsData.map((data, index) => {
          console.log("[QuestionAnswerScreen.js]index: ", index);
          console.log("[QuestionAnswerScreen.js]data: ", data);
          const { num } = questionTracker[selectedQuestionIndex];
          if (index == num) {
            // if (true) {
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
                          isShowAnswers
                            ? homeMenuOption == Constants.MENU_OPTION_ONE
                              ? { opacity: 0.4 }
                              : { opacity: 0.9 }
                            : { opacity: 1 },
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
                          <Text style={styles.choiceTextWrapper}>{choice}</Text>
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
                        isMyAnswerToQuestionCorrect_V2({
                          choices,
                        }) == Constants.WRONG_ANSWER
                          ? { color: "red" }
                          : { color: "green" },
                      ]}
                    >
                      {isMyAnswerToQuestionCorrect_V2({
                        choices,
                      }) == Constants.WRONG_ANSWER
                        ? "Your answer is Wrong!"
                        : isMyAnswerToQuestionCorrect_V2({
                            choices,
                          }) == Constants.HALF_CORRECT_ANSWER
                        ? "Your answer is only HALF correct"
                        : "Your answer is Correct!"}
                    </Text>
                  </View>
                )}
              </View>
            );
          }
        })}
    </View>
  );
};

export default QuestionChoiceComponent;
