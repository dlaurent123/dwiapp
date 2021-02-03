import React, { useContext } from "react";
import OfflineNotice from "./components/OfflineNotice";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import Appnavigator from "./navigation/Appnavigator";
import { AuthContext } from "../app/context";

const Index = () => {
  const { currentUser, token } = useContext(AuthContext);
  const navigationRef = React.createRef();
  const navigation = navigationRef.current;

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
