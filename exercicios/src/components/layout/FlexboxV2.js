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
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
    }
})