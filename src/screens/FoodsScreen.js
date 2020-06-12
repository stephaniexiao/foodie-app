import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Foods } from "../data/Foods";
import { FoodItem } from "../components/FoodItem";

export default function FoodsScreen({ navigation }) {
  return (
    <View>
      <View style={styles.background}>
        <FlatList
          data={Foods}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.push("FoodsDetail", { info: item })}
              >
                <FoodItem name={item.label} />
              </TouchableOpacity>
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
});
