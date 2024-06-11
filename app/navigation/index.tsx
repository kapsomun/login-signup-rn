import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes, { RootStackParamList } from "./routes";

import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import HomeScreen from '../screens/home';
import SplashScreen from "../screens/splash";
import WelcomeScreen from '../screens/welcome';


const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<RootStackParamList>();
const LoginStack = createNativeStackNavigator<RootStackParamList>();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator initialRouteName={routes.HomeScreen}>
      <HomeStack.Screen
        name={routes.HomeScreen}
        component={HomeScreen}
        options={{ headerShown: false, orientation: "portrait" }}
      />
    </HomeStack.Navigator>
  );
};

const LoginStackScreens = () => {
  return (
    <LoginStack.Navigator initialRouteName={routes.LoginScreen}>
      <LoginStack.Screen
        name={routes.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false, orientation: "portrait" }}
      />
      <LoginStack.Screen
        name={routes.SignupScreen}
        component={SignupScreen}
        options={{ headerShown: false, orientation: "portrait" }}
      />
    </LoginStack.Navigator>
  );
};

const RootNavigator: FC = () => {
  return (
    <RootStack.Navigator initialRouteName={routes.SplashScreen}>
      <RootStack.Screen
        name={routes.SplashScreen}
        component={SplashScreen}
        options={{ headerShown: false, orientation: "portrait" }}
      />
      <RootStack.Screen
        name={routes.WelcomeScreen}
        component={WelcomeScreen}
        options={{ headerShown: false, orientation: "portrait" }}
      />
      <RootStack.Screen
        name={routes.LoginStack}
        component={LoginStackScreens}
        options={{ headerShown: false, orientation: "portrait" }}
      />
      <RootStack.Screen
        name={routes.HomeStack}
        component={HomeStackScreens}
        options={{ headerShown: false, orientation: "portrait" }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;