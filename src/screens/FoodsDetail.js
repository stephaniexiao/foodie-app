import React from "react";
import { View, Text, StyleSheet, PickerIOSComponent } from "react-native";

export const FoodsDetail = ({ route }) => {
  const food = route.params.info.label;
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>Best Food === "{food}"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee2dc",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    alignSelf: "center",
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: 20,
  },
});
