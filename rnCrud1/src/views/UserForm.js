import React, { useContext, useState } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import UserContext from '../context/UserContext'


export default ({route, navigation}) => {
    
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UserContext)

    
    return(
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput
            style={styles.input} 
                onChangeText={name => setUser({...user, name})}
                placeholder='Informe o nome'
                value={user.name}
            />        
            <Text>Email</Text>
            <TextInput
            style={styles.input} 
                onChangeText={email => setUser({...user, email})}
                placeholder='Informe o E-mail'
                value={user.email}
            />
            <Text>URL do avatar</Text>
            <TextInput
            style={styles.input} 
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder='Informe a URL do avatar'
                value={user.avatarUrl}
            />
            <Button title={'SALVAR'}
            onPress={() => {
                dispatch ({
                    type: user.id ? 'updateUser' : 'createUser',
                    payload: user
                })
                navigation.goBack()
            }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})