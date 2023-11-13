import React from 'react';
import { View, Image, Text } from 'react-native';

const ProfileDetailsBanner = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('./Icon feather-user.svg')}
        style={{ width: 100, height: 100 }}
      />
      <Text style={{ fontSize: 20 }}>PROFILE</Text>
      <Text style={{ fontSize: 16 }}>Profile Details</Text>
      <Text style={{ fontSize: 14 }}>View & Edit Details</Text>
      <Image
        source={require('./Arrow.png')}
        style={{ width: 20, height: 20 }}
      />
    </View>
  );
};

export default ProfileDetailsBanner;
