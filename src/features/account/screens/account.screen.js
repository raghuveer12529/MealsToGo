import React from "react";
import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper
} from "../components/account.styles";
import styled from "styled-components";


export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>

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
