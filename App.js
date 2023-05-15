import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HouseProvider } from "./contexts/useHouseData";
import { RootNavigator } from "./navigation/RootNavigator";
import { AuthenticatedUserProvider } from "./providers";

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <HouseProvider>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </HouseProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
