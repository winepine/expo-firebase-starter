import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useHouseDetails } from "../contexts/useHouseData";
import { updatePassword } from "../services/updatePassword";
const Onboarding = () => {
  const { navigate } = useNavigation();
  const { house } = useHouseDetails();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../assets/car.png")}
        style={styles.image}
      > */}
      <View style={styles.headingContainer}>
        <Text
          style={{
            fontFamily: "Courier New",
            fontSize: 26,
            fontWeight: "400",
          }}
        >
          S M E N T R Y
        </Text>
        <Text
          style={{
            //   paddingBottom: 10,
            paddingTop: 10,
            padding: 40,
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Welcome to Smentry
          {"\n"} Take control of your app permissions and ensure maximum
          security. Monitor and manage all permissions with ease.
        </Text>
        <Text>Owner Name: {house.owner_name}</Text>
        <Text
          style={{
            marginBottom: 10,
          }}
        >
          Address: {house.house_no} - {house.block}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text>Create A New Password</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}
          placeholder="Password"
          placeholderTextColor={"#aaa"}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            // margin: 10,
          }}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor={"#aaa"}
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'color: "rgba(0, 0, 0, 0.5)',
            padding: 10,
            marginTop: 10,
            width: 300,
            // marginLeft: "5%",
            height: 40,
            justifyContent: "center",
            paddingLeft: 25,

            paddingRight: 25,
            borderRadius: 6,
          }}
          onPress={async () => {
            setLoading(true);
            if (password !== confirmPassword) {
              alert("Passwords do not match");
              return;
            }
            if (password.length < 6) {
              alert("Password must be at least 6 characters long");
              return;
            }
            await updatePassword(password, house.id);
            setLoading(false);
            navigate("Smentry Home", {});
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" size="small" />
            ) : (
              <Text style={styles.buttonText}>Create Account</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  headingContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#48CB78",
    padding: 10,
    borderRadius: 10,
    width: 200,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Onboarding;
