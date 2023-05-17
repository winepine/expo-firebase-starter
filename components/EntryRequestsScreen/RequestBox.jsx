import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import updateRequest from "../../services/updateRequest";
import { useHouseDetails } from "../../contexts/useHouseData";
import { AddNotification } from "../../services/addNotification";
import { serverTimestamp } from "firebase/firestore";

const RequestBox = ({ name, description, object, setDummy }) => {
  const { house } = useHouseDetails();
  return (
    <LinearGradient
      colors={["#4B79A1", "#283E51"]}
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
        <TouchableOpacity
          onPress={async () => {
            await updateRequest(object.id, "Approved");
            await AddNotification({
              house_no: house.house_no,
              block: house.block,
              text: `${name} Approved Entry`,
              createdAt: serverTimestamp(),
              type: "success",
            });
            setDummy(prev => !prev);
          }}
          style={styles.button}
        >
          <Ionicons name="checkmark-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#F56565" }}
          onPress={async () => {
            await updateRequest(object.id, "Denied");
            await AddNotification({
              house_no: house.house_no,
              block: house.block,
              text: `${name} Denied Entry`,
              createdAt: serverTimestamp(),
              type: "success",
            });
            setDummy(prev => !prev);
            setDummy(prev => !prev);
          }}
        >
          <Ionicons name="close-sharp" size={24} color="white" />
        </TouchableOpacity>
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
export default RequestBox;
