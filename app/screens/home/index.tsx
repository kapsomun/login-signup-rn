import { NavigationProp, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import Button from '@/components/Button';

import routes, { RootStackParamList } from '@/app/navigation/routes';

import styles from './styles';

const HomeScreen: FC = () => {
	const [name, setName] = useState<string | null>(null);
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	useEffect(() => {
		const getName = async () => {
			try {
				const userData = await AsyncStorage.getItem('userData');
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
		navigation.navigate(routes.ProgramRequestStack);
	};

	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<View>
					<Button title="Go to Form" handlePress={handlePress} />
				</View>
			</View>
		</View>
	);
};

export default HomeScreen;
