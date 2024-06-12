import React, { FC } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

interface IAuthFooter {
  title: string;
  children: JSX.Element;
}

const AuthFooter: FC<IAuthFooter> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {children}
    </View>
  );
};

export default AuthFooter;
