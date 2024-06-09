import { Text, View } from "react-native";
import styles from "./styles";
import Header from "@/components/Header";
import Form from "@/components/Form";
import LinkText from "@/components/LinkText";

export default function Login() {
  return (
    <View style={styles.container}>
      <Header
        imageSrc="/assets/svg/login.svg"
        title="Log into your Account"
        describe={`Lorem ipsum dolor sit amet consectetur ${"\n"} adipisicing elit. Commodi, ullam.`}
      />
      <View>
        <Form type="Login" btnTitle="Log in" />
        <View style={styles.underline}>
          <Text style={styles.underlineText}>Forgot password?</Text>
        </View>
      </View>
      <LinkText
        mainText="If you don't have an account, "
        linkText="Sign up."
        link="/signup"
      />
    </View>
  );
}

