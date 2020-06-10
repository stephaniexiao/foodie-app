import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { SearchBar } from "../components/SearchBar";
import { useResults } from "../hooks/useResults";
import { ResultsList } from "../components/ResultsList";
import { CustomActionButton } from "../components/CustomActionButton";

export default function SearchScreen() {
  const [value, setValue] = useState("");
  const [results, errorMessage, searchApi] = useResults();

  const filterPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <SearchBar
          value={value}
          onInputChange={(newValue) => setValue(newValue)}
          onInputSubmit={() => searchApi(value)}
        />
        {errorMessage ? (
          <Text> {errorMessage} </Text>
        ) : (
          <Text> We have found {results.length} results.</Text>
        )}
      </View>
      <>
        <ResultsList results={filterPrice("$")} title="Cost Effective" />
        <ResultsList results={filterPrice("$$")} title="Bit Pricer" />
        <ResultsList results={filterPrice("$$$")} title="Big Spender" />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE2DC",
  },
});
