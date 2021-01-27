import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import firebase from "../../firebase";
import { getAuthToken } from "../utiliy/firebaseFunctions";
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  const updateUser = (user) => {
    if (user) {
      const { email, uid } = user;
      setCurrentUser({ email, id: uid });
      getAuthToken().then((token) => {
        setToken(token);
      });
    }
  };

  useEffect(() => {
    return (unsubscribe = () => firebase.auth().onAuthStateChanged(updateUser));
  });

  return (
    <AuthContext.Provider value={{ currentUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
