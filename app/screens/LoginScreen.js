import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import {
  AppFormFeild,
  SubmitButton,
  AppForm,
  ErrorMessage,
} from "../components/Forms/index";
import * as Yup from "yup";
import { logIn } from "../utiliy/firebaseFunctions";
import { useState } from "react/cjs/react.development";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [errorMessage, setError] = useState(null);
  const [loginFailed, setLoginFailed] = useState(false);

  const onSubmit = async ({ email, password }) => {
    try {
      await logIn(email, password);
    } catch (error) {
      setError(error.message);
      setLoginFailed(true);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage visible={loginFailed} error={errorMessage} />
        <AppFormFeild
          autoCapitalize="none"
          autoCorrect={false}
          icon={"email"}
          keyboardType={"email-address"}
          name={"email"}
          placeholder={"Email"}
          textContentType="emailAddress"
        />

        <AppFormFeild
          autoCapitalize="none"
          autoCorrect={false}
          icon={"lock"}
          name={"password"}
          placeholder={"Password"}
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title={"login"} />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
