import React from 'react';
import { Pressable, Text } from "react-native";


import styles from "./styles";







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
