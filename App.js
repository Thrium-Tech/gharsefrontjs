const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LiveTracking from "./screens/LiveTracking";
import DeliveredPage from "./screens/DeliveredPage";
import RestaurantSearch from "./screens/RestaurantSearch";
import RestaurantMenu from "./screens/RestaurantMenu";
import EditAddOn from "./screens/EditAddOn";
import MealCollapsed from "./screens/MealCollapsed";
import MealFull from "./screens/MealFull";
import Cart from "./screens/Cart";
import Favourites from "./screens/Favourites";
import EditCardDetailsPage from "./screens/EditCardDetailsPage";
import DiscoverPageIcon from "./screens/DiscoverPageIcon";
import PaymentMethodsPage from "./screens/PaymentMethodsPage";
import Home1 from "./screens/Home1";
import SearchViaHome from "./screens/SearchViaHome";
import EditAddressPage from "./screens/EditAddressPage";
import ProfilePage from "./screens/ProfilePage";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import HamburgerMenu from "./screens/HamburgerMenu";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Manrope_regular: require("./assets/fonts/Manrope_regular.ttf"),
    Manrope_medium: require("./assets/fonts/Manrope_medium.ttf"),
    Manrope_semibold: require("./assets/fonts/Manrope_semibold.ttf"),
    Manrope_bold: require("./assets/fonts/Manrope_bold.ttf"),
    Raleway_regular: require("./assets/fonts/Raleway_regular.ttf"),
    "Work Sans_light": require("./assets/fonts/Work_Sans_light.ttf"),
    "Work Sans_regular": require("./assets/fonts/Work_Sans_regular.ttf"),
    "Work Sans_semibold": require("./assets/fonts/Work_Sans_semibold.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LiveTracking"
              component={LiveTracking}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliveredPage"
              component={DeliveredPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantSearch"
              component={RestaurantSearch}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantMenu"
              component={RestaurantMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditAddOn"
              component={EditAddOn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealCollapsed"
              component={MealCollapsed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealFull"
              component={MealFull}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Favourites"
              component={Favourites}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditCardDetailsPage"
              component={EditCardDetailsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DiscoverPage"
              component={DiscoverPageIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethodsPage"
              component={PaymentMethodsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchViaHome"
              component={SearchViaHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditAddressPage"
              component={EditAddressPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage"
              component={ProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
