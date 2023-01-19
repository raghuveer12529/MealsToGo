
import React, { useContext } from "react";
import { SafeArea } from "../../restaurants/screens/restaurant.screen.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
const SettingItem = styled(List.Item)`
  padding: ${ (props) => props.theme.space[3]}
`;
const AvatarContainer = styled.View`
   align-items: center
`;

export default function SettingsScreen({navigation}) {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingItem
          title="Favourites"
          description="View your Favoutites"
          left={(props) => <List.Icon {...props} color="red" icon="heart" />}
          onPress={()=> navigation.navigate("Favourites")}
        />
        <SettingItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
}
