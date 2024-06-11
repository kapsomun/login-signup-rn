import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';

import AsyncStorage from '@react-native-async-storage/async-storage';

import StyledInput from '../StyledInput';
import StyledButton from '../StyledButton';
import { StackActions, useNavigation } from '@react-navigation/native';
import { validationSchemaLogin, validationSchemaSignup } from './validation';

interface IForm {
	type: 'Login' | 'SignUp';
	btnTitle: string;
}

interface FormValues {
	name?: string;
	email: string;
	password: string;
}

const Form: FC<IForm> = ({ type, btnTitle }) => {
	const navigation = useNavigation();

	const validationSchema = type === 'Login' ? validationSchemaLogin : validationSchemaSignup;

	const initialValues: FormValues =
		type === 'Login' ? { email: '', password: '' } : { email: '', name: '', password: '' };

	const handleSubmit = async (values: FormValues) => {
		try {
			await AsyncStorage.setItem('userData', JSON.stringify(values));
			let replaceAction = StackActions.replace('HomeStack');
			if (values.name) {
				replaceAction = StackActions.replace('LoginStack');
			}
			navigation.dispatch(replaceAction);
		} catch (error) {
			console.error('Error saving data:', error);
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
						<View>
							<StyledInput
								placeholder="Name"
								value={values.name}
								onChangeText={handleChange('name')}
							/>
							{errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
						</View>
					)}
					<StyledInput
						placeholder="Email"
						value={values.email}
						onChangeText={handleChange('email')}
					/>
					{errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
					<StyledInput
						placeholder="Password"
						value={values.password}
						secureTextEntry={true}
						onChangeText={handleChange('password')}
					/>
					{errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
					<StyledButton onPress={handleSubmit} title={btnTitle} />
				</View>
			)}
		</Formik>
	);
};

export default Form;
