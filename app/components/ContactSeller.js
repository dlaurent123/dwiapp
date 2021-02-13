import React from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { send } from "../api/messages";

function ContactSeller({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();
  };
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default ContactSeller;
