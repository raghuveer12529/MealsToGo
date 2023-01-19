import React, { useEffect } from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SettingsScreen from "../../features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="Screen"
      screenOptions={{
        CardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      >
          <SettingsStack.Screen options={{ header: () => null }} name="Settings" component={SettingsScreen} />
          <SettingsStack.Screen options={{ header: () => null }} name="Favourites" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};
