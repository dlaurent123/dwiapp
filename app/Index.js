import React, { useContext } from "react";
import OfflineNotice from "./components/OfflineNotice";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import Appnavigator from "./navigation/Appnavigator";
import { AuthContext } from "../app/context";
import { navigationRef } from "./navigation/rootNavigation";

const Index = () => {
  const { currentUser, token } = useContext(AuthContext);

  return (
    <>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {currentUser ? <Appnavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default Index;
