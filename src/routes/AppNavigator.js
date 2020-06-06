import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabsScreen } from "../routes/AppTabsScreen";

export const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <AppTabsScreen />
    </NavigationContainer>
  );
};
