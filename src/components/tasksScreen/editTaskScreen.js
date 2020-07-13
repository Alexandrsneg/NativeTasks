import React, { Component } from 'react';
import TaskStorage from "../../repository/local/tasksStorage";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#7922CC',
        padding: 10,
        paddingTop: 200,
        flex: 1,
        alignContent: 'center'
    },
    task_form:{
        flexDirection: 'row',
        backgroundColor: '#6F2CF5',
        padding: 10,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 5
    },

    task_content: {
        flex: 5,
    },

    title: {
        paddingLeft: 100,
        fontSize: 20,
        fontWeight: "800",
        color: 'white'
    },

    text: {
        fontSize: 10,
        fontWeight: "800",
        color: 'white',
    },

    button_container: {
        flex: 2,
        fontSize: 10
    },

    button_done: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        color: 'white',
        backgroundColor: "green"
    },

    button_not_done: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        color: 'black',
        backgroundColor: "yellow"
    },

    button_edit: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        color: 'white',
        backgroundColor: "blue"
    },

    button_delete: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        color: 'white',
        backgroundColor: "red"
    }
});


//многоразовый компонент-шаблон для заметок
class EditTaskScreen extends Component{


    render() {
        return (
           <h1>Редактирование заметки ()заглушка</h1>
        );
    }
}


export default observer(EditTaskScreen);