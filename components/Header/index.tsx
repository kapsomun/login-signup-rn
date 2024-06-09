import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function HeaderSection({ imageSrc, title, describe }) {
  return (
    <View style={styles.textContainer}>
      <Image
        style={styles.image}
        source={{ uri: imageSrc }}
        resizeMode="cover"
      />
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.describe}>
        <Text style={styles.describeText}>{describe}</Text>
      </View>
    </View>
  );
}

