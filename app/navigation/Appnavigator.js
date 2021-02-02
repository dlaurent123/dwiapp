import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "../navigation/NewListingButton";
import routes from "../navigation/routes";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { useEffect } from "react/cjs/react.development";

const Tab = createBottomTabNavigator();

const Appnavigator = () => {
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    registerForPushNotifications();
  }, []);

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
