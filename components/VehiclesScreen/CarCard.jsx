import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import deleteVehicles from "../../services/deleteVehicle";
import { useHouseDetails } from "../../contexts/useHouseData";
const CarCard = ({ plate, car, description, type, allVehicles, docId }) => {
  const { updateVehicles } = useHouseDetails();
  return (
    <TouchableHighlight
      style={styles.card}
      //   onPress={onPress}
      underlayColor="#ebebeb"
    >
      <LinearGradient
        colors={type == "car" ? ["#4B79A1", "#283E51"] : ["#4DA0B0", "#D39D38"]}
        style={styles.gradient}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 28, fontWeight: "800", color: "#fafafa" }}>
              {plate}
            </Text>
            <Text style={styles.title}>{car}</Text>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: "#F56565",
                padding: 6,
                marginTop: 10,
                width: 50,
                borderRadius: 5,
              }}
              onPress={async () => {
                const updatedVehicles = allVehicles.filter(
                  vehicle => vehicle.numberplate !== plate
                );
                updateVehicles(updatedVehicles);
                await deleteVehicles(allVehicles, plate, docId);
              }}
            >
              {/* <Ionicons name="close-sharp" size={24} color="white" /> */}
              <Text
                style={{
                  color: "white",
                }}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
          {type == "car" ? (
            <Image
              style={styles.logo}
              source={require("../../assets/car2.png")}
            />
          ) : (
            <Image
              style={styles.logo}
              source={require("../../assets/rickshaw.png")}
            />
          )}
        </View>
      </LinearGradient>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "5%",
    width: "90%",
    marginBottom: 10,
    marginTop: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 0,
    color: "#fafafa",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  description: {
    fontSize: 14,
    color: "#fafafa",
  },
  gradient: {
    padding: 20,
    width: "100%",
    borderRadius: 10,
  },
  logo: {
    width: 100,
    height: 70,
    opacity: 0.7,
  },
});
export default CarCard;
