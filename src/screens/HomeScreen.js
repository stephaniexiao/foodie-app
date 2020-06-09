import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export function HomeScreen ({navigation}) {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>WELCOME TO</Text>
          <Text style={styles.foodie}>FOODIE</Text>
          <View style={styles.settings}>
            <TouchableOpacity onPress={() => navigation.push("Settings")}>
              <EvilIcons name="gear" size={36} color="#ac3b61" />
            </TouchableOpacity>
          </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee2dc",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    color: "#ac3b61",
    fontSize: 25,
    fontFamily: "Helvetica",
    fontWeight: "300",
    letterSpacing: 1,
  },
  foodie: {
    alignSelf: "center",
    color: "#edc7b7",
    fontSize: 60,
    fontFamily: "Helvetica",
    fontWeight: "700",
  },
  settings: {
    alignSelf: "center",
    marginTop: 15
  }
});