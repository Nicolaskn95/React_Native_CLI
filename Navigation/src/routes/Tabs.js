import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'
import TelaD from '../views/TelaD'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator         screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      switch (route.name) {
  case 'TelaA':
    iconName = focused ? 'ios-home' : 'ios-home-outline';
    break;
  case 'TelaB':
    iconName = focused ? 'ios-list' : 'ios-list-outline';
    break;
  case 'TelaC':
    iconName = focused ? 'ios-person' : 'ios-person-outline';
    break;
  case 'TelaD':
    iconName = focused ? 'ios-settings' : 'ios-settings-outline';
    break;
  default:
    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
    break;
}
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
    tabBarOptions={{
      activeTintColor: 'red'
    }}
     initialRouteName='TelaB'>
    <Tab.Screen name="TelaA" component={TelaA}/>
    <Tab.Screen name="TelaB" component={TelaB}/>
    <Tab.Screen name="TelaC" component={TelaC}/>
    <Tab.Screen name="TelaD" component={TelaD}/>
  </Tab.Navigator>
)