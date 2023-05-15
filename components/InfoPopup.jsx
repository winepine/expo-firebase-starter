import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const InfoPopup = ({ infoText }) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <LinearGradient
        colors={["#4299E1", "#3182CE", "#2B6CB0"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Ionicons name="help-circle" size={24} color="white" />

        <Text
          style={{
            color: "white",
            marginLeft: 10,
          }}
        >
          {infoText}
        </Text>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4299E1",
    borderWidth: 0.5,
    borderColor: "#ddd",
    padding: 20,
    // marginHorizontal: 10,
    // marginVertical: 2,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    width: "90%",
  },
});
export default InfoPopup;
