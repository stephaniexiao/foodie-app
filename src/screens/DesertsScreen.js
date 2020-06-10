import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomActionButton } from "../components/CustomActionButton";

export const DesertsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text> DesertsScreen </Text>
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
