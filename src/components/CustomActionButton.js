import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export const CustomActionButton = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>{children}</View>
    </TouchableOpacity>
  );
};

CustomActionButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#87CEEB",
  },
});

//ParentComponent passing props
/*

<CustomActionButton 
  onPress
  width
  height
  borderRadius
  title
/>



*/
