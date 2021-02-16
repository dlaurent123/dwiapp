import React,{useContext,useEffect} from 'react';
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { db } from "../utiliy/firebaseFunctions";
import { AuthContext } from "../context";
import navigation from "../navigation/rootNavigation";
import logger from '../utiliy/logger';


const useNotifications = (notificationListener) => {
    const { currentUser } = useContext(AuthContext);

  const registerForPushNotifications = async (notificationListener) => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      await db.collection("users").doc(currentUser.id).update({
        expoPushToken: token.data,
      });
    } catch (error) {
      logger.log(error)
      console.log(error);
    }
  };
  useEffect(() => {
    registerForPushNotifications(notificationListener);

    Notifications.notificationListener();
  }, []);
    return (
        
    );
}

export default useNotifications;