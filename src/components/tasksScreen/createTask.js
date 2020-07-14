import React, {Component} from "react";
import tasksStorage from "../../repository/local/tasksStorage";
import {observer} from "mobx-react";
import CommonTaskForm from "./commonTaskForm";


class CreateTask extends Component{

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