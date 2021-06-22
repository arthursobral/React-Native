import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo'

export default (props) => {
    console.warn(props);
    return (
        <Text style = {Estilo.fontG}>
            {props.min} menor {props.max}
        </Text>
    )
}