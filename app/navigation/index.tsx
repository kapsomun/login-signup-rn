import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Platform } from "react-native";
import routes, { RootStackParamList } from "./routes";

import LoginScreen from "../screens/login";
import SignupScreen from "../screens/signup";
import HomeScreen from "../screens/home";
import SplashScreen from "../screens/splash";
import WelcomeScreen from "../screens/welcome";

const RootStack = createStackNavigator<RootStackParamList>();
const HomeStack = createStackNavigator<RootStackParamList>();
const LoginStack = createStackNavigator<RootStackParamList>();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator initialRouteName={routes.HomeScreen}>
      <HomeStack.Screen
        name={routes.HomeScreen}
        component={HomeScreen}
        options={{ headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

const LoginStackScreens = () => {
  return (
    <LoginStack.Navigator
      initialRouteName={routes.LoginScreen}
      screenOptions={{
        cardStyleInterpolator:
          Platform.OS === "android"
            ? CardStyleInterpolators.forScaleFromCenterAndroid
            : CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <LoginStack.Screen
        name={routes.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name={routes.SignupScreen}
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
};

const RootNavigator: FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName={routes.SplashScreen}>
      <RootStack.Screen
        name={routes.SplashScreen}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={routes.WelcomeScreen}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={routes.LoginStack}
        component={LoginStackScreens}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={routes.HomeStack}
        component={HomeStackScreens}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
