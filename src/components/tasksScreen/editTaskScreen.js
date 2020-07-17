import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";
import CommonTaskForm from "./commonTaskForm";
import tasksStorage from "../../repository/local/tasksStorage";
import {appCommonStyle} from "../../styles/appCommonStyle";
import HistoryService from "../../repository/local/historyService";



class EditTaskScreen  extends Component{



    editTask = () => {
        tasksStorage.editTask(this.props.route.params.id)
         this.props.navigation.navigate("Заметки")
    }

    undoBtn = () => {
        HistoryService.undo()
    }

    redoBtn = () =>{
        HistoryService.redo()
    }

    checkPresent = () => console.warn(HistoryService.state.present)
    checkPast = () => console.warn(HistoryService.state.past)
    checkFuture = () => console.warn(HistoryService.state.future)




    jump = () =>{
         this.props.navigation.navigate("Заметки")
    }

    render() {
        return (
            <View style={appCommonStyle.container}>
            <CommonTaskForm storageFun ={this.editTask} jump={this.jump}
                            undoBtn={this.undoBtn}
                            redoBtn={this.redoBtn}
                            checkPast={this.checkPast}
                            checkFuture={this.checkFuture}
                            checkPresent={this.checkPresent}/>
            </View>
        );
    }
}


export default observer(EditTaskScreen);