import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DatabaseContext from "./DatabaseContext";
import { useContext } from "react";
import { useUserActions } from "../api/userActions";

const AuthenticationContext = React.createContext({
  uid: "",
  displayName: "",
  email: "",
  isLoggedIn: () => Boolean,
});

export const AuthenticationContextPorvider = ({ children }) => {
  const [uid, setUid] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  const { ready } = useContext(DatabaseContext);
  const { storeUser } = useUserActions();

  const auth = ready && getAuth();
  ready &&
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (uid !== user.uid) {
          storeUser(user.uid, user.displayName, user.email);
        }
        setUid(user.uid);
        setDisplayName(user.displayName);
        setEmail(user.email);
      } else {
        setUid("");
        setDisplayName("");
        setEmail("");
      }
    });

  const isLoggedIn = () => {
    return !!uid;
  };

  const value = {
    uid,
    displayName,
    email,
    isLoggedIn,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
