import React, {Component} from "react";
import tasksStorage from "../../repository/local/tasksStorage";
import {observer} from "mobx-react";
import CommonTaskForm from "./commonTaskForm";
import {Alert, TextInput, View} from "react-native";
import {appCommonStyle} from "../../styles/appCommonStyle";
import {Button} from "react-native-elements";


class CreateTask extends Component{


    warn = () => console.warn(this.props.id)

    addNewTask = () => {
        tasksStorage.addTask()
        this.props.navigation.jumpTo("Заметки")
    }

    jump = () =>{
        this.props.navigation.jumpTo("Заметки")
    }


    render() {
        return (
            <CommonTaskForm storageFun ={this.addNewTask} jump={this.jump} />
        );
    }
}


export default observer(CreateTask);