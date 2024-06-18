import React, { FC } from "react";
import { Text, View } from "react-native";

import routes from "@/app/navigation/routes";

import AuthHeader from "@/components/Auth/AuthHeader";
import AuthForm from "@/components/Auth/AuthForm";
import Link from "@/components/Link";
import AuthFooter from "@/components/Auth/AuthFooter/AuthFooter";

import LoginSvg from "@/assets/svg/LoginSvg";

import styles from "./styles";



const LoginScreen: FC = () => {
  return (
    <View style={styles.container}>
      <AuthHeader
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
      <AuthFooter title="If u haven't an account">
        <Link href={routes.SignupScreen} >Sign up</Link>
      </AuthFooter>
    </View>
  );
};
export default LoginScreen;
