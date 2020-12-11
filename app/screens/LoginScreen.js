import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppFormFeild from "../components/AppFormFeild";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
