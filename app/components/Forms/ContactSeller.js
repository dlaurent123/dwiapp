import * as Notifications from "expo-notifications";
import React, { useContext } from "react";
import { Keyboard, Alert, View } from "react-native";
import apiClient from "../../api/messages";
import AppForm from "./AppForm";
import * as Yup from "yup";
import AppFormFeild from "./AppFormFeild";
import SubmitButton from "./SubmitButton";
import { AuthContext } from "../../context";
import logger from "../../utiliy/logger";

const validationSchema = Yup.object({
  message: Yup.string().required().label("Message"),
});

function ContactSeller({ listing }) {
  //////////////////////////////////////

  const { token } = useContext(AuthContext);

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const res = await apiClient.send(message, listing.id, token);

    if (!res.ok) {
      logger.log(res);
      console.log("Error", res);
      return Alert.alert("Error", "Could not send message to user");
    }

    resetForm();

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "Your message was succesfully sent to the seller",
      },
      trigger: null,
    });
  };
  return (
    <View style={{ padding: 20 }}>
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
    </View>
  );
}

export default ContactSeller;
