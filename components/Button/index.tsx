import React, { FC } from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

interface IButton {
	onPress?: (value?: any) => void;
	title: string;
	underline?: boolean;
}

const Button: FC<IButton> = ({ onPress, title, underline }) => {

	if (underline) {
		return (
			<Pressable onPress={onPress} style={styles.underlineButton}>
				<Text style={styles.linkText}>{title}</Text>
			</Pressable>
		);
	}
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
		>
			<Text style={styles.buttonText}>{title}</Text>
		</Pressable>
	);
};

export default Button;
