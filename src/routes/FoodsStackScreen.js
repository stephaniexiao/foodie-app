import React from "react";
// import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FoodsDetail } from "../screens/FoodsDetail";
import FoodsScreen from "../screens/FoodsScreen";

const FoodsStack = createStackNavigator();

export const FoodsStackScreen = ({ navigation }) => {
  return (
    <FoodsStack.Navigator>
      <FoodsStack.Screen
        name="FoodsScreen"
        component={FoodsScreen}
        options={{
          headerTitle: "Foods List",
        }}
      />
      <FoodsStack.Screen
        name="FoodsDetail"
        component={FoodsDetail}
        options={(props) => {
          return {
            headerTitle: props.route.params.info.label, //sets detailscreen header
          };
        }}
      />
    </FoodsStack.Navigator>
  );
};
