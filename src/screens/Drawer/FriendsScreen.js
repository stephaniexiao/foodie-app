import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const FriendsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>FriendsScreen</Text>
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
