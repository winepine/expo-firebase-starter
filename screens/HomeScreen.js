import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Button,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import FirstRoute from "../components/MainScreen";
//@ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
import CarCard from "../components/VehiclesScreen/CarCard";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useHouseDetails } from "../contexts/useHouseData";
const FourthRoute = () => {
  const { navigate } = useNavigation();
  const { house } = useHouseDetails();
  console.log(house.vehicles);
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
        Profile
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        {house.residents.map((resident, idx) => (
          <TouchableHighlight
            style={styles.card}
            // onPress={() => navigate("AddVehicleScreen", {})}
            underlayColor="#ebebeb"
          >
            <LinearGradient
              colors={["#98A398", "#48CB78", "#5A865A"]}
              style={styles.gradient}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...styles.title, fontSize: 24 }}>
                  {resident.name}
                </Text>
                <Text style={styles.title}>{resident.cnic}</Text>
              </View>
            </LinearGradient>
          </TouchableHighlight>
        ))}
        <TouchableHighlight
          style={styles.card}
          onPress={() => navigate("AddResidentScreen", {})}
          underlayColor="#ebebeb"
        >
          <LinearGradient
            colors={["#68F391", "#489B78", "#2F855A"]}
            style={styles.gradient}
          >
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
        </TouchableHighlight>
      </View>
    </View>
  );
};
const SecondRoute = () => {
  const { navigate } = useNavigation();
  const { house } = useHouseDetails();
  console.log(house.vehicles);
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
        Profile
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        {house.vehicles.map((vehicle, idx) => (
          <CarCard
            plate={vehicle.numberplate}
            description={vehicle.name}
            car={"Car/Bike"}
            type={"car"}
            key={idx}
          />
        ))}
        <TouchableHighlight
          style={styles.card}
          onPress={() => navigate("AddVehicleScreen", {})}
          underlayColor="#ebebeb"
        >
          <LinearGradient
            colors={["#68D391", "#48BB78", "#2F855A"]}
            style={styles.gradient}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="add-circle" size={24} color="white" />

              <Text style={styles.title}>{"Add Vehicle"}</Text>
            </View>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    </View>
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
      <Button title="Logout" onPress={() => navigate("Login", {})} />
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  fourth: FourthRoute,
  third: ThirdRoute,
});

const renderTabBar = (props: any) => (
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
