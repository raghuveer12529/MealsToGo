import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { View } from 'react-native'
import { SvgXml } from "react-native-svg";

export const Title = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-size: 15px;
  color: ${(props) => props.theme.colors.ui.primary};
`;
export const Address = styled(Text)`
  padding-top: ${(props) => props.theme.space[0]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCard = styled(Card)`
  background-color: white;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Open = styled(SvgXml)`
  flex-direction: row;
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;