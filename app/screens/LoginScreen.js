import React from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import ErrorMessage from "../components/ErrorMessage";
import { Formik } from "formik";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormFeild from "../components/AppFormFeild";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
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
          </>
        )}
      </Formik>
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
