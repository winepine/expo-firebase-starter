import { View } from "react-native";
import { defaultGreen } from "../../constants/colors";
import Header from "../Header";
import SButton from "../SButton";
import ScreenContainer from "../ScreenContainer";
import StaffBox from "./StaffBox";

const ManageStaff = () => {
  return (
    <ScreenContainer>
      <Header text="Manage Staff" />
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SButton
          title="Add Staff"
          color={defaultGreen}
          route="AddStaffScreen"
        />
      </View>
      <View
        style={{
          marginTop: 10,
          width: "96%",
          marginLeft: 8,
          alignItems: "center",
        }}
      >
        <StaffBox name={"Abrar Hameed"} />
        <StaffBox name={"Bilal CR"} />
        <StaffBox name={"Hammad Amjad"} />
      </View>
    </ScreenContainer>
  );
};

export default ManageStaff;
