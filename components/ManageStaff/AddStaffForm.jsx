import { Button, StyleSheet, TextInput, View } from "react-native";
import Header from "../Header";
import ScreenContainer from "../ScreenContainer";
import ImagePicker from "./ImagePicker";

const AddStaffForm = () => {
  return (
    <ScreenContainer>
      <Header text="Add Staff" />
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          // onChangeText={text => setEmail(text)}
          // value={email}
          onFocus={() => console.log("Input field focused")}
        />
        <TextInput
          style={styles.input}
          placeholder="CNIC"
          // onChangeText={text => setEmail(text)}
          // value={email}
          onFocus={() => console.log("Input field focused")}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact No."
          // onChangeText={text => setEmail(text)}
          // value={email}
          onFocus={() => console.log("Input field focused")}
        />
        {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
        {/* <ImagePicker /> */}
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
export default AddStaffForm;
