import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SearchBar } from "../components/SearchBar"

export default function SearchScreen() {
    const [value, setValue] = useState("");

    return (
      <ScrollView style={styles.container}>
        <View>
            <SearchBar 
                value={value}
                onInputChange={(newValue) => setValue(newValue)}
            />
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEE2DC"
    },
})

