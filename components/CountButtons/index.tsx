import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import PlusSvg from '@/assets/svg/PlusSvg';
import MinusSvg from '@/assets/svg/MinusSvg';

const CountButtons = ({ count, handleIncrease, handleDecrease }) => {
	return (
		<View style={styles.count}>
			<Pressable
				style={({ pressed }) => [styles.button, styles.decrease, pressed && styles.pressed]}
				onPress={handleDecrease}
			>
				<MinusSvg style={styles.decText}/>
			</Pressable>
			<Text style={{ marginHorizontal: 10 }}>
				{count}
			</Text>
			<Pressable
				style={({ pressed }) => [styles.button, styles.increase, pressed && styles.pressed]}
				onPress={handleIncrease}
			>
                
				<PlusSvg style={styles.incText}/>
			</Pressable>
		</View>
	);
};

export default CountButtons;
