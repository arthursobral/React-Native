import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

// import Drawer from './Drawer'//BY FAR O MAIS DAHORA DE VER
// import Stack from './Stack';
import Tab from './Tab';


export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Tab/>
            {/* 
            <Drawer/>
            <Stack/> */}
        </NavigationContainer>
    </SafeAreaView>
)

