import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const RestaurantsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>RestaurantsScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
