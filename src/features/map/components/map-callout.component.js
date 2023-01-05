import React from "react";
import { Image } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info";

const MyText = styled.Text``;
export const MapCallout = ({ restaurant }) => {
  return (
    <CompactRestaurantInfo isMap restaurant={restaurant}/>
  );
};


