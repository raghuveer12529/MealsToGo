import React, { useState, createContext } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  
  const onLogin = (email, password) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const appUser = userCredential.user;
      setUser(appUser);
    })
    .catch((e) => {
    
      const firebaseError = JSON.stringify(e);
      const parsedData = JSON.parse(firebaseError);
      const Error = parsedData['code'].split('/')
      console.log(Error[1]);
     
      setError("Error: "+ Error[1]);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
