import React, { useEffect, useState } from "react";
import { initializeFirebase } from "../api/init";

const DatabaseContext = React.createContext({
  successIndicator: false,
  errorList: [],
  indicateSuccess: () => {},
  addError: (message) => {},
  clearErrorList: () => {},
});

export const DatabaseContextPorvider = ({children}) => {

  const [successIndicator, setSuccessIndicator] = useState(false);
  const [errorList, setErrorList] = useState([])
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const database = initializeFirebase();
      console.log("Initialize Firebase... done")
      if (database) {
        setReady(true);
      }
    } catch (error) {
      console.error("initializind database failed", error)
    }
  }, [])

  const indicateSuccess = () => {
    setSuccessIndicator(true);
    setTimeout(() => setSuccessIndicator(false), 1000);
  }

  const addError = (message) => {
    setErrorList([...errorList, message])
  }

  const clearErrorList = () => {
    setErrorList([])
  }

  const value = {
    successIndicator,
    errorList,
    indicateSuccess,
    addError,
    clearErrorList,
    ready
  }
  
  
  return (
    <DatabaseContext.Provider value={value}>{children}</DatabaseContext.Provider>
  );
}

export default DatabaseContext;