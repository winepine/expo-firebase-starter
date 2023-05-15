import { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AlertSos = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginHorizontal: 2,
        marginTop: 2,
        //   height: 100,
      }}
    >
      <TouchableHighlight
        style={{ ...styles.card, width: "94%", backgroundColor: "#E53E3E" }}
        //   onPress={onPress}
        underlayColor="#aaa"
        onPress={() => setModalVisible(true)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View style={styles.flexCenterIcons}>
            <Ionicons name={"alert-circle"} size={24} color={"white"} />

            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                textAlign: "center",
                color: "white",
              }}
            >
              Alert SOS
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        presentationStyle="overFullScreen"
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are You Sure You Want To Send SOS Signal?
            </Text>
            <Text
              style={{
                color: "#E53E3E",
                textAlign: "center",
              }}
            >
              Proceeding by clicking confirm will send a SOS signal to all the
              security guards in your society. Authorities will be alerted and
              will be on their way to your location as soon as possible. Please
              make sure you are in a safe place before proceeding.
            </Text>
            <Pressable
              style={[
                styles.button,
                styles.buttonClose,
                { marginTop: 30, backgroundColor: "#E53E3E" },
              ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Proceed</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose, { marginTop: 5 }]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    width: "47%",
    marginBottom: 5,
    marginTop: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    padding: 20,
    height: 100,
    // marginLeft: 5,
  },
  flexCenterIcons: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    // backgroundColor: "green",
    // marginHorizontal: 50,
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,

    // marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  button: {
    // borderRadius: 20,
    padding: 12,
    // width: 100,
    width: 300,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#3182CE",
  },
  buttonClose: {
    backgroundColor: "#3182CE",
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
});
export default AlertSos;
