import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useHouseDetails } from "../../contexts/useHouseData";

const InviteNEntry = () => {
  const { navigate } = useNavigation();
  const { house } = useHouseDetails();
  console.log({ inhouse: house });
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        //   height: 100,
        marginTop: 15,
        marginHorizontal: 5,
      }}
    >
      <TouchableHighlight
        style={{ ...styles.card, backgroundColor: "#3182CE" }}
        onPress={() => navigate("Enter Visitor Details", {})}
        underlayColor="#aaa"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View style={styles.flexCenterIcons}>
            <Ionicons name={"add-circle"} size={24} color={"white"} />

            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                textAlign: "center",
                color: "white",
              }}
            >
              Invite Visitors
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={{ ...styles.card, backgroundColor: "#3182CE" }}
        //   onPress={onPress}
        onPress={() => navigate("EntryRequestsScreen", {})}
        underlayColor="#aaa"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.flexCenterIcons}>
            <Ionicons name={"enter"} size={24} color={"white"} />

            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                alignItems: "center",
                textAlign: "center",
                color: "white",
              }}
            >
              Entry Requests
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    width: "47%",
    marginBottom: 5,
    marginTop: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    padding: 20,
    height: 100,
    // marginLeft: 5,
  },
  flexCenterIcons: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default InviteNEntry;
