import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo'

export default (props) => {
    const {min,max} = props;
    const aleatorio = parseInt(Math.random() * ( max + min - 1));

    return (
        <Text style = {Estilo.fontG}>
            O valor aleatório é {aleatorio}
        </Text>
    )
}