import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WELCOME TO</Text>
      <Text style={styles.foodie}>FOODIE</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.push("SettingsScreen", {
            title: "Settings",
          })
        }
      >
        <Text> Go to Settings </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee2dc",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    color: "#ac3b61",
    fontSize: 25,
    fontFamily: "Helvetica",
    fontWeight: "300",
    letterSpacing: 1,
  },
  foodie: {
    alignSelf: "center",
    color: "#edc7b7",
    fontSize: 60,
    fontFamily: "Helvetica",
    fontWeight: "700",
  },
});
