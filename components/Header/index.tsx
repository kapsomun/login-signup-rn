import {Text, View } from 'react-native';
import styles from './styles';
import React from 'react';
export default function Header({ Image, title, describe }) {
	return (
		<View style={styles.textContainer}>
			<View >
			{Image()}
			</View>
			<View style={styles.title}>
				<Text style={styles.titleText}>{title}</Text>
			</View>
			<View style={styles.describe}>
				<Text style={styles.describeText}>{describe}</Text>
			</View>
		</View>
	);
}
