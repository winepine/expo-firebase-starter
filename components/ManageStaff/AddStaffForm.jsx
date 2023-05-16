import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { defaultGreen } from "../../constants/colors";
import Header from "../Header";
import ScreenContainer from "../ScreenContainer";
import ImagePicker from "./ImagePicker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AddStaffDB from "../../services/addStaff";
const storage = getStorage();
import { useHouseDetails } from "../../contexts/useHouseData";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const AddStaffForm = () => {
  const { navigate } = useNavigation();
  const [prompt, setPrompt] = useState("Submit");
  const { house } = useHouseDetails();
  const [fullName, setFullName] = useState("");
  const [cnic, setCnic] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [imageURI, setImageURI] = useState("");
  const uploadImageToFirebase = async () => {
    const storageRef = ref(storage, cnic);
    const response = await fetch(imageURI);
    const blob = await response.blob();
    const snapshot = await uploadBytes(storageRef, blob);
    const url = await getDownloadURL(snapshot.ref);
    await AddStaffDB({
      cnic,
      contact_no: contactNo,
      name: fullName,
      house_no: {
        house_no: house.house_no,
        block: house.block,
      },
      image: url,
    });
  };
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
          placeholderTextColor={"#aaa"}
          placeholder="Full Name"
          onChangeText={text => setFullName(text)}
          value={fullName}
          onFocus={() => console.log("Input field focused")}
        />

        <TextInput
          style={styles.input}
          placeholder="CNIC"
          placeholderTextColor={"#aaa"}
          onChangeText={text => setCnic(text)}
          value={cnic}
          onFocus={() => console.log("Input field focused")}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact No."
          placeholderTextColor={"#aaa"}
          onChangeText={text => setContactNo(text)}
          value={contactNo}
          onFocus={() => console.log("Input field focused")}
        />
        {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}

        <ImagePicker setImageURI={setImageURI} imageURI={imageURI} />
        <TouchableOpacity
          style={{
            backgroundColor: "#48BB78",
            padding: 10,

            width: "90%",
            paddingLeft: 25,
            paddingRight: 25,
            borderRadius: 6,
          }}
          onPress={async () => {
            // name cannot contain numbers
            const regex = /\d/g;
            if (regex.test(fullName)) {
              alert("Name cannot contain numbers");
              return;
            }
            if (!fullName || !cnic || !contactNo || !imageURI) {
              alert("Please fill all the fields");
              return;
            }
            // cnic must be 13 digits
            if (cnic.length !== 13 || !regex.test(cnic)) {
              alert("CNIC must be 13 digits");
              return;
            }
            // contact no must be 11 digits and cannot contain letters
            if (contactNo.length !== 11 || !regex.test(contactNo)) {
              alert("Contact No. must be 11 digits and cannot contain letters");
              return;
            }

            setPrompt("Submitting...");
            await uploadImageToFirebase();
            navigate("Smentry Home", {});
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
            }}
          >
            {prompt}
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
export default AddStaffForm;
