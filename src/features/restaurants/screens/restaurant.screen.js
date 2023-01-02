import React, { useContext } from "react";
import { ActivityIndicator, Searchbar, Colors } from "react-native-paper";
import { FlatList } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer,
} from "./restaurant.screen.styles";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import styled from "styled-components";
import { Search } from "../components/search.component";

// const RestaurantList = styled(FlatList).attrs({
//   // contentContainerStyle: {
//   //   padding: 16,
//   // },
// })``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} />
          </LoadingContainer>
        ) }
      
      {/* <SearchContainer>
        <Searchbar placeholder="Search for Restaurants" />
      </SearchContainer> */}
      <Search />
      <RestaurantListContainer>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
