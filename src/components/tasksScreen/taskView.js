import React, { Component } from 'react';
import TaskStorage from "../../repository/local/tasksStorage";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";
import {taskViewStyle} from "../../styles/taskViewStyle";




//многоразовый компонент-шаблон для заметок
class TaskView extends Component{

    redirect = () =>{

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
                             onPress={() =>TaskStorage.changeStatusOfTask(this.props.id, this.props.done)} title={"Готово"}/> :
                        <Button buttonStyle={taskViewStyle.button_not_done}
                             onPress={() => TaskStorage.changeStatusOfTask(this.props.id, this.props.done)} type={"outline"} title={"Не готово"}/>
                    }
                    <Button buttonStyle={taskViewStyle.button_edit} onPress={this.redirect} title={"Изменить"}/>
                    <Button buttonStyle={taskViewStyle.button_delete} onPress={()=> TaskStorage.deleteTask(this.props.id)} title={"Удалить"}/>
                          </View>
                    </View>
        );
    }
}


export default observer(TaskView);