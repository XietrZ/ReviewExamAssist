import { Alert, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Button } from "@rneui/themed";

import styles from "../stylesheets/HomeScreen.style";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectQuestChoiceAnsData,
  selectQuestionTracker,
  setHomeMenuOption,
  setQuestChoiceAnsData,
  setQuestionTracker,
  setScoreTracking,
  setSequenceChoices,
  setSequenceQuestions,
} from "../slices/globalSlice";
import sapCertificationQuestAnsData from "../data/SapCertificationQuestionAnswerData";
import Constants from "../constants/Constants";
import tempData from "../data/TempData";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const questionTracker = useSelector(selectQuestionTracker);
  const questChoiceAnsData = useSelector(selectQuestChoiceAnsData);
  const initialize = () => {
    // ***********************OPTIONS********************************************

    // --> Set what question data to show
    // dispatch(setQuestChoiceAnsData(sapCertificationQuestAnsData));
    dispatch(setQuestChoiceAnsData(tempData));

    //--> Set if questions will show randomly or default
    dispatch(setSequenceQuestions(Constants.SEQUENCE_RANDOM));
    // dispatch(setSequenceQuestions(Constants.SEQUENCE_DEFAULT));

    //--> Set if choices will show randomly or default
    dispatch(setSequenceChoices(Constants.SEQUENCE_RANDOM));
    // dispatch(setSequenceChoices(Constants.SEQUENCE_DEFAULT));

    // ***********************OPTIONS********************************************

    // -->
    dispatch(setQuestionTracker([]));

    // -->
    dispatch(setScoreTracking(0));

    // -->
    navigation.navigate("QuestionAnswerScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextWrapper}>ReviewExamAssist</Text>
      <Button
        title="View answers as you go"
        // raised
        containerStyle={styles.optionContainerStyle}
        buttonStyle={styles.optionButtonStyle}
        titleStyle={styles.optionTitleStyle}
        onPress={() => {
          // -->
          dispatch(setHomeMenuOption(Constants.MENU_OPTION_ONE));

          initialize();
        }}
      />
      <Button
        title="View answers after marking all questions"
        // raised
        containerStyle={styles.optionContainerStyle}
        buttonStyle={styles.optionButtonStyle}
        titleStyle={styles.optionTitleStyle}
        onPress={() => {
          dispatch(setHomeMenuOption(Constants.MENU_OPTION_TWO));

          initialize();
        }}
      />
    </View>
  );
};

export default HomeScreen;
