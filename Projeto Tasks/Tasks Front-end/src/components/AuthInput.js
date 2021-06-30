import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default props => {
    return (
        <View style = {[styles.container, props.style]}>
            <Icon name={props.icon} size={20} style={styles.icon}/>
            <View style={styles.line}/>
            <TextInput {...props} style={styles.input}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: '#333',
        marginLeft: 20
    },
    input: {
        marginLeft: 20,
        width: '70%'
    },
    line: {
        width: 1.5,
        height: 42,
        backgroundColor: 'black',
        marginTop: 15,
        marginLeft: 46,
        marginBottom: 15,
        position: 'absolute',
        opacity: .5
    }
})