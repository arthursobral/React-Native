import React, { useState } from 'react';
import {Text, Button} from 'react-native';
import Estilo from './estilo';

export default props => {
    const [numero, setNumero] = useState(props.inicial);

    const inc = () => setNumero(numero + 1);
    const dec = () => setNumero(numero - 1);

    return (
        <>
            <Text style = {Estilo.fontG}>{numero}</Text>
            <Button title = "+" onPress={inc}></Button>
            <Button title = "-" onPress={dec}></Button>
        </>
    )
}

