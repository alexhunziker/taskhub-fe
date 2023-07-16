import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DatabaseContext from "./DatabaseContext";
import { useContext } from "react";

const AuthenticationContext = React.createContext({
  uid: "",
  displayName: "",
  email: "",
  isLoggedIn: () => Boolean,
});

export const AuthenticationContextPorvider = ({children}) => {

  const [uid, setUid] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  const { ready } = useContext(DatabaseContext);

  const auth = ready && getAuth();
  ready && onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
      setDisplayName(user.displayName)
      setEmail(uid.email)
    } else {
      setUid("");
      setDisplayName("")
      setEmail("");
    }
  })

    const isLoggedIn = () => {
      return !!uid;
    }
  
    const value = {
      uid,
      displayName,
      email,
      isLoggedIn,
    }
    
    return (
      <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
    );
  }

export default AuthenticationContext;