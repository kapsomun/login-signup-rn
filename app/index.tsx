import React, { FC } from 'react';

import RootNavigator from './navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App: FC = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex:1, backgroundColor: '#eee' }}>
				<RootNavigator />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};
export default App;
