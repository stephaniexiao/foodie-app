import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SettingsScreen = ({ route }) => {
  const title = route.params.title;
  const subTitle = route.params.subTitle;
  return (
    <View style={styles.container}>
      <Text> {subTitle} </Text>
      <Text> </Text>
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
