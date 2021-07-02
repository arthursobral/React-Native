import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';
import { Button, Icon } from 'react-native-elements';
import { Alert } from 'react-native';
import UsersContext from '../context/UsersContext';

export default props =>{

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário','Deseja excluir o usuário?',[
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({item: user}){
        return (
            <ListItem   
                bottomDivider
                onPress = {() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar source = {{uri: user.avatarUrl}}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {/* <ListItem.Chevron /> */}

                <Icon
                    name='edit'
                    type='clear'
                    color='orange'
                    size = {27}
                    onPress = {() => props.navigation.navigate('UserForm',user)}
                />
                <Icon
                    name='delete'
                    type='clear'
                    color='red'
                    size = {27}
                    onPress = {() => confirmUserDeletion(user)}
                />
            </ListItem> 
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor = {user => user.id.toString()}
                data = {state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}