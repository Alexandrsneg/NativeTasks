import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";
import CommonTaskForm from "./commonTaskForm";
import tasksStorage from "../../repository/local/tasksStorage";
import {appCommonStyle} from "../../styles/appCommonStyle";



class EditTaskScreen  extends Component{


    warn = () => console.warn(this.props.route.params.id)

    editTask = () => {
        tasksStorage.editTask(this.props.route.params.id)
         this.props.navigation.navigate("Заметки")
    }

    jump = () =>{
         this.props.navigation.navigate("Заметки")
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