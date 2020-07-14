import React, { Component } from 'react';
import TaskStorage from "../../repository/local/tasksStorage";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";
import CommonTaskForm from "./commonTaskForm";
import tasksStorage from "../../repository/local/tasksStorage";
import {appCommonStyle} from "../../styles/appCommonStyle";


//многоразовый компонент-шаблон для заметок
class EditTaskScreen extends Component{

    componentDidMount() {
        console.warn(this.props.id)
        tasksStorage.getTaskById(this.props.id)
    }

    warn = () => console.warn(this.props.id)


    editTask = () => {
        console.warn(this.props.id)
        tasksStorage.editTask(this.props.id)
        this.props.navigation.jumpTo("Заметки")
    }

    jump = () =>{
        this.props.navigation.jumpTo("Заметки")
    }

    render() {
        return (
            <View style={appCommonStyle.container}>
            <CommonTaskForm storageFun ={this.editTask} jump={this.jump} />
            <Button onPress={this.warn}>id</Button>
            </View>
        );
    }
}


export default observer(EditTaskScreen);