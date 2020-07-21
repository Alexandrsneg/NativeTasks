import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";

class Container extends Component{

    render() {
        return (
            <View style={style.container}>
                {this.props.children}
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    }
});

export default Container;