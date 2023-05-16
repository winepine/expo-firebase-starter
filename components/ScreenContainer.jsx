import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";

const ScreenContainer = ({ children }) => (
  <View
    style={[styles.scene, { backgroundColor: "#E6E6EA", paddingBottom: 10 }]}
  >
    {children}
  </View>
);
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "flex-start",
  },
});
export default ScreenContainer;
