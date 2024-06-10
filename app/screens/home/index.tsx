import React, { FC } from 'react';
import { Text, View } from 'react-native';

import Header from '@/components/Header';
import Form from '@/components/Form';
import LinkText from '@/components/LinkText';
import LoginSvg from '@/assets/svg/LoginSvg';

import styles from './styles';

const HomeScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
		</View>
	);
};
export default HomeScreen;
