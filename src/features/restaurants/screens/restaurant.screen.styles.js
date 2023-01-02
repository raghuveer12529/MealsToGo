import { StatusBar, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.height && `margin-top: ${StatusBar.height}px`};
`;

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantListContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
