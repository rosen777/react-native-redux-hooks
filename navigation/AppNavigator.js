import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BookScreen from '../screens/BookScreen'
import CartScreen from '../screens/CartScreen'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Navigator>
                    <Stack.Screen name='Books' component={BookScreen} />
                    <Stack.Screen name='Cart' component={CartScreen} />
                </Stack.Navigator>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;
