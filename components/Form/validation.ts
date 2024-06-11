import * as Yup from 'yup';
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    .required("Password is required"),
});

