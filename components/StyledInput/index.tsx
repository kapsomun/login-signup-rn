import React from 'react';
import { TextInput, View } from "react-native";

import styles from "./styles";




export default function StyledInput({ placeholder="hello", value, onChangeText }) {

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholderTextColor="black"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
