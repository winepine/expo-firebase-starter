import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import InviteVisitorScreen from "../components/InviteVisitorScreen";
import EntryRequestsScreen from "../components/EntryRequestsScreen";
import ManageStaff from "../components/ManageStaff";
import DeliveryRequests from "../components/DeliveryRequests";
import AddDeliveryForm from "../components/DeliveryRequests/AddDeliveryForm";
import AddStaffForm from "../components/ManageStaff/AddStaffForm";
import AddVehicleForm from "../components/VehiclesScreen/AddVehicle";
import AddResidentForm from "../components/AddResident";

const Stack = createNativeStackNavigator();
export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Smentry Home"
          component={HomeScreen}
          options={{
            gestureEnabled: false,
            headerShown: true,
            header: () => <></>,
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Enter Visitor Details"
          component={InviteVisitorScreen}
          options={{
            gestureEnabled: true,
            headerShown: true,
            // header: () => <></>,
            // headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="EntryRequestsScreen"
          component={EntryRequestsScreen}
          options={{
            gestureEnabled: true,
            headerShown: true,
            // header: () => <></>,
            // headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="ManageStaffScreen"
          component={ManageStaff}
          options={{
            gestureEnabled: true,
            headerShown: true,
            // header: () => <></>,
            // headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="DeliveryRequestsScreen"
          component={DeliveryRequests}
          options={{
            gestureEnabled: true,
            headerShown: true,
            // header: () => <></>,
            // headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="AddDeliveryScreen"
          component={AddDeliveryForm}
          options={{
            gestureEnabled: true,
            headerShown: true,
            // header: () => <></>,
            // headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="AddStaffScreen"
          component={AddStaffForm}
          options={{
            gestureEnabled: true,
            headerShown: true,
            // header: () => <></>,
            // headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="AddVehicleScreen"
          component={AddVehicleForm}
          options={{
            gestureEnabled: true,
            headerShown: true,
            // header: () => <></>,
            // headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="AddResidentScreen"
          component={AddResidentForm}
          options={{
            gestureEnabled: true,
            headerShown: true,
            // header: () => <></>,
            // headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
