import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";

export const FoodItem = ({ name }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 20,
    marginTop: 28,
    alignItems: "center",
    alignSelf: "center",
    width: "75%",
    borderRadius: 15
  },
  text: {
    fontSize: 15,
    letterSpacing: 1,
    color: "#AC3B61"
  }
});
