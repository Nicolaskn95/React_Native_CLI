import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button } from 'react-native-elements'

const Stack = createStackNavigator()

export default props => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='UserList'
            screenOptions={screenOptions}
            >
                <Stack.Screen 
                    name='UserList'
                    component={UserList}
                    options={() => { 
                    return{
                        title: "Lista de Usuarios",
                        headerRight: () => {
                            <Button 
                                type='clear'
                                icon={<Icon name='add' size={25} color='white'/>}
                            />
                        }
                        }
                    }}  
                />
                <Stack.Screen 
                    name='UserForm'
                    component={UserForm}
                    options={{
                        title: 'Formulario de Usuarios'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#219C90'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}