import { LinearGradient } from "expo-linear-gradient";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InfoPopup from "../InfoPopup";
import RequestBox from "./RequestBox";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
// import { useHouseDetails } from "../../contexts/useHouseData";
import getVisitorRequests from "../../services/getVisitorRequests";
import { useHouseDetails } from "../../contexts/useHouseData";

const EntryRequestsScreen = () => {
  const { house } = useHouseDetails();
  const [dummy, setDummy] = useState(false);
  const [requests, setRequests] = useState([]);
  console.log({ requests });
  const getRequests = async () => {
    let response = await getVisitorRequests(house.house_no, house.block);
    // filter by status
    response = response.filter(request => request.status === "Not Approved");
    console.log({ response });
    setRequests(response);
  };
  useEffect(() => {
    getRequests();
  }, [dummy]);
  return (
    <View style={[styles.scene, { backgroundColor: "#fafafa" }]}>
      <ScrollView>
        <Text
          style={{
            fontSize: 32,
            padding: 20,
            paddingBottom: 10,
            flexWrap: "wrap",
            fontWeight: "700",
          }}
        >
          Entry Requests
        </Text>
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
                maxWidth: "80%",
              }}
            >
              {"People who have requested to enter your home will appear here."}
            </Text>
          </LinearGradient>
        </View>
        {requests.length == 0 && (
          <View
            style={{
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#718096",
                fontWeight: "700",
              }}
            >
              No Requests
            </Text>
          </View>
        )}
        <View
          style={{
            marginTop: 20,
          }}
        >
          {requests.map(
            (request, index) =>
              request.status == "Not Approved" && (
                <RequestBox
                  key={index}
                  name={request.name}
                  description={request.additional}
                  object={request}
                  setDummy={setDummy}
                />
              )
          )}
          {/* <RequestBox name="Abrar Hameed" description="Plumber/Electrician" />
        <RequestBox name="Basit Saeed" description="Relative" />
        <RequestBox name="Afaq Hameed" description="Bathroom Repair" /> */}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    // paddingTop: 60,
    // alignItems: "center",
    justifyContent: "flex-start",
  },
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
    width: "95%",
  },
  input: {
    width: "90%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 8,
  },
});
export default EntryRequestsScreen;
