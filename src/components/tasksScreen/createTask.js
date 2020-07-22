import React, {Component} from "react";
import {observer} from "mobx-react";
import CommonTaskForm from "./commonTaskForm";
import {NAVIGATION_TASKS} from "../../constants";
import tasksStore from "../../repository/local/tasksStore";
class CreateTask extends Component{


    addNewTask = () => {
        tasksStore.addTask()
        this.props.navigation.jumpTo(NAVIGATION_TASKS)
    }

    jump = () =>{
        this.props.navigation.jumpTo(NAVIGATION_TASKS)
    }


    render() {
        return (
            <CommonTaskForm storageFun ={this.addNewTask} jump={this.jump} editTask={false} />
        );
    }
}

export default observer(CreateTask);