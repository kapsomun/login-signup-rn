import {Text, View } from 'react-native';
import React, { FC } from 'react';

import styles from './styles';

interface IHeader {
	Image : JSX.Element
	title: string;
	describe: string;
}
const Header:FC<IHeader> = ({ Image, title, describe }) => {
	return (
		<View style={styles.textContainer}>
			<View >
			{Image}
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
export default  Header