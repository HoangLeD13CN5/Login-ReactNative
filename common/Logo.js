import React, { Component } from 'react';
import AppStyleSheet from './AppStyleSheet';
import {Text, View ,Image } from 'react-native';

const logo = require('../assets/images/logo.png');

export class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style = {styles.logo}/>
                <Text style={styles.text}>REACT NATIVE</Text>
            </View>
        )
    }
}

const styles = AppStyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width:80,
        height:80,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
    }
})
