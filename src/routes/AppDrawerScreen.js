import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RestaurantsScreen } from "../screens/Drawer/RestaurantsScreen";
import { FriendsScreen } from "../screens/Drawer/FriendsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainTabScreen } from "../routes/MainTabScreen";
import { AppTabsScreen } from "../routes/AppTabsScreen";

const AppDrawer = createDrawerNavigator();

export const AppDrawerScreen = (props) => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="AppTabs" component={MainTabScreen} />
      <AppDrawer.Screen name="Restaurants" component={RestaurantsScreen} />
      <AppDrawer.Screen name="FriendsScreen" component={FriendsScreen} />
    </AppDrawer.Navigator>
  );
};
