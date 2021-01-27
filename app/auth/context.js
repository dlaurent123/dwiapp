import React from "react";
import { useState } from "react/cjs/react.development";

const AuthContext = React.createContext();

const Context = ({ children }) => {
  const [setCurrentUser, currentUser] = useState();

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;

export default context;
