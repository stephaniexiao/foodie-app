import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Foods } from "../data/Foods";
import { FoodItem } from "../components/FoodItem"

export default function FoodsScreen({ navigation }) {
  return (
    <View>
      <View style={styles.background}>
        <FlatList
        data={Foods}
        renderItem={({ item }) => {
          return (
            <FoodItem name={item.label}/>
          );
        }}
        keyExtractor={(item) => item.label}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#eee2dc",
  },
})