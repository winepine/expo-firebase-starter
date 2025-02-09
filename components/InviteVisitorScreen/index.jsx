import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import InfoPopup from "../InfoPopup";
import { useState } from "react";
import { addInvite } from "../../services/addInvite";
import { useHouseDetails } from "../../contexts/useHouseData";
import { AddNotification } from "../../services/addNotification";
import { createdAt } from "expo-updates";
import { serverTimestamp } from "firebase/firestore";

const InviteVisitorScreen = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState("");
  const [numberplate, setNumberplate] = useState("");
  const { house } = useHouseDetails();
  return (
    <View style={[styles.scene, { backgroundColor: "#ffffff" }]}>
      <Text
        style={{
          fontSize: 32,
          padding: 20,
          paddingBottom: 10,
          flexWrap: "wrap",
          fontWeight: "700",
        }}
      >
        Enter Visitor Details
      </Text>
      <InfoPopup infoText="You can invite visitors to your home by entering their details below." />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            placeholderTextColor={"#aaa"}
            style={styles.input}
            placeholder="Name"
            onChangeText={text => setName(text)}
            value={name}
            onFocus={() => console.log("Input field focused")}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={"#aaa"}
            placeholder="Numberplate (Optional)"
            onChangeText={text => setNumberplate(text)}
            value={numberplate}
            onFocus={() => console.log("Input field focused")}
          />
        </View>
        <View
          style={{
            marginVertical: 16,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={async () => {
              // use this regex for matching numberplates ^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$

              if (name.match(/[0-9]/g))
                return alert("Please enter a valid name");
              if (name === "") return alert("Please enter a name");
              await AddNotification({
                house_no: house.house_no,
                block: house.block,
                text: `${name} Invited by ${house.house_no}-${house.block}`,
                createdAt: serverTimestamp(),
                type: "success",
              });
              await addInvite({
                name,
                numberplate,
                house_no: {
                  block: house.block,
                  house: house.house_no,
                },
                additional: "",
              });

              navigate("Smentry Home", {});
            }}
            style={{
              backgroundColor: "#48BB78",
              padding: 10,
              width: "90%",
              paddingLeft: 25,
              paddingRight: 25,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={{
              backgroundColor: "#F56565",
              padding: 10,
              marginTop: 4,
              width: "90%",
              paddingLeft: 25,
              paddingRight: 25,
              borderRadius: 6,
            }}
            onPress={() => navigate("Smentry Home", {})}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
              }}
            >
              Back
            </Text>
          </TouchableOpacity> */}
        </View>
      </KeyboardAvoidingView>
      {/* <Button title="Back" } /> */}
      {/* <Button title="Submit" /> */}
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
export default InviteVisitorScreen;
