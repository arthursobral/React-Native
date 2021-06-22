import React, {Fragment} from 'react';
import { Text, View }from 'react-native';
import Estilo from './estilo';

export default props => {
    return (
        <Fragment>
            <Text style = {Estilo.fontG}>{props.principal}</Text>
            <Text>{props.segundario}</Text>
        </Fragment>
    )
}