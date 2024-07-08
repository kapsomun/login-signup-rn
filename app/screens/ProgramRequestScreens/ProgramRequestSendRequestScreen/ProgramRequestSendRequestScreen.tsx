import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import routes, { RootStackParamList } from '@/app/navigation/routes';
import React, { useState } from 'react';
import Input from '@/components/Input';
import styles from './program-request-send-request-styles';
import Header from '@/components/Header/Header';
import CountButtons from '@/components/CountButtons/CountButtons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button/Button';
import UkraineSvg from '@/assets/svg/'

const ProgramRequestSendRequestScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const title = 'Hello blya';
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		adults: 0,
		children: 0,
	});

	const handleNextStep = () => {
		navigation.navigate(routes.ProgramRequestCountrySelectionScreen, { data: formData });
	};

	const handleIncrease = (field: 'adults' | 'children') => {
		setFormData({ ...formData, [field]: formData[field] + 1 });
	};

	const handleDecrease = (field: 'adults' | 'children') => {
		if (formData[field] > 0) {
			setFormData({ ...formData, [field]: formData[field] - 1 });
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header />

			<View style={styles.contentContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>
						{title}
					</Text>
				</View>
				<Input
					placeholder="Name"
					value={formData.name}
					onChangeText={text => setFormData({ ...formData, name: text })}
				/>
				<Input
					placeholder="Email"
					value={formData.email}
					onChangeText={text => setFormData({ ...formData, email: text })}
				/>
				<View>
					
				<Input
					placeholder="Phone Number"
					value={formData.phoneNumber}
					onChangeText={text => setFormData({ ...formData, phoneNumber: text })}
				/>
				</View>
				

				<View style={styles.titleContainer}>
					<Text style={styles.title}>Количество релокантов</Text>
				</View>

				<View style={styles.counterContainer}>
					<Text style={styles.counterText}>Взрослых:</Text>
					<CountButtons
						count={formData.adults}
						handleIncrease={() => handleIncrease('adults')}
						handleDecrease={() => handleDecrease('adults')}
					/>
				</View>

				<View style={styles.counterContainer}>
					<View style={styles.counterTextBox}>
						<Text style={styles.counterText}>Дети:</Text>
						<Text style={styles.counterSubText}>0 - 17 лет</Text>
					</View>
					<CountButtons
						count={formData.children}
						handleIncrease={() => handleIncrease('children')}
						handleDecrease={() => handleDecrease('children')}
					/>
				</View>
			</View>
			<View style={styles.buttonContainer} >
			<Button handlePress={handleNextStep} color='blue' title="Подать заявку" />

			</View>
		</SafeAreaView>
	);
};

export default ProgramRequestSendRequestScreen;
