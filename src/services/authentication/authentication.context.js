import React, { useState, createContext } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut 
} from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
      // ...
    } else {
      setIsLoading(false);
    }
  });

  const onLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(null);
    }).catch((error) => {
      // An error happened.
    });
    
  }



  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const appUser = userCredential.user;
        setUser(appUser);
      })
      .catch((e) => {
        const firebaseError = JSON.stringify(e);
        const parsedData = JSON.parse(firebaseError);
        const Error = parsedData["code"].split("/");
        console.log(Error[1]);
        setIsLoading(false);
        setError("Error: " + Error[1]);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords doesnot matrch");
      return;
    }

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
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
        onRegister,
        onLogout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
