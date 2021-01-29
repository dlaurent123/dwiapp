import React from "react";
import { AppForm, AppFormFeild, SubmitButton } from "../components/Forms";
import Screen from "../components/Screen";
import { signUp, db } from "../utiliy/firebaseFunctions";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const registerUser = ({ email, password, name }) => {
  try {
    signUp(email, password).then((user) => {
      db.collection("users")
        .doc(toString(user.user.uid))
        .set({
          name,
          email,
          uid: user.user.uid,
        })
        .then(() => {
          console.log("docment created");
        });
    });
  } catch (error) {
    console.log(error);
  }
};

const RegisterScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={registerUser}
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
