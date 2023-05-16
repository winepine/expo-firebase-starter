import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import deleteDoc from "../../services/deleteDoc";

const DeliveryBox = ({ name, description, status, docId }) => {
  return (
    <LinearGradient
      colors={
        status == "Pending"
          ? ["#4B79A1", "#283E51"]
          : status == "Cancelled"
          ? ["#D3494E", "#D3494E"]
          : ["#2C7744", "#2C7744"]
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
        {status == "Pending" ? (
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "#F56565" }}
            onPress={async () => {
              await deleteDoc(docId);
            }}
          >
            {/* <Ionicons name="close-sharp" size={24} color="white" /> */}
            <Text
              style={{
                color: "white",
              }}
            >
              Cancel Request
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
