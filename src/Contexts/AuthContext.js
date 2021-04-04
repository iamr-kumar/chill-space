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
    return auth.createUserWithEmailAndPassword(email, password).then((data) => {
      db.collection("users").doc(data.user.uid).set({
        name: name,
        email: email,
        uid: data.user.uid,
        movies: [],
      });
    });
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setCurrenUser(user);
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .onSnapshot((doc) => {
            setCurrenUser(doc.data());
          });
      } else {
        setCurrenUser(null);
      }
      setLoading(false);
      // console.log(user);
    });

    return unsubscriber;
  }, []);

  const value = {
    signup,
    login,
    logout,
    currentUser,
  };

  return <Provider value={value}>{!loading && children}</Provider>;
};

export default AuthProvider;
