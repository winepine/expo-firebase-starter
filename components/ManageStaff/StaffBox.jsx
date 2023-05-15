import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

const StaffBox = ({ name }) => {
  return (
    <LinearGradient
      colors={["#1A365D", "#2B6CB0", "#63B3ED", "#4299E1"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* <View style={styles.container}> */}
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text style={styles.description}>{"CNIC: 33010-9022981-0"}</Text>
          <Text style={styles.description}>{"Contact No. 03177800709"}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}></View>
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
export default StaffBox;
