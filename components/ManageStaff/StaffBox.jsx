import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import deleteStaff from "../../services/deleteStaff";

const StaffBox = ({ name, cnic, contact, image, id }) => {
  return (
    <TouchableHighlight
      style={styles.card}
      //   onPress={onPress}
      underlayColor="#ebebeb"
    >
      <LinearGradient colors={["#4B79A1", "#283E51"]} style={styles.gradient}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 28, fontWeight: "800", color: "#fafafa" }}>
              {name}
            </Text>
            <Text style={styles.title}>CNIC: {cnic}</Text>
            <Text style={styles.description}>Contact No. {contact}</Text>
          </View>

          {/* <Image style={styles.logo} source={{ uri: image }} /> */}
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "#F56565" }}
            onPress={async () => {
              await deleteStaff(id);
            }}
          >
            {/* <Ionicons name="close-sharp" size={24} color="white" /> */}
            <Text
              style={{
                color: "white",
              }}
            >
              Delete Staff
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableHighlight>
    // <LinearGradient
    //   colors={["#1A365D", "#2B6CB0", "#63B3ED", "#4299E1"]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }}
    //   style={styles.container}
    // >
    //   {/* <View style={styles.container}> */}
    //   <View style={styles.leftContainer}>
    //     <Text style={styles.name}>{name}</Text>
    //     <View
    //       style={{
    //         marginTop: 10,
    //       }}
    //     >
    //       <Text style={styles.description}>CNIC: {cnic}</Text>
    //       <Text style={styles.description}>Contact No. {contact}</Text>
    //     </View>
    //   </View>
    //   <View style={styles.rightContainer}></View>
    //   {/* </View> */}
    // </LinearGradient>
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
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    // marginLeft: "5%",
    width: "95%",
    marginBottom: 10,
    marginTop: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 0,
    color: "#fafafa",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  gradient: {
    padding: 20,
    width: "100%",
    borderRadius: 10,
  },
  logo: {
    width: 100,
    height: 70,

    borderRadius: 20,
  },
});
export default StaffBox;
