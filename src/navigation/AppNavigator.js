import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BookScreen from '../screens/BookScreen';
import CartScreen from '../screens/CartScreen';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Books"
          component={BookScreen}
          options={{
            headerRight: props => <ShoppingCartIcon {...props} />,
          }}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
