import { createStackNavigator} from '@react-navigation/stack';
import React, { FC } from 'react';

import SplashScreen from '../screens/SplashScreen/SplashScreen';
import ProgramRequestSendRequestScreen from '../screens/ProgramRequestScreens/ProgramRequestSendRequestScreen/ProgramRequestSendRequestScreen';
import ProgramRequestCountrySelectionScreen from '../screens/ProgramRequestScreens/ProgramRequestCountrySelectionScreen/ProgramRequestCountrySelectionScreen';
import ProgramRequestResidencyTypeScreen from '../screens/ProgramRequestScreens/ProgramRequestResidencyTypeScreen/ProgramRequestResidencyTypeScreen';

import routes from './routes';


const RootStack = createStackNavigator();
const ProgramRequestStack = createStackNavigator();



const ProgramRequestStackScreens = () => {
	return (
		<ProgramRequestStack.Navigator initialRouteName={routes.ProgramRequestSendRequestScreen}>
			<ProgramRequestStack.Screen
				name={routes.ProgramRequestSendRequestScreen}
				component={ProgramRequestSendRequestScreen}
				options={{ headerShown: false, title: 'Информация о репатриатах' }}
			/>
			<ProgramRequestStack.Screen
				name={routes.ProgramRequestCountrySelectionScreen}
				component={ProgramRequestCountrySelectionScreen}
				options={{ headerShown: true, title: 'Выбор страны' }}
			/>
			<ProgramRequestStack.Screen
				name={routes.ProgramRequestResidencyTypeScreen}
				component={ProgramRequestResidencyTypeScreen}
				options={{ headerShown: true, title: 'Вид резиденства' }}
			/>
		</ProgramRequestStack.Navigator>
	);
};

const RootNavigator: FC = () => {
	return (
		<RootStack.Navigator initialRouteName={routes.SplashScreen}>
			<RootStack.Screen
				name={routes.SplashScreen}
				component={SplashScreen}
				options={{ headerShown: false }}
			/>
			<RootStack.Screen
				name={routes.ProgramRequestStack}
				component={ProgramRequestStackScreens}
				options={{ headerShown: false }}
			/>
		</RootStack.Navigator>
	);
};

export default RootNavigator;
