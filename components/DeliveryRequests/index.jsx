import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import { defaultGreen } from "../../constants/colors";
import Header from "../Header";
import SButton from "../SButton";
import ScreenContainer from "../ScreenContainer";
import DeliveryBox from "./DeliveryBox";
import getDeliveryRequests from "../../services/getDeliveryRequests";
import { useHouseDetails } from "../../contexts/useHouseData";
import { useEffect, useState } from "react";
const DeliveryRequests = () => {
  const { navigate } = useNavigation();
  const [refresh, setRefresh] = useState(false);
  const { house } = useHouseDetails();
  const [requests, setRequests] = useState([]);
  const getDeliveryRequestsHere = async () => {
    let requests = await getDeliveryRequests(house.house_no, house.block);
    // sort requests timewise
    let sorted = requests.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

    setRequests(sorted);
  };
  useEffect(() => {
    getDeliveryRequestsHere();
  });
  return (
    <ScreenContainer>
      <Header text="Delivery Requests" />
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SButton
            title="Request A Delivery"
            color={defaultGreen}
            route="AddDeliveryScreen"
          />
          <View
            style={{
              marginTop: 10,
              width: "96%",
              marginLeft: 8,
              alignItems: "center",
            }}
          >
            {requests.map((request, index) => {
              // if (request.status === "Pending") {
              return (
                <DeliveryBox
                  key={index}
                  name={request.store_name}
                  docId={request.id}
                  description={`Status: ${request.status}`}
                  status={request.status}
                />
              );
              // }
            })}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};
export default DeliveryRequests;
