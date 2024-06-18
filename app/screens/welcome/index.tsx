import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import Button from '@/components/Button';
import routes from '@/app/navigation/routes';

const WelcomeScreen: FC = () => {
	const [name, setName] = useState<string | null>(null);
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


	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={styles.titleText}>Welcome {name ? name : 'Guest'}!</Text>
			</View>
			<View>
				{name ? (
					<Button  href={routes.HomeStack} >Home </Button>
				) : (
					<Button href={routes.LoginScreen}>Login</Button>
				)}
			</View>
		</View>
	);
};

export default WelcomeScreen;
