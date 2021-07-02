import React, { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-native';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default ({route, navigation}) =>{
    const [user, setUser] =  useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)

    return (
        <View style = {styles.form}>
            <Text>Nome</Text>
            <TextInput
                style= {styles.input}
                onChangeText={name=> setUser({...user,name})}
                placeholder='Informe o nome'
                value={user.name}
            />
            <Text>E-mail</Text>
            <TextInput
                style= {styles.input}
                onChangeText={email=> setUser({...user,email})}
                placeholder='Informe o e-mail'
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style= {styles.input}
                onChangeText={avatarUrl=> setUser({...user,avatarUrl})}
                placeholder='Informe a url do novo Avatar'
                value={user.avatarUrl}
            />
            <Icon style = {styles.teste}
                name='save'
                type='clear'
                color='white'
                containerStyle={styles.icon}
                size = {40}
                onPress = {() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        flex: 1,
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 10
    },
    icon:{
        backgroundColor: 'blue',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        borderRadius: 30,
        alignSelf: 'flex-end',
    }
})