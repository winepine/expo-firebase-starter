import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { db } from "../../config/firebase";
import { useHouseDetails } from "../../contexts/useHouseData";
const dummyData = [];
const Notifications = () => {
  const [Notifications, setNotifications] = useState([]);
  const { house } = useHouseDetails();
  useEffect(() => {
    const colRef = collection(db, "notifications");
    const DBQuery = query(colRef, orderBy("createdAt", "desc"));
    const unsub = onSnapshot(DBQuery, snapshot => {
      let Notifications = [];
      snapshot.docs.forEach(doc => {
        if (
          doc.data().house_no == house.house_no &&
          doc.data().block == house.block
        ) {
          Notifications.push(doc.data());
        }
      });

      setNotifications(Notifications);
    });
    return unsub;
  }, []);
  return (
    <View
      style={{
        backgroundColor: "#fafafa",
        marginTop: 10,
        borderRadius: 20,
        minHeight: 500,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "center",
          // marginLeft: 10,
          padding: 20,
          paddingBottom: 20,
          paddingTop: 30,
        }}
      >
        <Ionicons name="notifications" size={24} color="black" />
        <Text
          style={{
            fontSize: 28,
            flexWrap: "wrap",
            fontWeight: "600",
            marginLeft: 10,
          }}
        >
          Notifications
        </Text>
      </View>
      {Notifications.length === 0 && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            padding: 20,
            paddingBottom: 20,
            paddingTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              flexWrap: "wrap",
              fontWeight: "600",
              marginLeft: 10,
              color: "#718096",
            }}
          >
            No Notifications :)
          </Text>
        </View>
      )}
      {Notifications.map((item, key) => (
        <TouchableHighlight
          key={key}
          style={{
            borderRadius: 10,
            marginBottom: 3,

            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
            minHeight: 60,
            alignItems: "center",

            justifyContent: "flex-start",
            width: "94%",
            backgroundColor: "#48BB78",
            flexDirection: "row",
            marginLeft: 10,
            marginTop: 2,
            padding: 10,
          }}
          //   onPress={onPress}
          underlayColor="#aaa"
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Ionicons name={"information-circle"} size={18} color={"white"} />
            <View>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 16,
                  flexWrap: "wrap",
                  fontWeight: "600",
                  textAlign: "left",
                  color: "white",
                  maxWidth: 280,
                }}
              >
                {item.text}
              </Text>
              {/* <Text
                style={{
                  marginLeft: 15,
                  color: "white",
                  fontWeight: "400",
                }}
              >
                {new Date(item.createdAt.seconds * 1000)
                  .toString()
                  .substring(4, 25)}
              </Text> */}
            </View>
          </View>
        </TouchableHighlight>
        //   <View key={item.id} style={{ padding: 10 }}>
        //     <Text>{item.title}</Text>
        //   </View>
      ))}
    </View>
  );
};

export default Notifications;
