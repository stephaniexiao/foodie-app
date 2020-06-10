import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FoodsDetail } from "../screens/FoodsDetail";
import FoodsScreen from "../screens/FoodsScreen";

const FoodsStack = createStackNavigator();

export const FoodsStackScreen = (props) => {
  return (
    <FoodsStack.Navigator>
      <FoodsStack.Screen
        name="FoodsScreen"
        component={FoodsScreen}
        options={{
          headerTitle: "Food",
        }}
      />
      <FoodsStack.Screen
        name="FoodsDetail"
        component={FoodsDetail}
        options={(props) => {
          console.log(props);
          return {
            headerTitle: props.route.params.info.label,
          };
        }}
      />
    </FoodsStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
