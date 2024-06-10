import React, { FC } from 'react';
import { Text, View } from 'react-native';

import Header from '@/components/Header';
import Form from '@/components/Form';
import LinkText from '@/components/LinkText';
import LoginSvg from '@/assets/svg/LoginSvg';

import styles from './styles';

const LoginScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Header
				Image={<LoginSvg style={{ width: 150, height: 150 }} />}
				title="Log into your Account"
				describe={`Lorem ipsum dolor sit amet consectetur ${'\n'} adipisicing elit. Commodi, ullam.`}
			/>
			<View>
				<Form type="Login" btnTitle="Log in" />
				<View style={styles.underline}>
					<Text style={styles.underlineText}>Forgot password?</Text>
				</View>
			</View>
			<LinkText mainText="If you don't have an account, " linkText="Sign up." link="/signup" />
		</View>
	);
};
export default LoginScreen;
