import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const ResultsDetail = ({ results }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: results.image_url }} />
      <Text>{results.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
