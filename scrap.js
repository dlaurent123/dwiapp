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

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button
//       onPress={() => navigation.navigate(routes.TWEET_DETAILS, { id: 1 })}
//       title="Click"
//     />
//   );
// };

// const Tweets = ({ navigation }) => {
//   return (
//     <Screen>
//       <Text>TWEETS</Text>
//       <Link />
//     </Screen>
//   );
// };

// const TweetDetails = ({ route }) => {
//   return (
//     <Screen>
//       <Text>TWEETDETAILS {route.params.id}</Text>
//     </Screen>
//   );
// };

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeBackgroundColor: "red",
//         activeTintColor: "white",
//         inactiveBackgroundColor: "blue",
//         inactiveTintColor: "black",
//       }}
//     >
//       <Tab.Screen
//         component={StackNavigator}
//         name="Feed"
//         options={{
//           tabBarIcon: ({ size, color }) => (
//             <MaterialCommunityIcons color={color} name="home" size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen component={Account} name="Account" />
//     </Tab.Navigator>
//   );
// };

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{ headerStyle: { backgroundColor: "blue" } }}
//       initialRouteName="Tweets"
//     >
//       <Stack.Screen
//         options={{ headerStyle: { backgroundColor: "red" } }}
//         name="Tweets"
//         component={Tweets}
//       />
//       <Stack.Screen
//         name="TweetDetails"
//         component={TweetDetails}
//         options={({ route }) => ({
//           title: route.params.id,
//         })}
//       />
//     </Stack.Navigator>
//   );
// };

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
