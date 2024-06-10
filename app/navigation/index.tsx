import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import HomeScreen from '../screens/home';

import routes from './routes';
import SplashScreenStack from '../screens/splash';


const RootStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();



const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator initialRouteName={routes.HomeStack}>
      <HomeStack.Screen
        name={routes.HomeStack}
        component={HomeScreen}
        options={{headerShown: false, orientation: 'portrait'}}
      />
    </HomeStack.Navigator>
  );
};

const LoginStackScreens = () => {
  return (
    <LoginStack.Navigator initialRouteName={routes.HomeStack}>
      <LoginStack.Screen
        name={routes.LoginStack}
        component={LoginScreen}
        options={{headerShown: false, orientation: 'portrait'}}
      />
    <LoginStack.Screen
            name={routes.SignupStack}
            component={SignupScreen}
            options={{headerShown: false, orientation: 'portrait'}}
        />

    </LoginStack.Navigator>
  );
};


const RootNavigator: FC = () => {
  return (
      <RootStack.Navigator initialRouteName={routes.SplashScreen}>
        <RootStack.Screen
          name={routes.SplashScreen}
          component={SplashScreenStack}
          options={{headerShown: false, orientation: 'portrait'}}
        />
        <RootStack.Screen
          name={routes.LoginStack}
          component={LoginStackScreens}
          options={{headerShown: false, orientation: 'portrait'}}
        />
        <RootStack.Screen
          name={routes.HomeStack}
          component={HomeStackScreens}
          options={{headerShown: false, orientation: 'portrait'}}
        />
      </RootStack.Navigator>
  );
};




export default RootNavigator;