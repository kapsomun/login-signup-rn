import React, { FC } from "react";
import { TextInput, View } from "react-native";

import styles from "./styles";

interface IInput {
  onChangeText: (value?: any) => void;
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const Input: FC<IInput> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#8293aa"
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default Input;
