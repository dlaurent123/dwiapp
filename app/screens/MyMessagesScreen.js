import React from "react";
import { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

function MyMessagesScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: "new new " });
  });

  // add a listener to this screen from firebase to query all names of current chats and the last message (which will be displayed as the subtitle)

  return (
    <View style={styles.container}>
      <Text>WORKING</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyMessagesScreen;
