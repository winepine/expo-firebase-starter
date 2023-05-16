import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../Header";
import ScreenContainer from "../ScreenContainer";
import addDeliveryRequest from "../../services/addDeliveryRequest";
import { useHouseDetails } from "../../contexts/useHouseData";
const AddDeliveryForm = () => {
  const { navigate } = useNavigation();
  const { house } = useHouseDetails();
  const [storeName, setStoreName] = useState("");
  return (
    <ScreenContainer>
      <Header text="Request A New Delivery" />
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholderTextColor={"#aaa"}
          style={styles.input}
          placeholder="Store Name"
          onChangeText={text => setStoreName(text)}
          // value={email}
          onFocus={() => console.log("Input field focused")}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#4299E1",
            padding: 10,

            width: "90%",
            paddingLeft: 25,
            paddingRight: 25,
            borderRadius: 6,
          }}
          onPress={async () => {
            if (storeName === "") return alert("Please enter a store name");
            // if special characters are present in store name
            if (storeName.match(/[^a-zA-Z0-9 ]/g))
              return alert("Please enter a valid store name");

            await addDeliveryRequest({
              store_name: storeName,
              house_no: {
                house: house.house_no,
                block: house.block,
              },
              status: "Pending",
              dismissed: false,
              timestamp: serverTimestamp(),
            });
            navigate("DeliveryRequestsScreen", {});
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
      </View>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 60,
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
export default AddDeliveryForm;
