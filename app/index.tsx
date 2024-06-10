import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import LoginStack from './screens/login';
// import SignupStack from './screens/signup';
import RootNavigator from './navigation';

// const Stack = createNativeStackNavigator();

const App:FC = () => {
	return (
		<RootNavigator/>
			// <Stack.Navigator initialRouteName='LoginStack'>
			// 	<Stack.Screen name="LoginStack" component={LoginStack} options={{headerShown: false, orientation: 'portrait'}} />
			// 	<Stack.Screen name="SignupStack" component={SignupStack} options={{headerShown: false, orientation: 'portrait'}} />
			// </Stack.Navigator>
	);
};
export default App;
