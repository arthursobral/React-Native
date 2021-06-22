import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome,setNome] = useState('Teste')
    return (
        <>
            <View>
                <TextInput
                    placeholder = "Digite seu nome"
                    onChangeText={(value) => setNome(value)}
                />
                <Text>{nome}</Text>
            </View>
        </>
    )
}