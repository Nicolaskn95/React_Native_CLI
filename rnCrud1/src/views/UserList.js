import React , {useContext} from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import Users from '../data/Users';
import { ListItem, Avatar, Icon } from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale';
import { Button } from '@rneui/base';
import UserContext from '../context/UserContext';


export default props => {

    const {state, dispatch} = useContext(UserContext)

function confirmUserDelete(user) {
    Alert.alert('Excluir Usuario', 'Deseja exlcuir o usuario?', [
        {
            text: 'Sim',
            onPress() {
                dispatch({
                  type: 'deleteUser',
                  payload: user.id,
                })
            }
        },
        {
            text: 'Não'
        }
    ])
}

function getActions(user) {
    return(
        <>
            <Button onPress={() => props.navigation.navigate('UserForm, user')}
                type='clear' 
            >
            
            </Button>
            <Button onPress={() => confirmUserDelete(user)}
                type='clear'
                icon={<Icon type='material' name='delete' size={25} color={'red'}/> } 
            />
        </>
    )
}

  function getUserItem({ item: user }) {
    return (
      <ListItem
        bottomDivider
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        pad={45}
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm', user)}
      >
        <Avatar source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron 
            onPress={() => props.navigation.navigate('UserForm', user)}
            iconProps={{name: 'edit'}}
            iconStyle={{fontSize: 25, color:'orange'}}
        />
        <ListItem.Chevron 
            onPress={() => confirmUserDelete(user)}
            iconProps={{name: 'delete'}}
            iconStyle={{fontSize: 25, color:'red'}}
        />        
      </ListItem>
    );
  }

  return (
    <Text>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.Users}
        renderItem={getUserItem}
        contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: "stretch", maxWidth:'100%' }}
        style={{ backgroundColor: 'greenyellow', width: "100%" }}
      />
    </Text>
  );
}

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
  },
  listItemContainer: {
    width: '100%',
  },
});
