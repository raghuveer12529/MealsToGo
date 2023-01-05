import React, { useContext, useState } from "react";
import { ActivityIndicator, Searchbar, Colors } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
// import { FavouritesContext } from "../../../services/favourites/favourites.context";

import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer,
} from "./restaurant.screen.styles";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import styled from "styled-components";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantListContainer>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
