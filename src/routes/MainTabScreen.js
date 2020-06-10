import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeStackScreen } from "./HomeStackScreen";
import { FoodsStackScreen } from "./FoodsStackScreen";
import { DesertsScreen } from "../screens/DesertsScreen";
import SearchScreen from "../screens/SearchScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MainTab = createMaterialBottomTabNavigator();

export const MainTabScreen = (props) => {
  return (
    <MainTab.Navigator
      inactiveColor="white"
      activeColor="black"
      initialRouteName="Home"
    >
      <MainTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarBadge: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarColor: "#1f65ff",
        }}
      />
      <MainTab.Screen
        name="Food"
        component={FoodsStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pizza" color={color} size={26} />
          ),
          tabBarColor: "#694fad",
        }}
      />
      <MainTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="search-web" color={color} size={26} />
          ),
          tabBarColor: "yellow",
        }}
      />
      <MainTab.Screen
        name="Desert"
        component={DesertsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="eye" color={color} size={26} />
          ),
          tabBarColor: "purple",
        }}
      />
    </MainTab.Navigator>
  );
};
