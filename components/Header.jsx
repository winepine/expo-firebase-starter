import { StyleSheet, Text } from "react-native";

const Header = ({ text }) => <Text style={styles.headerText}>{text}</Text>;
const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    padding: 20,
    paddingBottom: 10,
    flexWrap: "wrap",
    fontWeight: "700",
  },
});
export default Header;
