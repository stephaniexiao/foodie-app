import React from 'react';
import { AppDrawerScreen } from "../routes/AppDrawerScreen";
import { NavigationContainer } from "@react-navigation/native";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppDrawerScreen />
         </NavigationContainer>
    );
}

export default AppNavigator;