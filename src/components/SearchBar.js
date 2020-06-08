import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const DismissKeyboard = (props) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {props.children}
  </TouchableWithoutFeedback>
);

export const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.bar}
        placeholder=" What are you craving?"
        value={props.value}
        onChangeText={(newText) => props.onInputChange(newText)}
        onEndEditing={() => props.onInputSubmit()}
      />
      <AntDesign
        name="search1"
        size={25}
        color="#123C69"
        onPress={() => alert("doesn't work yet")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    borderColor: "#123C69",
    borderRadius: 10,
    height: 40,
    width: "75%",
    borderWidth: 1,
    alignSelf: "center",
    marginRight: 10,
  },
});
