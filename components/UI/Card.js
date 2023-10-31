import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4, //specific to android
    shadowColor: "black", //specific to ios
    shadowOffset: { width: 0, height: 2 }, //specific to ios
    shadowRadius: 6, //specific to ios
    shadowOpacity: 0.25, //specific to ios
  },
});

export default Card;
