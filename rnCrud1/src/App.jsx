import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, ButtonGroup, Icon } from '@rneui/themed'
import { View } from 'react-native'
import IconTeste from 'react-native-vector-icons/AntDesign'
import { UsersProvider } from './context/UserContext'


const Stack = createStackNavigator()

export default props => {

    return (
        <UsersProvider>
        <NavigationContainer>
        <View>
        </View>
            <Stack.Navigator initialRouteName='UserList'
            screenOptions={screenOptions}
            >
                <Stack.Screen 
                    name='UserList'
                    component={UserList}
                    options={({navigation}) => { 
                    return{
                        title: "Lista de Usuarios",
                        headerRight: () => (
                            <Button buttonStyle={{borderRadius: 10}}
                                onPress={() => navigation.navigate('UserForm')}
                            >
                              <Icon type='material' name="add" color="white" />
                            </Button>
                        )
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
        </UsersProvider>
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