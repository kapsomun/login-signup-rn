import React, { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

const HomeScreen: FC = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const getName = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData) {
          const { name } = JSON.parse(userData);
          setName(name);
        }
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };

    getName();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome {name ? name : "Guest"}</Text>
    </View>
  );
};

export default HomeScreen;
