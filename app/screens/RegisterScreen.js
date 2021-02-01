import React, { useContext } from "react";
import {
  AppForm,
  AppFormFeild,
  ErrorMessage,
  SubmitButton,
} from "../components/Forms";
import Screen from "../components/Screen";
import { signUp, db } from "../utiliy/firebaseFunctions";
import * as Yup from "yup";
import { useState } from "react/cjs/react.development";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [visible, setIsVisisble] = useState(false);

  const registerUser = async ({ email, password, name }) => {
    try {
      await signUp(email, password).then((user) => {
        user.user.updateProfile({ displayName: name });
        db.collection("users").doc(user.user.uid.toString()).set({
          name,
          email,
          uid: user.user.uid,
        });
      });
    } catch (error) {
      setIsVisisble(true);
      setErrorMessage(error.message);
    }
  };

  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={registerUser}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={errorMessage} visible={visible} />
        <AppFormFeild
          autoCapitalize="none"
          autoCorrect={false}
          icon={"account"}
          keyboardType={"default"}
          name={"name"}
          placeholder={"Name"}
          textContentType="emailAddress"
        />
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
          textContentType="newPassword"
        />
        <SubmitButton title={"Register"} />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;
