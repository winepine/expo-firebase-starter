import { ScrollView, StyleSheet, Text, View } from "react-native";
import AlertSos from "./AlertSos";
import InviteNEntry from "./InviteNEntry";
import ManageNDelivery from "./ManageNDelivery";
import Notifications from "./Notifications";

const FirstRoute = () => (
  <ScrollView>
    <View
      style={[styles.scene, { backgroundColor: "#E6E6EA", paddingBottom: 10 }]}
    >
      <Text style={styles.headerText}>Smentry Home</Text>
      <InviteNEntry />
      <ManageNDelivery />
      <AlertSos />
      <Notifications />
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 60,
    justifyContent: "flex-start",
  },
  headerText: {
    fontSize: 32,
    padding: 20,
    paddingBottom: 10,
    flexWrap: "wrap",
    fontWeight: "700",
  },
});
export default FirstRoute;
