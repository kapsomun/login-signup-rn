import React, { FC } from 'react';
import { View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import StyledInput from "../StyledInput";
import StyledButton from "../StyledButton";


interface IForm {
  type: "Login" | "SignUp"; 
  btnTitle: string; 
}

interface FormValues {
  name?: string;
  email: string;
  password: string;
}

const Form:FC<IForm> = ({ type, btnTitle}) => {
  
  const initialValues:FormValues =
    type === "Login"
      ? { email: "", password: "" }
      : { email: "", name: "", password: "" };

      const validationSchema = Yup.object().shape({
        name: type !== "Login" ? Yup.string().required("Name is required") : null,
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
      });
      const handleSubmit = async (values: FormValues) => {
        try {
          // await setItem("userData", values);
          console.log("Data saved successfully:", values);
        } catch (error) {
          console.error("Error saving data:", error);
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
          {type !== "Login" && (
            <View>
              <StyledInput
                placeholder="Name"
                value={values.name}
                onChangeText={handleChange("name")}
              />
              {errors.name && (
                <Text style={{ color: "red" }}>{errors.name}</Text>
              )}
            </View>
          )}
          <StyledInput
            placeholder="Email"
            value={values.email}
            onChangeText={handleChange("email")}
          />
          {errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}
          <StyledInput
            placeholder="Password"
            value={values.password}
            secureTextEntry={true}
            onChangeText={handleChange("password")}
          />
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password}</Text>
          )}
          <StyledButton onPress={handleSubmit} title={btnTitle} />
        </View>
      )}
    </Formik>
  );
};

export default Form;
