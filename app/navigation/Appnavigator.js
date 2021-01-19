import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigation";

const Tab = createBottomTabNavigator();

const Appnavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={FeedNavigator} name="Feed" />
      <Tab.Screen component={ListingEditScreen} name="ListingEditScreen" />
      <Tab.Screen component={AccountNavigator} name="Account" />
    </Tab.Navigator>
  );
};

export default Appnavigator;
