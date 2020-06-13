import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const ResultsDetail = ({ results }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ url: results.image_url }} />
      <Text style={styles.txt}>{results.name}</Text>
      <Text style={styles.rate}>Rating: {results.rating} Stars</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 220,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 15,
  },
  img: {
    width: "80%",
    height: 80,
  },
  txt: {
    width: "80%",
    fontWeight: "400",
    color: "#AC3B61",
    marginTop: 5,
    textAlign: "center",
  },
  rate: {
    fontWeight: "200",
    fontSize: 12,
  },
});
