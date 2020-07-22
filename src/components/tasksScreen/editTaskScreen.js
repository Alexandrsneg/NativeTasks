import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {observer} from "mobx-react";
import CommonTaskForm from "./commonTaskForm";
import tasksStore from "../../repository/local/tasksStore";
import HistoryService from "../../repository/local/historyService";
import {NAVIGATION_TASKS} from "../../constants";



class EditTaskScreen  extends Component{



    editTask = () => {
        tasksStore.editTask(this.props.route.params.id)
         this.props.navigation.navigate(NAVIGATION_TASKS)
    }

    undoBtn = () => {
        HistoryService.undo()
    }

    redoBtn = () =>{
        HistoryService.redo()
    }



    jump = () =>{
         this.props.navigation.navigate(NAVIGATION_TASKS)
    }

    render() {
        return (
            <View style={style.container}>
            <CommonTaskForm storageFun ={this.editTask} jump={this.jump}
                            undoBtn={this.undoBtn}
                            redoBtn={this.redoBtn}
                            editTask={true}/>
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
    },


});


export default observer(EditTaskScreen);