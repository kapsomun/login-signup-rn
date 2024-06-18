import React, { FC } from 'react';
import {View } from 'react-native';

import AuthFooter from '@/components/Auth/AuthFooter/AuthFooter';
import AuthHeader from '@/components/Auth/AuthHeader';
import AuthForm from '@/components/Auth/AuthForm';
import Link from '@/components/Link';

import routes from '@/app/navigation/routes';

import SignupSvg from '@/assets/svg/SignupSvg';

import styles from './styles';

const SignupScreen: FC = () => {
	return (
    <View style={styles.container}>
      <AuthHeader
        Image={<SignupSvg style={{ width: 150, height: 150 }} />}
        title="Create your Account"
        describe={`Lorem ipsum dolor sit amet consectetur ${"\n"} adipisicing elit. Commodi, ullam.`}
      />
      <AuthForm type="SignUp" />
      <AuthFooter title="If u have allready an account">
      <Link href={routes.LoginScreen} >Log in</Link>
      </AuthFooter>
    </View>
  );
};
export default SignupScreen;
