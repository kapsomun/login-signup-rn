import React, { FC, ReactNode } from "react";
import { Pressable, Text } from "react-native";

import styles from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/app/navigation/routes";

export interface ILink {
  children: ReactNode ;
  href?: keyof RootStackParamList;
}

const Link: FC<ILink> = ({ children, href }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
      <Pressable
        onPress={() => navigation.navigate(href)}
        style={styles.underlineLink}
      >
        <Text style={styles.linkText}>{children}</Text>
      </Pressable>
    );
 
};

export default Link;
