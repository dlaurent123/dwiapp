import React from "react";
import { AppForm, AppFormFeild, SubmitButton } from "../components/Forms";
import Screen from "../components/Screen";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
