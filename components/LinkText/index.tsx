import React, { FC } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';

import StyledButton from "../StyledButton";


import styles from './styles';


interface ILinkText {
	mainText: string;
	linkText: string;
	link: string;
}

const LinkText: FC<ILinkText> = ({ mainText, linkText, link }) => {
	
	return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{mainText}</Text>
      <StyledButton title={linkText} screenName={link} />
    </View>
  );
};

export default LinkText;
