// AllScreen.js
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const FavoritesScreen = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>All Coins</Text>
        <Button title="Favorites" onPress={() => navigation.navigate('Favorites')} />
      </View>
    </NavigationContainer>
  );
};
export default FavoritesScreen;

