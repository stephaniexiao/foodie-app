import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SearchBar } from "../components/SearchBar";
import yelp from "../api/yelp";

export default function SearchScreen() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]); // results could be renamed "restaurants" or "businesses"
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchValue) => {
    console.log("hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: value,
          location: "Berkeley",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Sorry there was an error.");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  //searchApi('pasta')
  // BAD CODE. everytime the component rerenders that function is being called which clogs up the react DOM resulting in performance issues.

  return (
    <ScrollView style={styles.container}>
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
        {/* <Text> We have found {results.length} results. </Text>
        <Text> {errorMessage}</Text> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE2DC",
  },
});
