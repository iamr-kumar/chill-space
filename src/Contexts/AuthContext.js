import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

const { Provider } = AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrenUser] = useState();

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setCurrenUser(user);
    });

    return unsubscriber;
  }, []);

  const value = {
    signup,
    currentUser,
  };

  return <Provider value={value}>{children}</Provider>;
};

export default AuthProvider;
