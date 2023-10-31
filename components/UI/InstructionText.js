import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

Text;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans', 
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
