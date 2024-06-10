import routes from '@/app/navigation/routes';
import { StackActions, useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function SplashScreenStack() {
    // const navigation = useNavigation();

    // const isFocused = useIsFocused()
    // useEffect(()=>{
    //     if(isFocused === true) {
    //         console.log('im here');
            
    //     }
    // }, [isFocused])





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

    return <View ><Text>hello</Text></View>;
}
