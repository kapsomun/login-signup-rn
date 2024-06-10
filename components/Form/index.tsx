import React from 'react';
import { View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import StyledInput from "../StyledInput";
import StyledButton from "../StyledButton";




const Form = ({ type, btnTitle = "Log in" }) => {
  const initialValues =
    type === "Login"
      ? { email: "", password: "" }
      : { email: "", name: "", password: "" };

  const validationSchema = Yup.object().shape({
    name: type !== "Login" ? Yup.string().required("Name is required") : null,
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
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
                // onBlur={handleChange("name")}
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
            // onBlur={handleChange("email")}
          />
          {errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}
          <StyledInput
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            // onBlur={handleChange("password")}
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
