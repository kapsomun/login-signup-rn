import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './count-buttons-styles';
import PlusSvg from '@/assets/svg/PlusSvg';
import MinusSvg from '@/assets/svg/MinusSvg';

const CountButtons = ({ count, handleIncrease, handleDecrease }) => {
	return (
		<View style={styles.container}>
			<Pressable
				style={({ pressed }) => [styles.button, styles.decrease, pressed && styles.pressed]}
				onPress={handleDecrease}
			>
				<MinusSvg style={styles.decIcon}/>
			</Pressable>
			<Text style={styles.count}>
				{count}
			</Text>
			<Pressable
				style={({ pressed }) => [styles.button, styles.increase, pressed && styles.pressed]}
				onPress={handleIncrease}
			>
                
				<PlusSvg style={styles.incIcon}/>
			</Pressable>
		</View>
	);
};

export default CountButtons;
