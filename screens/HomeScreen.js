import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import FirstRoute from "../components/MainScreen";
//@ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
import CarCard from "../components/VehiclesScreen/CarCard";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useHouseDetails } from "../contexts/useHouseData";
import { defaultGreen } from "../constants/colors";
const FourthRoute = () => {
  const { navigate } = useNavigation();
  const { house } = useHouseDetails();
  console.log(house.vehicles);
  return (
    <ScrollView>
      <View
        style={[
          styles.scene,
          { backgroundColor: "#E6E6EA", paddingBottom: 10 },
        ]}
      >
        <Text
          style={{
            fontSize: 32,
            padding: 20,
            paddingBottom: 10,
            flexWrap: "wrap",
            fontWeight: "700",
          }}
        >
          Residents
        </Text>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#48BB78",
              padding: 10,
              marginTop: 4,
              marginLeft: "5%",
              width: "90%",
              height: 50,
              justifyContent: "center",
              paddingLeft: 25,
              paddingRight: 25,
              borderRadius: 6,
              marginBottom: 10,
            }}
            onPress={() => navigate("AddResidentScreen", {})}
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
                Add Resident
              </Text>
            </View>
          </TouchableOpacity>

          {house.residents.map((resident, idx) => (
            <TouchableHighlight
              key={idx}
              style={styles.card}
              // onPress={() => navigate("AddVehicleScreen", {})}
              underlayColor="#ebebeb"
            >
              <LinearGradient
                colors={["#4B79A1", "#283E51"]}
                style={styles.gradient}
              >
                <View
                  style={{
                    justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <Text style={{ ...styles.title, fontSize: 22 }}>
                    {resident.name}
                  </Text>
                  <Text style={{ ...styles.title, fontWeight: "400" }}>
                    {resident.cnic}
                  </Text>
                </View>
              </LinearGradient>
            </TouchableHighlight>
          ))}

          {/* <TouchableHighlight
            style={styles.card}
            onPress={() => navigate("AddResidentScreen", {})}
            underlayColor="#ebebeb"
            backgroundColor
          >
            <LinearGradient colors={[defaultGreen]} style={styles.gradient}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="add-circle" size={24} color="white" />

                <Text style={styles.title}>{"Add Resident"}</Text>
              </View>
            </LinearGradient>
          </TouchableHighlight> */}
        </View>
      </View>
    </ScrollView>
  );
};
const SecondRoute = () => {
  const { navigate } = useNavigation();
  const { house } = useHouseDetails();
  console.log(house.vehicles);

  return (
    <ScrollView>
      <View
        style={[
          styles.scene,
          { backgroundColor: "#E6E6EA", paddingBottom: 10 },
        ]}
      >
        <Text
          style={{
            fontSize: 32,
            padding: 20,
            paddingBottom: 10,
            flexWrap: "wrap",
            fontWeight: "700",
          }}
        >
          Vehicles
        </Text>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#48BB78",
              padding: 10,
              marginTop: 4,
              marginLeft: "5%",
              width: "90%",
              height: 50,
              justifyContent: "center",
              paddingLeft: 25,
              paddingRight: 25,
              borderRadius: 6,
              marginBottom: 10,
            }}
            onPress={() => navigate("AddVehicleScreen", {})}
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
                Add Vehicle
              </Text>
            </View>
          </TouchableOpacity>
          {house.vehicles.map((vehicle, idx) => (
            <CarCard
              plate={vehicle.numberplate}
              description={vehicle.name}
              car={"Car/Bike"}
              type={"car"}
              key={idx}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const ThirdRoute = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={[styles.scene, { backgroundColor: "#E6E6EA", paddingBottom: 10 }]}
    >
      <Text
        style={{
          fontSize: 32,
          padding: 20,
          paddingBottom: 10,
          flexWrap: "wrap",
          fontWeight: "700",
        }}
      >
        Settings
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'color: "rgba(0, 0, 0, 0.5)',
          padding: 10,
          marginTop: 4,
          width: "90%",
          marginLeft: "5%",
          height: 50,
          justifyContent: "center",
          paddingLeft: 25,
          paddingRight: 25,
          borderRadius: 6,
        }}
        onPress={() => navigate("Login", {})}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons name="log-out-outline" size={24} color="white" />

          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              marginLeft: 10,
            }}
          >
            Logout
          </Text>
        </View>
      </TouchableOpacity>
      {/* <Button title="Logout" /> */}
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  fourth: FourthRoute,
  third: ThirdRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#000" }}
    style={{
      backgroundColor: "white",
      height: "10%",
      borderTopColor: "#f0f0f0",
      borderWidth: 1,
    }}
    labelStyle={{ fontSize: 14 }}
    activeColor="black"
    inactiveColor="gray"
    renderIcon={({ route, focused, color }) => {
      let iconName;

      switch (route.key) {
        case "second":
          iconName = focused ? "car-sport" : "car-sport-outline";
          break;
        case "first":
          iconName = focused ? "home" : "home-outline";
          break;
        case "third":
          iconName = focused ? "settings" : "settings-outline";
          break;
        case "fourth":
          iconName = focused ? "people" : "people-outline";
          break;
        default:
          iconName = focused ? "home" : "home-outline";
          break;
      }

      return <Ionicons name={iconName} size={24} color={color} />;
    }}
  />
);

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "" },
    { key: "second", title: "" },
    { key: "fourth", title: "" },
    { key: "third", title: "" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{ width: Dimensions.get("window").width }}
      tabBarPosition="bottom"
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 60,
    // alignItems: "center",
    justifyContent: "flex-start",
  },
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

export default HomeScreen;
