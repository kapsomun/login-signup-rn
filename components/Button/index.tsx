import React, { FC, ReactNode } from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';
import { NavigationProp,useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/app/navigation/routes';

export interface IButton {
	onPress?: (value?: any) => void;
	children: ReactNode;
	href?: keyof RootStackParamList;
}

const Button: FC<IButton> = ({ onPress, children, href }) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	if (href) {
		return (
			<Pressable
				onPress={() => navigation.navigate(href)}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		);
	}
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
		>
			<Text style={styles.buttonText}>{children}</Text>
		</Pressable>
	);
};

export default Button;
