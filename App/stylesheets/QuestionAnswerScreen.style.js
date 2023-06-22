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
