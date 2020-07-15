import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";
import {taskViewStyle} from "../../styles/taskViewStyle";
import tasksStorage from "../../repository/local/tasksStorage";




//многоразовый компонент-шаблон для заметок
class TaskView extends Component{

   jump = this.props.jumps


    redirect = () =>{
        tasksStorage.getTaskById(this.props.id)
        this.jump.navigation.navigate("Редактировать", {id: this.props.id})
    }

    render() {
        return (
                      <View style={taskViewStyle.task_form}>
                         <View style={taskViewStyle.task_content}>
                        <Text style={taskViewStyle.title}>{this.props.title}</Text>
                        <Text style={taskViewStyle.text}>{this.props.body}</Text>
                        </View>
                          <View style={taskViewStyle.button_container}>
                    {this.props.done ?
                        <Button buttonStyle={taskViewStyle.button_done}
                             onPress={() =>tasksStorage.changeStatusOfTask(this.props.id, this.props.done)} title={"Готово"}/> :
                        <Button buttonStyle={taskViewStyle.button_not_done}
                             onPress={() => tasksStorage.changeStatusOfTask(this.props.id, this.props.done)} type={"outline"} title={"Не готово"}/>
                    }
                    <Button buttonStyle={taskViewStyle.button_edit} onPress={this.redirect} title={"Изменить"}/>
                    <Button buttonStyle={taskViewStyle.button_delete} onPress={()=> tasksStorage.deleteTask(this.props.id)} title={"Удалить"}/>
                          </View>
                    </View>
        );
    }
}


export default observer(TaskView);