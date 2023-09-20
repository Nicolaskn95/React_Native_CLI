import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'
import TelaD from '../views/TelaD'

const Tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator screenOptions={{
    activeTintColor: 'pink',
    inactiveTintColor: 'blue',
    labelStyle: {fontSize: 30 }
    }} initialRouteName='TelaB'>
    <Tab.Screen name="TelaA" component={TelaA}/>
    <Tab.Screen name="TelaB" component={TelaB}/>
    <Tab.Screen name="TelaC" component={TelaC}/>
    <Tab.Screen name="TelaD" component={TelaD}/>
  </Tab.Navigator>
)