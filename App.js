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
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      title="Click"
    />
  );
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>TWEETS</Text>
      <Link />
    </Screen>
  );
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>TWEETDETAILS {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "red",
        activeTintColor: "white",
        inactiveBackgroundColor: "blue",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        component={StackNavigator}
        name="Feed"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons color={color} name="home" size={size} />
          ),
        }}
      />
      <Tab.Screen component={Account} name="Account" />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "blue" } }}
      initialRouteName="Tweets"
    >
      <Stack.Screen
        options={{ headerStyle: { backgroundColor: "red" } }}
        name="Tweets"
        component={Tweets}
      />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }) => ({
          title: route.params.id,
        })}
      />
    </Stack.Navigator>
  );
};

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style={"auto"} />
//       {/* <WelcomeScreen /> */}
//       {/* <ViewImageScreen /> */}
//       {/* <ListingDetails /> */}
//       {/* <Messaging /> */}

//       {/* <Screen> */}
//       {/* <Button onPress={selectImage} title="Select Image" /> */}
//       {/* <Image style={{ width: 200, height: 200 }} source={{ uri: imageUri }} /> */}
//       {/* </Screen> */}
//       <ListingEditScreen />
//       {/* <MyaccountScreen /> */}
//       {/* <ListingsScreen /> */}
//       {/* <Screen> */}
//       {/* <AppPicker
//           onSelectItem={(item) => setCategory(item)}
//           items={categories}
//           icon="apps"
//           placeholder={"Category"}
//           selectedItem={category}
//         /> */}
//       {/* <AppInput placeholder={"Email"} icon="email" /> */}

//       {/* <LoginScreen /> */}
//       {/* </Screen> */}

//       {/* <RegisterScreen /> */}
//       {/* <ListingEditScreen /> */}
//     </View>
//   );
// }

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default App;
