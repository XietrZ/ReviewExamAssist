import { StyleSheet } from "react-native";
import Colors from "../constants/Color";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
  },
  questionContainerWrapper: {
    // backgroundColor: "blue",
    // height: 201,
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
    marginLeft: 5,
    // alignSelf: "center",
  },

  questionContentWrapper: {
    textAlign: "center",
    // textAlignVertical: "center",
    // backgroundColor: "red",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 20,
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
});

export default styles;
