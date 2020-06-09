import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


export function ReportScreen({navigation}) {
    return (
      <View style={styles.container}>
          <Text>if you report an issue you gotta fix it yourself lol</Text>
          <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
            <AntDesign name="home" size={24} color="black" />
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center"
    },
    homeButton: {
        alignSelf: "center",
        marginTop: 10
    }
})