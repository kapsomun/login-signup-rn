import { createStackNavigator} from '@react-navigation/stack';
import React, { FC } from 'react';

import SplashScreen from '../screens/SplashScreen/SplashScreen';
import ProgramRequestSendRequest from '../screens/programRequest/ProgramRequestSendRequest';
import ProgramRequestCountrySelection from '../screens/programRequest/ProgramRequestCountrySelection';
import ProgramRequestResidencyType from '../screens/programRequest/ProgramRequestResidencyType';

import routes from './routes';


const RootStack = createStackNavigator();
const ProgramRequestStack = createStackNavigator();



const ProgramRequestStackScreens = () => {
	return (
		<ProgramRequestStack.Navigator initialRouteName={routes.ProgramRequestSendRequest}>
			<ProgramRequestStack.Screen
				name={routes.ProgramRequestSendRequest}
				component={ProgramRequestSendRequest}
				options={{ headerShown: false, title: 'Информация о репатриатах' }}
			/>
			<ProgramRequestStack.Screen
				name={routes.ProgramRequestCountrySelection}
				component={ProgramRequestCountrySelection}
				options={{ headerShown: true, title: 'Выбор страны' }}
			/>
			<ProgramRequestStack.Screen
				name={routes.ProgramRequestResidencyType}
				component={ProgramRequestResidencyType}
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
