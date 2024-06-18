import { StackActions, useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';

import routes from '@/app/navigation/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen() {
	const navigation = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused) {
			const checkUser = async () => {
				const user = await AsyncStorage.getItem('user');
				onAuthStateChanged(user);
			};
			setTimeout(checkUser, 2000);
		}
	}, [navigation]);

	function onAuthStateChanged(userData: any) {
		const goToTabs = () => {
			const replaceAction = StackActions.replace(routes.HomeStack);
			navigation.dispatch(replaceAction);
		};

		const goToLogin = () => {
			const replaceAction = StackActions.replace(routes.ProgramRequestStack);
			navigation.dispatch(replaceAction);
		};

		if (userData) {
			goToTabs();
		} else {
			goToLogin();
		}
	}

	return <View />;
}

// useEffect(() => {
// 	const getData = async () => {
// 		try {
// 			const userData = await AsyncStorage.getItem('userData');
// 			if (userData) {
// 				const parsedData = JSON.parse(userData);
// 				setData(parsedData);
// 			}
// 		} catch (error) {
// 			console.error('Error retrieving user data:', error);
// 		}
// 	};

// 	getData();
// }, []);

// useEffect(() => {
// 	if (isFocused) {
// 		onAuthStateChanged(data);
// 	}
// }, [isFocused, data]);

//
