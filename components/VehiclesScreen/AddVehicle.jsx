import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../Header";
import ScreenContainer from "../ScreenContainer";
import { useHouseDetails } from "../../contexts/useHouseData";
import { addVehicle } from "../../services/addVehicle";

const AddVehicleForm = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState("");
  const [numberplate, setNumberplate] = useState("");
  const { updateVehicles, house } = useHouseDetails();
  return (
    <ScreenContainer>
      <Header text="Add New Vehicle" />
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Numberplate"
          onChangeText={text => setNumberplate(text)}
          value={numberplate}
          onFocus={() => console.log("Input field focused")}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={text => setName(text)}
          value={name}
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
            await addVehicle({
              ...house,
              vehicles: [
                ...house.vehicles,
                {
                  name,
                  numberplate,
                },
              ],
            });
            updateVehicles([
              ...house.vehicles,
              {
                name,
                numberplate,
              },
            ]);

            console.log({
              name,
              numberplate,
            });
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
export default AddVehicleForm;
