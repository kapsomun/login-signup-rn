import React, { FC } from "react";
import { Pressable, Text } from "react-native";
import { useNavigation } from "expo-router";

import { StackNavigationProps } from "@/type";

import styles from "./styles";

interface IButton {
  onPress?: (value?: any) => void;
  title: string;
  screenName?: string;
}

const StyledButton: FC<IButton> = ({ onPress, title, screenName }) => {
  const navigation = useNavigation <StackNavigationProps>();

  if (screenName) {
    return (
      <Pressable
        onPress={() => navigation.navigate(screenName)}
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

export default StyledButton;
