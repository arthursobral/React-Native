import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    const lado = 50;
    return (
        <>
            <View style = {{
                height: lado,
                width: lado,
                backgroundColor: props.color || '#000'
            }}/>
        </>
    )
}