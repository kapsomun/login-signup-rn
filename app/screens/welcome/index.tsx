import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';

import styles from './styles';
import Button from '@/components/Button';

const WelcomeScreen: FC = () => {
	const [name, setName] = useState<string | null>(null);
	const navigation = useNavigation();
	const replaceAction = StackActions.replace('LoginStack');

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

	const handleSignOut = () => {
		setName('');
	};
	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={styles.titleText}>Welcome {name ? name : 'Guest'}!</Text>
			</View>
			<View>
				{name ? (
					<Button title="Sign out" underline onPress={() => handleSignOut()} />
				) : (
					<View>
						<Button
							title="Login"
							onPress={() => {
								navigation.dispatch(replaceAction);
							}}
						/>
					</View>
				)}
			</View>
		</View>
	);
};

export default WelcomeScreen;
