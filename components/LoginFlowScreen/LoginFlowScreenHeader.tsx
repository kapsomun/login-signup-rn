import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/routes';

import {IconBackLeft} from '../../assets/svg';

import styles from './login-flow-screen-header-styles';

const LoginFlowScreenHeader: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleBackBtnPressed = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Pressable onPress={handleBackBtnPressed}>
        <IconBackLeft />
      </Pressable>
    </View>
  );
};

export default LoginFlowScreenHeader;
