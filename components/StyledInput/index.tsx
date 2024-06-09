import { TextInput, View } from "react-native";
import styles from "./styles";

export default function StyledInput({ placeholder, value, onChangeText }) {

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
