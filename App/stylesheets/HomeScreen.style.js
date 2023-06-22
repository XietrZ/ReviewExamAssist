import { StyleSheet } from "react-native";
import Colors from "../constants/Color";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    backgroundColor: Colors.yelloww,
    flex: 1,
  },

  titleTextWrapper: {
    // backgroundColor: "red",
    textAlign: "center",
    fontSize: 35,
    fontWeight: 600,
    marginTop: 50,
    marginBottom: 15,
  },

  optionContainerStyle: {
    marginHorizontal: 37,
    marginTop: 81,
  },
  optionButtonStyle: {
    borderRadius: 20,
    backgroundColor: Colors.tiffany_blue,
    height: 70,
  },
  optionTitleStyle: {
    color: "black",
  },
});

export default styles;
