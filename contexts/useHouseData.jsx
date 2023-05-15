import { createContext, useContext, useReducer } from "react";
import { reducer } from "./house-reducer";
const HouseContext = createContext({ house: {} });
const INITAL_STATE = {
  block: "",
  createdAt: new Date(),
  house_no: "",
  owner_contact: "",
  owner_name: "",
  password: "",
  residents: [],
  status: "",
  vehicles: [],
  id: "",
};
const useHouse = (initalData = INITAL_STATE) => {
  const [state, dispatch] = useReducer(reducer, initalData);
  const updateResidents = residents => {
    dispatch({ type: "UPDATE_RESIDENTS", payload: residents });
  };
  const updateVehicles = vehicles => {
    dispatch({ type: "UPDATE_VEHICLES", payload: vehicles });
  };
  const updateHouse = house => {
    dispatch({ type: "UPDATE_HOUSE", payload: house });
  };
  return {
    state,
    updateResidents,
    updateVehicles,
    updateHouse,
  };
};
export const HouseProvider = ({ children }) => {
  const { state, updateResidents, updateVehicles, updateHouse } = useHouse();
  return (
    <HouseContext.Provider
      value={{
        house: state,
        updateResidents,
        updateVehicles,
        updateHouse,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};
export const useHouseDetails = () => useContext(HouseContext);
