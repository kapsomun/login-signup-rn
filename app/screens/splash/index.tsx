import routes from '@/app/navigation/routes';
// import { getItem } from '@/storage/mmkvStorage';
import { StackActions, useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function SplashScreen() {


    const isFocused = useIsFocused()
    useEffect(()=>{
        if(isFocused === true) {

            StackActions.replace(routes.LoginScreen);
        }
    }, [isFocused])





    // useEffect(() => {
    //     function onAuthStateChanged(userData: any) {
    //         const goToTabs = () => {
    //             const replaceAction = StackActions.replace(routes.HomeStack);
    //             navigation.dispatch(replaceAction);
    //         };

    //         const goToLogin = () => {
    //             const replaceAction = StackActions.replace(routes.LoginStack);
    //             navigation.dispatch(replaceAction);
    //         };

    //         if (userData) {
    //             goToTabs();
    //         } else {
    //             goToLogin();
    //         }
    //     }

    //     onAuthStateChanged(5435435435); // Або onAuthStateChanged(реальні_дані_користувача)
    // }, [navigation]);

    return <View />;
}
// https://github.com/mrousavy/react-native-mmkv


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