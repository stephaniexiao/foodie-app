import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
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
