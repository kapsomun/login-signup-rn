import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Text, TextInput, View } from 'react-native';
import routes, { RootStackParamList } from '@/app/navigation/routes';
import React, { useState } from 'react';
import Input from '@/components/Input';

import styles from './styles';

const ProgramRequestScreen1 = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		adults: 0,
		children: 0,
	});

	const handleNextStep = () => {
		navigation.navigate(routes.ProgramRequestScreen2, { data:formData });
	};

	return (
		<View style={styles.container}>
			<Input
				placeholder="Name"
				value={formData.name}
				onChangeText={(text) => setFormData({ ...formData, name: text })}
			/>
			<Input
				placeholder="Email"
				value={formData.email}
				onChangeText={(text) => setFormData({ ...formData, email: text })}
			/>
			<Input
				placeholder="Phone Number"
				value={formData.phoneNumber}
				onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
			/>

			{/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 18, marginRight: 20 }}>Adults:   </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button title="-" onPress={() => setFormData({...formData, adults: formData.adults - 1})} />
            <Text style={{ marginHorizontal: 10 }}>{formData.adults}</Text> 
            <Button title="+" onPress={() => setFormData({...formData, adults: formData.adults + 1})} />
          </View>
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, marginRight: 20 }}>Children:   </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button title="-" onPress={() => setFormData({...formData, children: formData.children - 1})} />
            <Text style={{ marginHorizontal: 10 }}>{formData.children}</Text> 
            <Button title="+" onPress={() => setFormData({...formData, children: formData.children + 1})} />
          </View>
        </View>
        
        <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }} onPress={handleNextStep}>
          <Text style={{ color: 'white', fontSize: 18 }}>Next Step</Text>
        </TouchableOpacity> */}
		</View>
	);
};

export default ProgramRequestScreen1;
