import React from "react";
import { TouchableOpacity } from "react-native";

export const EnterButton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Enter</Text>
        </TouchableOpacity>
    )
}