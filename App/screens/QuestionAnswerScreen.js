import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "../stylesheets/QuestionAnswerScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Text } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import Colors from "../data/Color";
import sapCertificationQuestAnsData from "../data/SapCertificationQuestionAnswerData";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const QuestionAnswerScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState("first");
  const viewData = [{ id: 1 }];
  const questAnsData = sapCertificationQuestAnsData;

  console.log("[QuestionAnswerScreen.js] questAnsData: ", questAnsData[0].id);
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
            "[QuestionAnswerScreen.js]questAnsData.length: ",
            questAnsData.length
          )}

          {/* Question and Choices  */}
          {questAnsData.length > 0 &&
            questAnsData.map(({ question, choices }) => {
              return (
                <View>
                  {/* Question */}
                  <View style={styles.questionContainerWrapper}>
                    <Text style={styles.questionTitleWrapper}>Question</Text>
                    <View style={styles.questionContentWrapper}>
                      <Text style={{ fontSize: 25 }}>{question}</Text>
                    </View>
                  </View>

                  {/* Choice */}
                  {choices.map(({ choice, marked, isChoiceCorrect }) => {
                    return (
                      <View style={styles.choiceWrapper}>
                        <Entypo name="cross" size={30} color="red" />
                        <Entypo name="check" size={30} color="green" />
                        <TouchableOpacity
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            flex: 1,
                          }}
                        >
                          <RadioButton
                            value="first"
                            color={Colors.radioButton_gray}
                            uncheckedColor={Colors.radioButton_gray}
                            onPress={() => setChecked("first")}
                            // status={checked === "first" ? "checked" : "unchecked"}
                            status="unchecked"
                            // status="checked"
                          />
                          <View style={styles.choiceContainerTextWrapper}>
                            <Text style={styles.choiceTextWrapper}>
                              {choice}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              );
            })}

          {/* Buttons */}
        </SafeAreaView>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default QuestionAnswerScreen;
