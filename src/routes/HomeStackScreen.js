import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import { SettingsScreen } from "../screens/Home/SettingsScreen";
import { FoodsDetail } from "../screens/FoodsDetail";

const HomeStack = createStackNavigator();

export const HomeStackScreen = (props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
        }}
      />
      <HomeStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({ route }) => {
          return {
            headerTitle: route.params.title,
          };
        }}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
