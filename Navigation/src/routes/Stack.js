import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'

const Stack = createStackNavigator()

export default props => (
  <Stack.Navigator initialRouteName='TelaA'>
      <Stack.Screen name="TelaA" component={TelaA}/>
  </Stack.Navigator>
  
)