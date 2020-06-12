import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerRight: () => (
          <AntDesign
            name="logout"
            size={24}
            color="black"
            style={{ right: 10 }}
            onPress={() => alert("don't you wish you could log out >:)")}
          />
        ),
        headerLeft: () => (
          <Feather
            name="alert-circle"
            size={24}
            color="black"
            style={{ left: 10 }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerRight: () => (
          <AntDesign
            name="save"
            size={30}
            color="black"
            style={{ right: 10 }}
            onPress={() => alert("don't save me")}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
