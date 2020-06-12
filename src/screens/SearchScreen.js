import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { SearchBar } from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses.js";

export default function SearchScreen() {
  const [value, setValue] = useState("");
  const [results, errorMessage, searchApi] = useBusinesses();
  
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

