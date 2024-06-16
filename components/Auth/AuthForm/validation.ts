import * as Yup from 'yup';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from '@react-navigation/native';
import { FormValues } from '.';


export const handleLogin = async (values: FormValues, navigation: any) => {
	try {
		const userData = await AsyncStorage.getItem('userData');
		if (userData) {
			const parsedData = JSON.parse(userData);
			if (parsedData.email === values.email && parsedData.password === values.password) {
				const replaceAction = StackActions.replace('HomeStack');
				navigation.dispatch(replaceAction);
			} else {
				console.error('Invalid email or password');
			}
		} else {
			console.error('User not found');
		}
	} catch (error) {
		console.error('Error handling form submission:', error);
	}
};

export const handleSignup = async (values: FormValues, navigation: any) => {
	try {
		const existingData = await AsyncStorage.getItem('userData');
		let updatedData = values;

		if (existingData) {
			const parsedData = JSON.parse(existingData);
			updatedData = { ...parsedData, ...values };
		}
		await AsyncStorage.setItem('userData', JSON.stringify(updatedData));
		const replaceAction = StackActions.replace('LoginStack');
		navigation.dispatch(replaceAction);
	} catch (error) {
		console.error('Error handling form submission:', error);
	}
};


export const validationSchemaSignup = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required'),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .test("checkEmailExists", "Email does not exist", async (value) => {
      if (!value) return false; // якщо немає email, повертаємо помилку

      try {
        const userData = await AsyncStorage.getItem("userData");
        const parsedData = userData ? JSON.parse(userData) : {};
        return parsedData.email === value;
      } catch (error) {
        console.error("Error accessing storage:", error);
        return false;
      }
    }),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .test("checkPasswordCorrect", "Password is incorrect", async (value) => {
      if (!value) return false; // якщо немає email, повертаємо помилку

      try {
        const userData = await AsyncStorage.getItem("userData");
        const parsedData = userData ? JSON.parse(userData) : {};
        return parsedData.password === value;
      } catch (error) {
        console.error("Error accessing storage:", error);
        return false;
      }
    }),
});

