import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyaccountScreen from "../screens/MyaccountScreen";
import Messaging from "../screens/Messaging";
import MyMessagesScreen from "../screens/MyMessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={MyaccountScreen} name="Account" />
      <Stack.Screen
        component={Messaging}
        name="Messages"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ title: "dezz nuts" }}
        component={MyMessagesScreen}
        name={"MyMessages"}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
