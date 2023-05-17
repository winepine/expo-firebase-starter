import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";
import verifyUserLogin from "../services/verifyUserLogin";
import { useHouseDetails } from "../contexts/useHouseData";
// import { useUser } from "../../contexts/userContext";
// import { useHouseDetails } from "../contexts/useHouseData";
const LoginScreen = () => {
  const { updateHouse } = useHouseDetails();
  const [email, setEmail] = useState("");
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const [toastText, setToastText] = useState("Logged In Successfully!");
  // const { user } = useUser();
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    // console.log({ whatever });
    // return;
    setLoading(true);
    const DbUser = await verifyUserLogin(email, password);
    // await getCities();
    console.log({ DbUser });
    setLoading(false);
    let toastText = "User Not Found.";
    if (DbUser) {
      updateHouse(DbUser);
      toastText = "User Logged In Successfully.";
      if (DbUser.status === "Not Active") {
        navigate("Onboarding", {});
      } else {
        navigate("Smentry Home", {});
      }
    }
    Toast.show(toastText, {
      duration: Toast.durations.LONG,
      backgroundColor: "gray",
    });
    return;
  };
  return (
    <RootSiblingParent>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
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
              paddingBottom: 10,
              paddingTop: 2,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Modern Surveillance Solution
          </Text>
          <Text style={styles.heading}>Sign In</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={"#aaa"}
            onChangeText={text => setEmail(text)}
            value={email}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={"#aaa"}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator color="#ffffff" size="small" />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>© 2023 Javeot Technologies</Text>
        </View>
      </KeyboardAvoidingView>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#F5FCFF",
  },
  headingContainer: {
    alignItems: "center",
    marginTop: 120,
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    // fontFamily: "Courier New",
    paddingLeft: 10,
    marginTop: 100,
    paddingRight: 10,
    textAlign: "center",
    flexWrap: "wrap",
    fontWeight: "600",
  },
  formContainer: {
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    width: "80%",
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  footerContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  footerText: {
    color: "#aaa",
  },
});

export default LoginScreen;
