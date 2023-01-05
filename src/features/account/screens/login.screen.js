import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthInput,
  AuthButton,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
          <AccountCover />
          
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          secure
          onChangeText={(e) => setPassword(e)}
        />
        <Spacer size="large" />
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <AuthButton
          icon="lock-open-outline"
          onPress={() => onLogin(email, password)}
          mode="contained"
        >
          Login
        </AuthButton>
          </AccountContainer>
          <AuthButton
          
          onPress={() => navigation.navigate("Main")}
          mode="contained"
        >
          Back
        </AuthButton>
    </AccountBackground>
  );
};
