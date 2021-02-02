import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "../navigation/NewListingButton";
import routes from "../navigation/routes";
import { Notifications } from "expo";

const Tab = createBottomTabNavigator();

const Appnavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={FeedNavigator}
        name="Feed"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="home" size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={ListingEditScreen}
        name="ListingEditScreen"
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT_SCREEN)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              name="plus-circle"
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        component={AccountNavigator}
        name="Account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="account" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Appnavigator;
