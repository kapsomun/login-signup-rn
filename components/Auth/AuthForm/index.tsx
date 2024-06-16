import React, { FC } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import {
	handleLogin,
	handleSignup,
	validationSchemaLogin,
	validationSchemaSignup,
} from './validation';
import AuthField from '../AuthField/AuthField';
import Button from '../../Button';

interface IForm {
	type: 'Login' | 'SignUp';
}

export interface FormValues {
	name?: string;
	email: string;
	password: string;
}

const AuthForm: FC<IForm> = ({ type }) => {
	const navigation = useNavigation();
	const validationSchema = type === 'Login' ? validationSchemaLogin : validationSchemaSignup;

	const initialValues: FormValues =
		type === 'Login' ? { email: '', password: '' } : { email: '', name: '', password: '' };

	const handleSubmit = async (values: FormValues) => {
		if (type === 'SignUp') {
			await handleSignup(values, navigation);
		} else if (type === 'Login') {
			await handleLogin(values, navigation);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
			validateOnChange={false}
			validateOnBlur={false}
		>
			{({ handleSubmit, handleChange, values, errors }) => (
				<View>
					{type !== 'Login' && (
						<AuthField
							placeholder="Name"
							value={values.name || ''}
							onChangeText={handleChange('name')}
							error={errors.name}
						/>
					)}
					<AuthField
						placeholder="Email"
						value={values.email}
						onChangeText={handleChange('email')}
						error={errors.email}
					/>
					<AuthField
						placeholder="Password"
						value={values.password}
						onChangeText={handleChange('password')}
						error={errors.password}
						secureTextEntry
					/>
					<Button onPress={handleSubmit} title={type === 'Login' ? 'Login' : 'Sign up'} />
				</View>
			)}
		</Formik>
	);
};

export default AuthForm;
