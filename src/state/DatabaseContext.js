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
    const database = initializeFirebase();
    console.log("Initialize Firebase... done", database)
    if (database) {
      setReady(true);
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