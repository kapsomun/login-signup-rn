import React, { FC } from 'react';
import { Text, View } from 'react-native';

import Header from '@/components/AuthHeader';
import AuthForm from '@/components/AuthForm';
import SignupSvg from '@/assets/svg/SignupSvg';

import styles from './styles';
import Button from '@/components/Button';

const SignupScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Header
				Image={<SignupSvg style={{ width: 150, height: 150 }} />}
				title="Create your Account"
				describe={`Lorem ipsum dolor sit amet consectetur ${'\n'} adipisicing elit. Commodi, ullam.`}
			/>
			<AuthForm type="SignUp"  />
			<View>
				<Text>
					If u have allready an account 
					<Button title='Login' />
				</Text>
			</View>
		</View>
	);
};
export default SignupScreen;
