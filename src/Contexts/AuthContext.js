import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, db } from "../firebase";

const AuthContext = createContext();

const { Provider } = AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrenUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password, name) => {
    return auth.createUserWithEmailAndPassword(email, password).then((user) => {
      db.collection("users").doc(email).set({
        name: name,
        email: email,
        movies: [],
      });
    });
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      db.collection("users")
        .doc(user.email)
        .get()
        .then((data) => {
          setCurrenUser(data.data());
          setLoading(false);
        });
    });

    return unsubscriber;
  }, []);

  const value = {
    signup,
    login,
    currentUser,
  };

  return <Provider value={value}>{!loading && children}</Provider>;
};

export default AuthProvider;
