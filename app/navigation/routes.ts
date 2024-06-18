const routes = {
	SplashScreen: 'SplashScreen' as const,
	HomeStack: 'HomeStack' as const,
	HomeScreen: 'HomeScreen' as const,
	LoginStack: 'LoginStack' as const,
	LoginScreen: 'LoginScreen' as const,
	SignupScreen: 'SignupScreen' as const,
	WelcomeScreen: 'WelcomeScreen' as const,
	ProgramRequestStack: 'ProgramRequestStack' as const,
	ProgramRequestScreen1: 'ProgramRequestScreen1' as const,
	ProgramRequestScreen2: 'ProgramRequestScreen2' as const,
	ProgramRequestScreen3: 'ProgramRequestScreen3' as const,
};

export type RootStackParamList = {
	SplashScreen: undefined;
	LoginScreen: undefined;
	LoginStack: undefined;
	SignupScreen: undefined;
	HomeScreen: undefined;
	HomeStack: undefined;
	WelcomeScreen: undefined;
	ProgramRequestStack: undefined;
	ProgramRequestScreen1: undefined;
	ProgramRequestScreen2: {
		data: { name: string; email: string; phoneNumber: string; adults: number; children: number };
	};
	ProgramRequestScreen3: {
		data: { name: string; email: string; phoneNumber: string; adults: number; children: number };
	};
};

export default routes;
