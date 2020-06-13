import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { SearchBar } from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses.js";
import { ResultsList } from "../components/ResultsList";

export default function SearchScreen() {
  const [value, setValue] = useState("");
  const [results, errorMessage, searchApi] = useBusinesses(); //return useBusinesses

  const filterPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  console.log(results);
  return (
    <ScrollView style={styles.container}>
      <View>
        <SearchBar
          value={value}
          onInputChange={(newValue) => setValue(newValue)}
          onInputSubmit={() => searchApi(value)}
        />
      </View>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text style={styles.numResults}> {results.length} results found.</Text>
      )}
      <ResultsList results={filterPrice("$")} title="Broke College Student" />
      <ResultsList results={filterPrice("$$")} title="Night Out" />
      <ResultsList results={filterPrice("$$$")} title="Life Savings" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE2DC",
  },
  numResults: {
    margin: 5,
    color: "#123C69",
  },
});
