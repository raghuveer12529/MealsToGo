import React from "react";
import styled from "styled-components";
import { restaurantsRequest } from "../../services/restaurants/restaurant.service";
import { Text } from "../typography/text.component";
import { Image, View } from "react-native"
import WebView from "react-native-webview"
import { Platform } from "react-native";

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 90px;
`;

const CompactWebView = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
    const Image = (Platform.OS === 'Android' && isMap) ? CompactWebView : CompactImage;
    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }} />
            <Text center varaint="caption">{restaurant.name}</Text>
        </Item>
    );
}