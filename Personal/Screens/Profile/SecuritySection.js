import React from 'react';
import { View, Text, Button } from 'react-native';

const SecuritySection = () => {
  return (
    <View>
      <Text style={{ fontSize: 18 }}>SECURITY</Text>
      <Button title="Login Shield" onPress={() => {}} />
      <Button title="Change Secondary Pin" onPress={() => {}} />
      <Button title="Device Management" onPress={() => {}} />
    </View>
  );
};

export default SecuritySection;