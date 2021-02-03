import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "../navigation/NewListingButton";
import routes from "../navigation/routes";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useContext, useEffect } from "react/cjs/react.development";
import { db } from "../utiliy/firebaseFunctions";
import { AuthContext } from "../context";
import navigation from "../navigation/rootNavigation";

const Tab = createBottomTabNavigator();

const Appnavigator = () => {
  const { currentUser } = useContext(AuthContext);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      await db.collection("users").doc(currentUser.id).update({
        expoPushToken: token.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationResponseReceivedListener((n) => {
      navigation.navigate("Account");
    });
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
