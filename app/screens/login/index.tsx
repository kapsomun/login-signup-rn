import React, { FC } from "react";
import { Text, View } from "react-native";

import Header from "@/components/AuthHeader";
import AuthForm from "@/components/AuthForm";
import Button from "@/components/Button";
import AuthFooter from "@/components/AuthFooter/AuthFooter";

import LoginSvg from "@/assets/svg/LoginSvg";

import styles from "./styles";

const LoginScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Header
        Image={<LoginSvg style={{ width: 150, height: 150 }} />}
        title="Log into your Account"
        describe={`Lorem ipsum dolor sit amet consectetur ${"\n"} adipisicing elit. Commodi, ullam.`}
      />
      <View>
        <AuthForm type="Login" />
        <View style={styles.underline}>
          <Text style={styles.underlineText}>Forgot password?</Text>
        </View>
      </View>
      <AuthFooter title="If u have allready an account">
        <Button title="Signup" href="SignupScreen" />
      </AuthFooter>
    </View>
  );
};
export default LoginScreen;
