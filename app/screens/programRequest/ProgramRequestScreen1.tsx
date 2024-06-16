
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProgramRequestScreen1 = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    adults: 0,
    children: 0
  });

  const handleNextStep = () => {
    navigation.navigate('Screen2', { formData });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Header */}
      {/* Your header code */}
      
      {/* Body */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        {/* Form Inputs */}
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, width: '100%' }} 
          placeholder="Name"
          value={formData.name}
          onChangeText={(text) => setFormData({...formData, name: text})}
        />
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, width: '100%' }} 
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => setFormData({...formData, email: text})}
        />
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, width: '100%' }} 
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChangeText={(text) => setFormData({...formData, phoneNumber: text})}
        />
        
        {/* Number of People Selection */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
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
        
        {/* Next Step Button */}
        <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }} onPress={handleNextStep}>
          <Text style={{ color: 'white', fontSize: 18 }}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProgramRequestScreen1;
