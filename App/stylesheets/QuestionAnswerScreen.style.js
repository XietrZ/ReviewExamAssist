import { StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Color";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  homeButtonWrapper: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
  },
  questionContainerWrapper: {
    // backgroundColor: "blue",
    height: 201,
    borderWidth: 10,
    marginTop: 10,
    marginHorizontal: 16,
    borderColor: Colors.tiffany_blue,
    marginBottom: 21,
  },
  questionTitleWrapper: {
    // backgroundColor: "red",
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 5,
    marginLeft: 5,
    alignSelf: "center",
  },

  questionContentWrapper: {
    // textAlign: "center",
    // textAlignVertical: "center",
    // backgroundColor: "red",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  choiceWrapper: {
    marginHorizontal: 19,
    // backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginBottom: 14,
  },

  choiceContainerTextWrapper: {
    backgroundColor: Colors.mint,
    borderRadius: 10,
    flex: 1,
    // height: 54,
    justifyContent: "center",
  },
  choiceTextWrapper: {
    marginLeft: 11,
    paddingVertical: 10,
    marginRight: 2,
    fontSize: 15,
  },

  textLabelIfAnswerIsCorrectWrongContainerWrapper: {
    alignItems: "center",
    paddingTop: 19,
  },

  textLabelIfAnswerIsCorrectWrongWrapper: {
    fontSize: 22,
    fontWeight: 700,
  },

  buttonsContainerWrapper: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-between",
    marginHorizontal: 22,
    marginVertical: 39,
  },

  buttonStyleWrapper: {
    borderRadius: 15,
    flex: 1,
    backgroundColor: Colors.tiffany_blue,
  },

  buttonTitleStyleWrapper: { color: "black" },

  leftButtonsContainerWrapper: {
    // flex: 1,
    flexDirection: "row",
    marginLeft: 5,
    // backgroundColor: "blue",
  },

  doneTextLabelContainerWrapper: {
    marginTop: 48,
    backgroundColor: Colors.hot_pink,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 48,
    borderRadius: 5,
    marginHorizontal: 10,
  },

  doneTextWrapper: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default styles;
