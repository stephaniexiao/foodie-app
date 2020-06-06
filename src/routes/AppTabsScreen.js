import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "./HomeStackScreen";
import FoodsScreen from "../screens/FoodsScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export const AppTabsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Foods" component={FoodsScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};
