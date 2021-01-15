import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
  Switch,
} from "react-native";
import Card from "./app/components/Card";
import ListingDetails from "./app/screens/ListingDetails";
import ListingsScreen from "./app/screens/ListingsScreen";
import Messaging from "./app/screens/Messaging";
import MyaccountScreen from "./app/screens/MyaccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import AppInput from "./app/components/AppInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import * as ImagePicker from "expo-image-picker";
import ImageInputList from "./app/components/ImageInputList";
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Electronics", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <View style={styles.container}>
      <StatusBar style={"auto"} />
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingDetails /> */}
      {/* <Messaging /> */}

      {/* <Screen> */}
      {/* <Button onPress={selectImage} title="Select Image" /> */}
      {/* <Image style={{ width: 200, height: 200 }} source={{ uri: imageUri }} /> */}
      {/* </Screen> */}
      <ListingEditScreen />
      {/* <MyaccountScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <Screen> */}
      {/* <AppPicker
          onSelectItem={(item) => setCategory(item)}
          items={categories}
          icon="apps"
          placeholder={"Category"}
          selectedItem={category}
        /> */}
      {/* <AppInput placeholder={"Email"} icon="email" /> */}

      {/* <LoginScreen /> */}
      {/* </Screen> */}

      {/* <RegisterScreen /> */}
      {/* <ListingEditScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
