import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, db, googleProvider } from "../firebase";

const AuthContext = createContext();

const { Provider } = AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrenUser] = useState();
  const [loading, setLoading] = useState(true);

  const signupEmailAndPassword = (email, password, name) => {
    return auth.createUserWithEmailAndPassword(email, password).then((data) => {
      return db.collection("users").doc(data.user.uid).set({
        name: name,
        email: email,
        uid: data.user.uid,
        picture: null,
        movies: [],
      });
    });
  };

  const loginEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = () => {
    return auth.signInWithPopup(googleProvider).then((data) => {
      if (data.additionalUserInfo.isNewUser) {
        return db.collection("users").doc(data.user.uid).set({
          name: data.additionalUserInfo.profile.name,
          email: data.additionalUserInfo.profile.email,
          uid: data.user.uid,
          picture: data.additionalUserInfo.profile.picture,
          movies: [],
        });
      } else {
        return new Promise((resolve, reject) => {
          resolve("success!");
        });
      }
    });
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .onSnapshot(
            (doc) => {
              setCurrenUser(doc.data());
            },
            (err) => console.log(err.message)
          );
      } else {
        setCurrenUser(null);
      }
      setLoading(false);
      // console.log(user);
    });

    return unsubscriber;
  }, []);

  const value = {
    signupEmailAndPassword,
    loginEmailAndPassword,
    signInWithGoogle,
    logout,
    currentUser,
  };

  return <Provider value={value}>{!loading && children}</Provider>;
};

export default AuthProvider;
