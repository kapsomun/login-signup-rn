import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import Button from '@/components/Button';
import routes, { RootStackParamList } from '@/app/navigation/routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const WelcomeScreen: FC = () => {
	const [name, setName] = useState<string | null>(null);
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	useEffect(() => {
		const getName = async () => {
			try {
				const userData = await AsyncStorage.getItem('userData');
				console.log(userData);
				
				if (userData) {
					const { name } = JSON.parse(userData);
					setName(name);
				}
			} catch (error) {
				console.error('Error retrieving user data:', error);
			}
		};

		getName();
	}, []);



	const handlePress = () => {
		name ?

		navigation.navigate(routes.HomeStack)
		:
		navigation.navigate(routes.LoginScreen)
	}

	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={styles.titleText}>Welcome {name ? name : 'Guest'}!</Text>
			</View>
			<View>
				{name ? (
					<Button title='Home' handlePress={handlePress}  />
				) : (
					<Button title='Login' handlePress={handlePress}  />
				)}
			</View>
		</View>
	);
};

export default WelcomeScreen;
