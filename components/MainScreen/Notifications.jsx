import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const dummyData = [
  { id: 1, title: "Lulli Entered Without Permission" },
  { id: 2, title: "Delivery Request Sent To Guard" },
  { id: 4, title: "New Vehicle Added! FDA-231" },
  { id: 3, title: "Delivery Request Sent To Guard" },
  { id: 5, title: "You Approved Abrar Hameed Entry!" },
  { id: 6, title: "New Vehicle Added! FDA-231" },
];
const Notifications = () => {
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
      {dummyData.map((item, key) => (
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
                {item.title}
              </Text>
              <Text
                style={{
                  marginLeft: 15,
                  color: "white",
                  fontWeight: "400",
                }}
              >
                2 hours ago
              </Text>
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
