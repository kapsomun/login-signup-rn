import React, { FC } from 'react';

import RootNavigator from './navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App: FC = () => {
	return (
		<SafeAreaProvider>
				<RootNavigator />
		</SafeAreaProvider>
	);
};
export default App;
