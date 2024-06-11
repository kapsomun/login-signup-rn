import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "./app/navigation/routes";

export type StackNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  LoginScreen,
  SignupScreen,
  HomeStack,
  WelcomeScreen
>;
