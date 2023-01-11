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
import { ActivityIndicator, Colors } from "react-native-paper";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
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
          onChangeText={(e) => setPassword(e)}
        />
        <AuthInput
          label="Retype Password"
          value={repeatedPassword}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(e) => setRepeatedPassword(e)}
        />

        <Spacer size="large" />
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" />
        {!isLoading ? (
          <AuthButton
            icon="mail"
            onPress={() => onRegister(email, password, repeatedPassword)}
            mode="contained"
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true}  />
        )}
      </AccountContainer>
      <AuthButton onPress={() => navigation.navigate("Main")} mode="contained">
        Back
      </AuthButton>
    </AccountBackground>
  );
};
