import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function SettingsScreen() {
    return (
      <View style={styles.container}>
          <Text>you made this app. why would you edit anything?</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
})