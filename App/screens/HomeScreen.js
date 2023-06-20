import { Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

import styles from "../stylesheets/HomeScreen.style";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="View answers as you go"
        // raised
        containerStyle={styles.optionContainerStyle}
        buttonStyle={styles.optionButtonStyle}
        titleStyle={styles.optionTitleStyle}
        onPress={() => {
          navigation.navigate("QuestionAnswerScreen");
        }}
      />
      <Button
        title="View answers after marking all questions"
        // raised
        containerStyle={styles.optionContainerStyle}
        buttonStyle={styles.optionButtonStyle}
        titleStyle={styles.optionTitleStyle}
      />
    </View>
  );
};

export default HomeScreen;
