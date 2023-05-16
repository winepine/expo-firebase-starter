import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme, View } from "react-native";
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
import Onboarding from "../screens/Onboarding";
import App from "../screens/NotificationTest";

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    dark: false,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "rgb(242, 242, 242)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  },
};
export const RootNavigator = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            gestureEnabled: false,
            headerShown: true,
            header: () => <></>,
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            gestureEnabled: false,
            headerShown: false,
            header: () => <></>,
            headerLeft: () => <></>,
          }}
        />
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
        <Stack.Screen name="not" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
