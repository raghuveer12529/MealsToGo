import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "../screens/restaurant.screen.styles";
import { LocationContext } from "../../../services/location/location.context";

export const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={ isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="search for location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
