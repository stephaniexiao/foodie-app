import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppTabsScreen } from "../routes/AppTabsScreen";
import { ReportScreen } from "../screens/ReportScreen";

const AppDrawer = createDrawerNavigator();

export const AppDrawerScreen = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Home" component={AppTabsScreen} />
    <AppDrawer.Screen name="Report an Issue" component={ReportScreen} />
  </AppDrawer.Navigator>
);
