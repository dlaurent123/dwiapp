import { presentNotificationAsync } from "expo-notifications";
import React from "react";
import { Keyboard, Alert } from "react-native";
import { send } from "../../api/messages";
import AppForm from "./AppForm";
import * as Yup from "yup";
import AppFormFeild from "./AppFormFeild";
import SubmitButton from "./SubmitButton";

const validationSchema = Yup.object({
  message: Yup.string().required().label("Message"),
});

function ContactSeller({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const res = await send(message, listing.id);

    if (!res.ok) {
      console.log("Error", res);
      return Alert.alert("Error", "Could not send message to user");
    }

    resetForm();

    presentNotificationAsync({
      title: "Awesome!",
      body: "Your message was succesfully sent to the seller",
    });
  };
  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormFeild
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={"default"}
        name={"message"}
        placeholder={"Message..."}
        textContentType="none"
      />
      <SubmitButton title={"Contact Seller"} />
    </AppForm>
  );
}

export default ContactSeller;
