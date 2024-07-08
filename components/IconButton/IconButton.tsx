import React, { FC, ReactNode, useMemo } from 'react';
import { Pressable } from 'react-native';

import styles from './icon-button-styles';

interface IButton {
	handlePress: (value?: any) => void;
	color?: 'black' | 'white' | 'blue';
	disabled?: boolean;
	children: ReactNode;
}

const IconButton: FC<IButton> = ({ handlePress, disabled, children }) => {
	return (
		<Pressable
			onPress={handlePress}
			style={({ pressed }) => [styles.buttonContainer, pressed && styles.pressed]}
			disabled={disabled}
		>
			{children}
		</Pressable>
	);
};
export default IconButton;
