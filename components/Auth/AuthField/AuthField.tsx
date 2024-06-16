import React from "react";
import { View, Text } from "react-native";

import Input from "@/components/Input";

interface AuthFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
}

const AuthField: React.FC<AuthFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry,
}) => (
  <View>
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
    {error && <Text style={{ color: "red" }}>{error}</Text>}
  </View>
);

export default AuthField;
