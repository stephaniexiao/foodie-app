import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ResultsDetail } from "./ResultsDetail";

export const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        renderItem={({ item }) => {
          return <ResultsDetail results={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "200",
    letterSpacing: 1,
    marginLeft: 5,
    color: "#AC3B61",
  },
});
