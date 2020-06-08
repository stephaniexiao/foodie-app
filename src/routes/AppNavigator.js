import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppDrawerScreen } from "../routes/AppDrawerScreen";

export const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <AppDrawerScreen />
    </NavigationContainer>
  );
};
