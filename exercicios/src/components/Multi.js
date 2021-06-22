import React from 'react';
import { Text }from 'react-native';
import Estilo from './estilo';


export default function CompOficial(){
    return <Text style = {Estilo.fontG}>Comp Oficial</Text>
}

function Comp1(){
    return <Text style = {Estilo.fontG}>Comp 1</Text>
}

export function Comp2(){
    return <Text style = {Estilo.fontG}>Comp 2</Text>
}

export {Comp1};
