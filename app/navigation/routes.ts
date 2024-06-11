
const routes = {
  SplashScreen: "SplashScreen" as const,
  HomeStack: "HomeStack" as const,
  HomeScreen: "HomeScreen" as const,
  LoginStack: "LoginStack" as const,
  LoginScreen: "LoginScreen" as const,
  SignupScreen: "SignupScreen" as const,
  WelcomeScreen: "WelcomeScreen" as const,
};

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  LoginStack: undefined;
  SignupScreen: undefined;
  HomeScreen: undefined;
  HomeStack: undefined;
  WelcomeScreen: undefined;
};


export default routes