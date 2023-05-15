import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SButton = ({ title, color, route }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        padding: 10,
        marginTop: 4,
        width: "90%",
        height: 50,
        justifyContent: "center",
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 6,
      }}
      onPress={() => navigate(route, {})}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Ionicons name="add-circle" size={24} color="white" />

        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            marginLeft: 10,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default SButton;
