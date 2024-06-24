const routes = {
	SplashScreen: 'SplashScreen' as const,
	ProgramRequestStack: 'ProgramRequestStack' as const,
	ProgramRequestSendRequest: 'ProgramRequestSendRequest' as const,
	ProgramRequestCountrySelection: 'ProgramRequestCountrySelection' as const,
	ProgramRequestResidencyType: 'ProgramRequestResidencyType' as const,
};

export type RootStackParamList = {
	SplashScreen: undefined;
	ProgramRequestStack: undefined;
	ProgramRequestSendRequest: undefined;
	ProgramRequestCountrySelection: {
		data: { name: string; email: string; phoneNumber: string; adults: number; children: number };
	};
	ProgramRequestResidencyType: {
		data: { name: string; email: string; phoneNumber: string; adults: number; children: number };
	};
};

export default routes;
