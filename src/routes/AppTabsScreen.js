import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "../routes/HomeStackScreen";
import { FoodsStackScreen } from "../routes/FoodsStackScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export const AppTabsScreen = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Foods">
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Foods" component={FoodsStackScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};
