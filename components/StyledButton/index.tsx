import { Pressable, Text } from "react-native";
import styles from "./styles";
import React from 'react';

export default function StyledButton({ onPress, title }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
