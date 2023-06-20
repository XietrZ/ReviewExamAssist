import { StyleSheet } from "react-native";
import Colors from "../data/Color";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    backgroundColor: Colors.yelloww,
    flex: 1,
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
