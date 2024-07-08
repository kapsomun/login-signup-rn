const routes = {
	SplashScreen: 'SplashScreen' as const,
	ProgramRequestStack: 'ProgramRequestStack' as const,
	ProgramRequestSendRequestScreen: 'ProgramRequestSendRequestScreen' as const,
	ProgramRequestCountrySelectionScreen: 'ProgramRequestCountrySelectionScreen' as const,
	ProgramRequestResidencyTypeScreen: 'ProgramRequestResidencyTypeScreen' as const,
};

export type RootStackParamList = {
	SplashScreen: undefined;
	ProgramRequestStack: undefined;
	ProgramRequestSendRequestScreen: undefined;
	ProgramRequestCountrySelectionScreen: {
		data: { name: string; email: string; phoneNumber: string; adults: number; children: number };
	};
	ProgramRequestResidencyTypeScreen: {
		data: { name: string; email: string; phoneNumber: string; adults: number; children: number };
	};
};

export default routes;
