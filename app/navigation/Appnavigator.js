import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import MyaccountScreen from "../screens/MyaccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const Appnavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={FeedNavigator} name="Feed" />
      <Tab.Screen component={ListingEditScreen} name="ListingEditScreen" />
      <Tab.Screen component={MyaccountScreen} name="Account" />
    </Tab.Navigator>
  );
};

export default Appnavigator;
