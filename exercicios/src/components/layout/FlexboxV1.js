import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style = {style.FlexV1}>
            <Quadrado/>
            <Quadrado color = 'red'/>
            <Quadrado color ='green'/>
            <Quadrado color ='blue'/>
            <Quadrado color ='pink'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'yellow'
    }
})