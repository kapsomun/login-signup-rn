import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Platform } from 'react-native';
import React, { FC } from 'react';

import ProgramRequestScreen1 from '../screens/programRequest/ProgramRequestScreen1';
import ProgramRequestScreen2 from '../screens/programRequest/ProgramRequestScreen2';
import ProgramRequestScreen3 from '../screens/programRequest/ProgramRequestScreen3';
import WelcomeScreen from '../screens/welcome';
import SignupScreen from '../screens/signup';
import SplashScreen from '../screens/splash';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';

import routes from './routes';

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const ProgramRequestStack = createStackNavigator();

const HomeStackScreens = () => {
	return (
		<HomeStack.Navigator initialRouteName={routes.HomeScreen}>
			<HomeStack.Screen
				name={routes.HomeScreen}
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<HomeStack.Screen
				name={routes.ProgramRequestStack}
				component={ProgramRequestStackScreens}
				options={{ headerShown: false }}
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
					Platform.OS === 'android'
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

const ProgramRequestStackScreens = () => {
	return (
		<ProgramRequestStack.Navigator initialRouteName={routes.ProgramRequestScreen1}>
			<ProgramRequestStack.Screen
				name={routes.ProgramRequestScreen1}
				component={ProgramRequestScreen1}
				options={{ headerShown: true, title: 'Информация о репатриатах' }}
			/>
			<ProgramRequestStack.Screen
				name={routes.ProgramRequestScreen2}
				component={ProgramRequestScreen2}
				options={{ headerShown: true, title: 'Выбор страны' }}
			/>
			<ProgramRequestStack.Screen
				name={routes.ProgramRequestScreen3}
				component={ProgramRequestScreen3}
				options={{ headerShown: true, title: 'Вид резиденства' }}
			/>
		</ProgramRequestStack.Navigator>
	);
};

const RootNavigator: FC = () => {
	return (
		<RootStack.Navigator initialRouteName={routes.SplashScreen}>
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
			<RootStack.Screen
				name={routes.ProgramRequestStack}
				component={ProgramRequestStackScreens}
				options={{ headerShown: false }}
			/>
		</RootStack.Navigator>
	);
};

export default RootNavigator;
