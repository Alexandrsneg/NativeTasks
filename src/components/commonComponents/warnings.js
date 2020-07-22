import React, { Component } from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-elements";
import tasksStore from "../../repository/local/tasksStore";
import {observer} from "mobx-react";
import UserStorage from "../../repository/local/userStore";

class Warnings extends Component{



    render() {
        return (
            <View style={style.task_form}>
                <View style={style.task_content}>
                    <Text style={style.title}>Ошибка</Text>
                    <Text style={style.text}>{this.props.warningMessage}</Text>
                </View>
                <View style={style.button_container}>
                    <Button buttonStyle={style.button_ok} onPress={this.props.buttonOk} title={"ОК"}/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({

    task_form:{
        flexDirection: 'column',
        backgroundColor: '#C05746',
        padding: 10,
        borderColor: '#ADC698',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        height:200
    },

    task_content: {
        flex: 5,
    },

    title: {
        paddingTop: 10,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "800",
        color: 'white'
    },

    text: {
        textAlign: 'center',
        paddingTop: 15,
        alignSelf: 'center',
        fontSize: 15,
        color: 'white'
    },

    button_container: {
        flex: 3,
        fontSize: 10
    },


    button_ok: {
        alignSelf: 'center',
        height: 40,
        borderRadius: 5,
        color: 'black',
        borderColor: "#3B4F2B",
        borderWidth: 1,
        backgroundColor: "#f69167",
        marginBottom: 2,
        width: 100
    },

    button_delete: {
        height: 40,
        borderRadius: 5,
        color: 'white',
        backgroundColor: "#C05746",
        marginBottom: 2
    }
});

export default observer(Warnings);