import React, { FC } from "react";
import { Pressable, Text } from "react-native";

import styles from "./styles";
import { StackActions, useNavigation } from "@react-navigation/native";

export interface IButton {
  onPress?: (value?: any) => void;
  title: string;
  href?: string;
}

const Button: FC<IButton> = ({ onPress, title, href }) => {
  const navigation = useNavigation();
  const replaceAction = StackActions.replace(href);

  if (href) {
    return (
      <Pressable
        onPress={() => navigation.dispatch(replaceAction)}
        style={styles.underlineButton}
      >
        <Text style={styles.linkText}>{title}</Text>
      </Pressable>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;
