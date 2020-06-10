import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeStackScreen } from "./HomeStackScreen";
import { FoodsStackScreen } from "./FoodsStackScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export const AppTabsScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: () => <Ionicons name="ios-home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Foods"
        component={FoodsStackScreen}
        options={{
          tabBarIcon: () => <Ionicons name="ios-pizza" size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <Ionicons name="ios-search" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
