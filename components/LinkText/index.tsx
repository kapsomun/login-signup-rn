import { Link } from "expo-router";
import { View, Text } from "react-native";
import styles from "./styles";

const LinkText = ({ mainText, linkText, link }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{mainText}</Text>
      <Link style={styles.linkText} href={link}>
        {linkText}
      </Link>
    </View>
  );
};

export default LinkText;
