import { ScrollView, View } from "react-native";
import { defaultGreen } from "../../constants/colors";
import Header from "../Header";
import SButton from "../SButton";
import ScreenContainer from "../ScreenContainer";
import StaffBox from "./StaffBox";
import { useHouseDetails } from "../../contexts/useHouseData";
import { useEffect, useState } from "react";
import getHouseStaff from "../../services/getHouseStaff";

const ManageStaff = () => {
  const { house } = useHouseDetails();
  const [houseStaff, setHouseStaff] = useState([]);
  console.log({ house });
  const getAllHouseStaff = async () => {
    const staff = await getHouseStaff(house.house_no, house.block);
    setHouseStaff(staff);
  };
  useEffect(() => {
    getAllHouseStaff();
  });
  return (
    <ScreenContainer>
      <ScrollView>
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
          {houseStaff.map((staff, idx) => (
            <StaffBox
              name={staff.name}
              cnic={staff.cnic}
              contact={staff.contact_no}
              image={staff.image}
              id={staff.id}
              key={idx}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default ManageStaff;
