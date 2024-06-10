import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';

import routes from './routes';




const Stack = createNativeStackNavigator();

// const RootNavigator: FC = () => {
//     return (
//         <RootStack.Navigator initialRouteName={routes.SplashScreen}>
//           <RootStack.Screen
//             name={routes.SplashScreen}
//             component={SplashScreen}
//             options={{headerShown: false, orientation: 'portrait'}}
//           />
//           <RootStack.Screen
//             name={routes.LoginStack}
//             component={LoginStackScreens}
//             options={{headerShown: false, orientation: 'portrait'}}
//           />
//           <RootStack.Screen
//             name={routes.HomeStack}
//             component={HomeStackScreens}
//             options={{headerShown: false, orientation: 'portrait'}}
//           />
//         </RootStack.Navigator>
//     );
//   };











const AuthStack:FC = () => {
	return (
			<Stack.Navigator initialRouteName='LoginScreen'>
				<Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false, orientation: 'portrait'}} />
				<Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown: false, orientation: 'portrait'}} />
			</Stack.Navigator>
	);
};



// const RootNavigator: FC = () => {
//     return (
//         <RootStack.Navigator initialRouteName={routes.SplashScreen}>
//           <RootStack.Screen
//             name={routes.SplashScreen}
//             component={SplashScreen}
//             options={{headerShown: false, orientation: 'portrait'}}
//           />
//           <RootStack.Screen
//             name={routes.LoginStack}
//             component={LoginStackScreens}
//             options={{headerShown: false, orientation: 'portrait'}}
//           />
//           <RootStack.Screen
//             name={routes.HomeStack}
//             component={HomeStackScreens}
//             options={{headerShown: false, orientation: 'portrait'}}
//           />
//         </RootStack.Navigator>
//     );
//   };

// const RootStack = createNativeStackNavigator();
// const HomeStack = createNativeStackNavigator();
// const LoginStack = createNativeStackNavigator();

// const HomeStackScreens = () => {
//   return (
//     <HomeStack.Navigator initialRouteName={routes.Home}>
//       <HomeStack.Screen
//         name={routes.Home}
//         component={() => <View></View>}//твоя компонента хоум
//         options={{headerShown: false, orientation: 'portrait'}}
//       />
//     </HomeStack.Navigator>
//   );
// };



// https://github.com/mrousavy/react-native-mmkv
// [14:37] Bogdan React Native developer
// const RootNavigator: FC = () => {
//   return (
//     <NavigationContainer>
//       {/* <RootStack.Navigator initialRouteName={routes.SplashScreen}> */}
//       <RootStack.Navigator initialRouteName={routes.LoginStack}>
//         <RootStack.Screen
//           name={routes.SplashScreen}
//           component={SplashScreenStack}
//           options={{headerShown: false, orientation: 'portrait'}}
//         />
//         <RootStack.Screen
//           name={routes.LoginStack}
//           component={LoginStackScreens}
//           options={{headerShown: false, orientation: 'portrait'}}
//         />
//         <RootStack.Screen
//           name={routes.HomeStack}
//           component={HomeStackScreens}
//           options={{headerShown: false, orientation: 'portrait'}}
//         />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// };
// [14:39] Bogdan React Native developer
// const RootStack = createNativeStackNavigator();
// const HomeStack = createNativeStackNavigator();
// const LoginStack = createNativeStackNavigator();
// [14:40] Bogdan React Native developer
//   function onAuthStateChanged(userData: any) {
//     const goToTabs = () => {
//       const replaceAction = StackActions.replace(routes.HomeStack);
//       navigation.dispatch(replaceAction);
//     };
 
//     const goToLogin = () => {
//       const replaceAction = StackActions.replace(routes.LoginStack);
//       navigation.dispatch(replaceAction);
//     };
 
//     if (userData) {
//       goToTabs();
//     } else {
//       goToLogin();
//     }
//   }
// [14:56] Bogdan React Native developer
// перший стек це хоум стек в ньому хоум скрін
// [14:56] Bogdan React Native developer
// другий стек це логін стек в ньому сайн ін і сайн апп
// [14:57] Bogdan React Native developer
// і третій стек це стек в якому зберігаються всі стеки
// [14:58] Bogdan React Native developer
// const RootNavigator: FC = () => {
//   return (
//       <RootStack.Navigator initialRouteName={routes.SplashScreen}>
//         <RootStack.Screen
//           name={routes.SplashScreen}
//           component={SplashScreen}
//           options={{headerShown: false, orientation: 'portrait'}}
//         />
//         <RootStack.Screen
//           name={routes.LoginStack}
//           component={LoginStackScreens}
//           options={{headerShown: false, orientation: 'portrait'}}
//         />
//         <RootStack.Screen
//           name={routes.HomeStack}
//           component={HomeStackScreens}
//           options={{headerShown: false, orientation: 'portrait'}}
//         />
//       </RootStack.Navigator>
//   );
// };
// [14:58] Bogdan React Native developer
// const RootStack = createNativeStackNavigator();
// const HomeStack = createNativeStackNavigator();
// const LoginStack = createNativeStackNavigator();
// [15:00] Bogdan React Native developer
// const HomeStackScreens = () => {
//   return (
//     <HomeStack.Navigator initialRouteName={routes.Home}>
//       <HomeStack.Screen
//         name={routes.Home}
//         component={() => <View></View>}//твоя компонента хоум
//         options={{headerShown: false, orientation: 'portrait'}}
//       />
//     </HomeStack.Navigator>
//   );
// };
// [15:02] Bogdan React Native developer
// const LoginStackScreens = () => {
//   return (
//     <LoginStack.Navigator initialRouteName={routes.Home}>
//       <LoginStack.Screen
//         name={routes.Home}
//         component={() => <View></View>}//твоя компонента логін
//         options={{headerShown: false, orientation: 'portrait'}}
//       />
//     </LoginStack.Navigator>
//   );
// };
// [15:54] Bogdan React Native developer
// export default {
//   SplashScreen: 'SplashScreenStack' as const,
//   Onboarding: 'OnboardingScreen' as const,
//   LoginStack: 'LoginStack' as const,
//   SignUpPhoneNumber: 'SignUpPhoneNumber' as const,
//   HomeStack: 'HomeStack' as const,
//   Home: 'HomeScreen' as const,
// };
 
// export type RootStackParamList = {
//   SplashScreen: undefined;
//   Onboarding: undefined;
//   LoginStack: undefined;
//   SignUpPhoneNumber: undefined;
//   HomeStack: undefined;
//   Home: undefined;
// };
 
// [16:07] Bogdan React Native developer
//   useFocusEffect(
//     useCallback(() => {
//       const onBackPress = () => {
//         return true
//       }
 
//       BackHandler.addEventListener('hardwareBackPress', onBackPress)
 
//       return () =>
//         BackHandler.removeEventListener('hardwareBackPress', onBackPress)
//     }, []),
//   )