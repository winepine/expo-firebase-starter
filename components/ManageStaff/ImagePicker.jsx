import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
// import { Permission } from "react-native";
// import { usePermissions } from "expo-permissions";
// import { Camera } from "expo-camera";
// import  Permission  from "expo-permissions";
import Ionicons from "react-native-vector-icons/Ionicons";

import * as ImagePickerExpo from "expo-image-picker";
const ImagePickerHere = ({ setImageURI, imageURI }) => {
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePickerExpo.useCameraPermissions();

  const pickImage = async () => {
    let result = await ImagePickerExpo.launchImageLibraryAsync({
      mediaTypes: ImagePickerExpo.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    setImageURI(result.uri);
    // uploadImageToFirebase(result.uri);
  };
  return (
    <View>
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
      {imageURI && (
        <Image
          source={{ uri: imageURI }}
          style={{ width: 200, height: 200, borderRadius: 10 }}
        />
      )}
      <TouchableOpacity
        style={{
          backgroundColor: 'color: "rgba(0, 0, 0, 0.5)',
          padding: 10,
          marginTop: 4,
          width: 385,
          alignItems: "center",
          // marginLeft: "5%",
          marginBottom: 10,
          height: 40,
          justifyContent: "center",
          paddingLeft: 25,
          paddingRight: 25,
          borderRadius: 6,
        }}
        onPress={pickImage}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons name="cloud-upload-outline" size={24} color="white" />

          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              marginLeft: 10,
            }}
          >
            Upload Image
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ImagePickerHere;
// console.log(result.base64);
//  try {
//   const byteCharacters = decode(result.base64);
//   const byteNumbers = new Array(byteCharacters.length);
//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteNumbers[i] = byteCharacters.charCodeAt(i);
//   }
//   const byteArray = new Uint8Array(byteNumbers);
//   // console.log({ byteArray });
//   // const blob = new Blob([byteArray], { type: '"image/jpeg"' });
//   // console.log({ blob });
//   uploadBytes(storageRef, byteArray).then(snapshot => {
//     console.log("Uploaded a image!");
//   });
// } catch (e) {
//   console.log(e);
// }
// // const blob = await result.base64.blob();
// // console.log({ blob });
// if (!result.canceled) {
//   setImage(result.uri);
// }
