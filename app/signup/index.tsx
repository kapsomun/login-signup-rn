import { View } from "react-native";

import Header from "@/components/Header";
import Form from "@/components/Form";
import LinkText from "@/components/LinkText";
import styles from "./styles";

export default function Signup() {
  return (
    <View style={styles.container}>
      <Header
        imageSrc="/assets/svg/signup.svg"
        title="Create your Account"
        describe={`Lorem ipsum dolor sit amet consectetur ${"\n"} adipisicing elit. Commodi, ullam.`}
      />
      <Form type="SignUp" btnTitle="Sign up" />
      <LinkText
        mainText="If you have an account, "
        linkText="Log in."
        link="/"
      />
    </View>
  );
}
