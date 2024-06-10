import React, { FC } from 'react';
import { Pressable, Text } from "react-native";

import styles from "./styles";

interface IButton {
  onPress: (value?: any) => void;
  title: string;
}

const StyledButton: FC<IButton> = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

export default StyledButton;
