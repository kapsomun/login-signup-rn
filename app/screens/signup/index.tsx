import React, { FC } from 'react';
import { Text, View } from 'react-native';

import AuthHeader from '@/components/Auth/AuthHeader';
import AuthForm from '@/components/Auth/AuthForm';
import SignupSvg from '@/assets/svg/SignupSvg';

import styles from './styles';
import Button from '@/components/Button';
import AuthFooter from '@/components/Auth/AuthFooter/AuthFooter';
import Link from '@/components/Link';
import routes from '@/app/navigation/routes';

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
      <Link>{routes.LoginScreen}</Link>
      </AuthFooter>
    </View>
  );
};
export default SignupScreen;
