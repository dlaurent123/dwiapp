import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const AppInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          size={20}
          color={colors.medium}
          name={icon}
        />
      )}
      <TextInput {...otherProps} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    fontFamily: "Avenir",
    color: colors.dark,
  },

  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});

export default AppInput;
