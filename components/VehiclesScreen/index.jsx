import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import CarCard from "./CarCard";
import { MaterialIcons } from "@expo/vector-icons";
// import { SearchBar } from "react-native-ios-kit";
const FirstRoute = () => {
  return (
    <View style={[styles.scene, { backgroundColor: "#ffffff" }]}>
      <Text
        style={{
          fontSize: 32,
          padding: 20,
          paddingBottom: 10,
          flexWrap: "wrap",
          fontWeight: "700",
        }}
      >
        {/* Abrar Hameed's Smentry Portal */}
        Smentry Home
      </Text>
      {/* <TextInput
        style={styles.input}
        //   onChangeText={setText}
        //   value={text}
        placeholder="Search"
        placeholderTextColor="#b5b5b5"
       
      /> */}
      <View style={styles.searchSection}>
        {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
        <MaterialIcons
          name="search"
          size={24}
          color="#b5b5b5"
          style={{ marginRight: 10 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          //   onChangeText={searchString => {
          //     this.setState({ searchString });
          //   }}
          underlineColorAndroid="transparent"
        />
      </View>
      <CarCard
        plate={"LRD 9041"}
        car={"Hyundai Sonata"}
        description={"Basit Saeed"}
        type={"car"}
      />
      <CarCard
        plate={"FED 841"}
        car={"Honda Civic RS Turbo"}
        description={"Abrar Hameed"}
        type={"car"}
      />
      <CarCard
        plate={"ISD 981"}
        car={"Suzuki Bolan 1993"}
        description={"Afaq Jamshaid"}
        type={"rickshaw"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 60,
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  searchSection: {
    // flex: 1,
    // marginLeft: 10,
    margin: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#f1f1f1",
    color: "#424242",
  },
});

export default FirstRoute;
