import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { SearchBar } from "../components/SearchBar"
import yelp from '../api/yelp';

export default function SearchScreen() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchValue) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: value, 
          location: "Berkeley",
        },
      });
      setErrorMessage("");
      setResults(response.data.businesses);
    } catch (error) { //async function needs error message
      setErrorMessage("Error. Try again later.");
    }
  };

  useEffect(() => {
    searchApi("pizza")}, []
  );
  
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
      {errorMessage? 
        (<Text>{errorMessage}</Text>) :
        <Text> {results.length} results found.</Text>}
    </ScrollView>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEE2DC"
    },
});

