import routes from '@/app/navigation/routes';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProgramRequestCountrySelectionScreen = ({ navigation, route }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const { formData } = route.params;

  const handleNextStep = () => {
    navigation.navigate(routes.ProgramRequestResidencyTypeScreen, { formData, selectedCountry });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Header */}
      {/* Your header code */}
      
      {/* Body */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        {/* Search Input */}
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10, width: '100%' }} placeholder="Search" />
        
        {/* List of Countries */}
        {/* Your country list code */}
        
        {/* Next Step Button */}
        <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }} onPress={handleNextStep}>
          <Text style={{ color: 'white', fontSize: 18 }}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProgramRequestCountrySelectionScreen;
