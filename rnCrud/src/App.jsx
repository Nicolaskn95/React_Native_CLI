import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default props => {

    return (
        <NavigationContainer>
            <Stack.Screen>
                
            </Stack.Screen>
        </NavigationContainer>
    )
}