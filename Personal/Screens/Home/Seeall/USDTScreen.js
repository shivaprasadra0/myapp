import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const USDTScreen = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ERC Coins</Text>
        <Button title="USDT" onPress={() => navigation.navigate('USDT')} />
      </View>
    </NavigationContainer>
  );
};
export default USDTScreen;

