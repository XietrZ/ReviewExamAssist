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
} from "../slices/globalSlice";
import sapCertificationQuestAnsData from "../data/SapCertificationQuestionAnswerData";
import Constants from "../constants/Constants";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const questionTracker = useSelector(selectQuestionTracker);
  const questChoiceAnsData = useSelector(selectQuestChoiceAnsData);

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

          // -->
          dispatch(setQuestChoiceAnsData(sapCertificationQuestAnsData));

          // // -->
          dispatch(setQuestionTracker([]));
          // if (
          //   questionTracker &&
          //   questChoiceAnsData &&
          //   questionTracker.length == questChoiceAnsData.length
          // ) {
          //   dispatch(setQuestionTracker([]));
          // } else {
          //   dispatch(setQuestionTracker([...questionTracker, { num: 1 }]));
          // }

          // -->

          // -->
          navigation.navigate("QuestionAnswerScreen");
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

          // -->
          dispatch(setQuestChoiceAnsData(sapCertificationQuestAnsData));

          // // -->
          dispatch(setQuestionTracker([]));

          // alert("Coming soon...");
          navigation.navigate("QuestionAnswerScreen");
        }}
      />
    </View>
  );
};

export default HomeScreen;
