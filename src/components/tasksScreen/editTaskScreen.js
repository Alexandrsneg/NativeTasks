import React, { Component } from 'react';
import {View} from "react-native";
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



    jump = () =>{
         this.props.navigation.navigate("Заметки")
    }

    render() {
        return (
            <View style={appCommonStyle.container}>
            <CommonTaskForm storageFun ={this.editTask} jump={this.jump}
                            undoBtn={this.undoBtn}
                            redoBtn={this.redoBtn}
                            editTask={true}/>
            </View>
        );
    }
}


export default observer(EditTaskScreen);