import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { defaultGreen } from "../../constants/colors";
import Header from "../Header";
import SButton from "../SButton";
import ScreenContainer from "../ScreenContainer";
import DeliveryBox from "./DeliveryBox";

const DeliveryRequests = () => {
  const { navigate } = useNavigation();

  return (
    <ScreenContainer>
      <Header text="Delivery Requests" />
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
          <DeliveryBox
            name="Daraz Request"
            description="Status: Not Received"
            status="active"
          />
          <DeliveryBox
            name="Amazon Request"
            description="Status: Received"
            status="not-active"
          />
          <DeliveryBox
            name="Amazon Request #2"
            description="Status: Received"
            status="not-active"
          />
        </View>
      </View>
    </ScreenContainer>
  );
};
export default DeliveryRequests;
