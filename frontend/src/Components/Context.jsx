import React, { createContext, useState } from "react";
import { loginCheck } from "../utils/loginCheck";

export const AppContext = createContext();

const ParentContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [login, setLogin] = useState(loginCheck());

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        login,
        setLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;
