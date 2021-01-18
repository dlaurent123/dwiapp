import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetails from "../screens/ListingDetails";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode={"modal"}>
      <Stack.Screen component={ListingsScreen} name="Listings" />
      <Stack.Screen
        component={ListingDetails}
        name="ListingDetails"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
