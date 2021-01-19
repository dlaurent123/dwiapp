import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyaccountScreen from "../screens/MyaccountScreen";
import Messaging from "../screens/Messaging";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={MyaccountScreen} name="Account" />
      <Stack.Screen
        component={Messaging}
        name="Messaging"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
