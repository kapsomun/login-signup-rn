import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import routes, { RootStackParamList } from '@/app/navigation/routes';
import React, { useState } from 'react';
import Input from '@/components/Input';
import styles from './styles';
import Header from '@/components/Header';
import CountButtons from '@/components/CountButtons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProgramRequestSendRequest = () => {
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
		navigation.navigate(routes.ProgramRequestCountrySelection, { data: formData });
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
				<Input
					placeholder="Phone Number"
					value={formData.phoneNumber}
					onChangeText={text => setFormData({ ...formData, phoneNumber: text })}
				/>

				<View style={styles.titleContainer}>
					<Text style={styles.title}>Количество релокантов</Text>
				</View>

				<View style={styles.counterContainer}>
					<Text>Взрослых:</Text>
					<CountButtons
						count={formData.adults}
						handleIncrease={() => handleIncrease('adults')}
						handleDecrease={() => handleDecrease('adults')}
					/>
				</View>

				<View style={styles.counterContainer}>
					<View>
						<Text>Дети:</Text>
						<Text>0 - 17 лет</Text>
					</View>
					<CountButtons
						count={formData.children}
						handleIncrease={() => handleIncrease('children')}
						handleDecrease={() => handleDecrease('children')}
					/>
				</View>
			</View>

			<TouchableOpacity
				
				onPress={handleNextStep}
			>
				<Text >Next Step</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default ProgramRequestSendRequest;
