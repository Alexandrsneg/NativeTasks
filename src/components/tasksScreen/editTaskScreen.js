import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";
import CommonTaskForm from "./commonTaskForm";
import tasksStorage from "../../repository/local/tasksStorage";
import {appCommonStyle} from "../../styles/appCommonStyle";
import historyService from "../../repository/local/historyService";



class EditTaskScreen  extends Component{


    warn = () => console.warn(this.props.route.params.id)

    editTask = () => {
        tasksStorage.editTask(this.props.route.params.id)
         this.props.navigation.navigate("Заметки")
    }

    undoBtn = () => {
        historyService.undo()
        console.warn(historyService.state.past)
    }
    redoBtn = () => historyService.redo(historyService.state.future)
    checkPresent = () => console.warn(historyService.state.present)
    checkPast = () => console.warn(historyService.state.past)
    checkFuture = () => console.warn(historyService.state.future)




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
            <Button onPress={this.warn}>id</Button>
            </View>
        );
    }
}


export default observer(EditTaskScreen);