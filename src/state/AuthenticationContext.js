import React, { useEffect, useState } from "react";
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

  // subscribe to authState changes once firebase is ready
  useEffect(() => {
    if (!ready) {
      return undefined;
    }

    const auth = getAuth();

    return onAuthStateChanged(auth, user => {
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
    })
  }, [ready]) // eslint-disable-line

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
