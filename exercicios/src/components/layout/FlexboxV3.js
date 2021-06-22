import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style = {style.FlexV2}>
            <Quadrado color = 'yellow'/>
            <Quadrado color = 'red'/>
            <Quadrado color ='green'/>
            <Quadrado color ='blue'/>
            <Quadrado color ='pink'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 350,
        backgroundColor: 'black'
    }
})