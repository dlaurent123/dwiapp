import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={WelcomeScreen} name="Welcome"></Stack.Screen>
      <Stack.Screen component={LoginScreen} name="Login"></Stack.Screen>
      <Stack.Screen component={RegisterScreen} name="Register"></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
