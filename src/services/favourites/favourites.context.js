import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  // To save favourites into Async Storage
  const saveFavourites = async (value , uid) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
    } catch (e) {
      console.log(e);
    }
  }

// Function to get stored favourites  
const loadFavourites = async (uid) => {
  try {
    const value = await AsyncStorage.getItem(`@favourites-${uid}`)
    if(value !== null) {
      setFavourites(JSON.parse(value));
    }
  } catch(e) {
    console.log(e);
  }
}

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  // This function will run everytime the application mounts
  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user])
  

// This hook is used to save the favourites everytime there is a change in favourites array.
  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites , user])
  

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
