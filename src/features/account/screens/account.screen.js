import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals to Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Login")}
          mode="contained"
        >
          Login
        </AuthButton>
        <AuthButton
          icon="email"
          onPress={() => navigation.navigate("Register")}
          mode="contained"
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
