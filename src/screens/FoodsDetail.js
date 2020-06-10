import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const FoodsDetail = ({ route }) => {
  const label = route.params.info.label;
  return (
    <View>
      <Text> {label} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
