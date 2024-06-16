import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProgramRequestScreen3 = ({ navigation, route }) => {
  const { formData, selectedCountry } = route.params;

  const handleSubmit = () => {
    // Here you can log all the form data to the console
    console.log('Form Data:', formData);
    console.log('Selected Country:', selectedCountry);
    // You can also send this data to your server or perform any other action
    
    // Navigate to any other screen after submission
    // navigation.navigate('AnotherScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Header */}
      {/* Your header code */}
      
      {/* Body */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        {/* Checkboxes */}
        {/* Your checkboxes code */}
        
        {/* Submit Button */}
        <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'green', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }} onPress={handleSubmit}>
          <Text style={{ color: 'white', fontSize: 18 }}>Submit Application</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProgramRequestScreen3;
