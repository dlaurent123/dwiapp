import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import firebase from "./firebase";
import Index from "./app/Index";
import { AuthContext } from "./app/context";
import { getAuthToken } from "./app/utiliy/firebaseFunctions";
import AppLoading from "expo-app-loading";
import logger from "./app/utiliy/logger";
logger.start();

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setIsLoading] = useState(true);

  const updateUser = (user) => {
    if (user) {
      const { email, uid, displayName } = user;
      setCurrentUser({ email, id: uid, name: displayName });
      getAuthToken().then((token) => {
        setToken(token);
      });
      setIsLoading(false);
    } else {
      setCurrentUser(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
    return unsubscribe;
  }, []);

  const addUser = (user) => setCurrentUser(user);

  if (loading) return <AppLoading />;

  return (
    <>
      <AuthContext.Provider value={{ currentUser, addUser, token }}>
        <Index />
      </AuthContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
