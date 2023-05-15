import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const DeliveryBox = ({ name, description, status }) => {
  return (
    <LinearGradient
      colors={
        status == "active"
          ? ["#9B2C2C", "#C53030", "#F56565"]
          : ["#1A365D", "#2B6CB0", "#63B3ED", "#4299E1"]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* <View style={styles.container}> */}
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.rightContainer}>
        {status == "active" ? (
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "#F56565" }}
          >
            {/* <Ionicons name="close-sharp" size={24} color="white" /> */}
            <Text
              style={{
                color: "white",
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
      {/* </View> */}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4299E1",
    borderWidth: 0.5,
    borderColor: "#ddd",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
  },
  leftContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 14,
    // color: "#666666",
    // marginTop: 2,
    fontWeight: "300",
    color: "white",
  },
  button: {
    backgroundColor: "#48BB78",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 2,
  },
});
export default DeliveryBox;
