import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
// import { Permission } from "react-native";
// import { usePermissions } from "expo-permissions";
// import { Camera } from "expo-camera";
// import  Permission  from "expo-permissions";
const ImagePicker = () => {
  // const [image, setImage] = useState(null);
  // const [status, requestPermission] = ImagePickerExpo.useCameraPermissions();
  // const pickImage = async () => {
  //   // const { status } = await Permissions.use(Permissions.CAMERA);

  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePickerExpo.launchImageLibraryAsync({
  //     mediaTypes: ImagePickerExpo.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setImage(result.uri);
  //   }
  // };

  return (
    <View>
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )} */}
    </View>
  );
};
export default ImagePicker;
