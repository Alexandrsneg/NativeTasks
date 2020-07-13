import React from "react";
import TasksStorage from "../../repository/local/tasksStorage";
import {Alert, Text, TextInput, View} from "react-native";
import {navigate} from "@react-navigation/routers/src/CommonActions";
import {appCommonStyle} from "../../styles/appCommonStyle";
import {taskViewStyle} from "../../styles/taskViewStyle";
import {Button} from "react-native-elements";
import TaskStorage from "../../repository/local/tasksStorage";
import {taskViewCreateStyle} from "../../styles/taskViewCreateStyle";

class CreateNewTask extends React.Component{

    //флаг на изменения заметки
    changes;


    //защита от закрытия без сохранения изменений в заметке
    safetyClose = () =>{
        if (this.changes) {
            if (Alert.confirm("Вы не сохранили заметку, выйти?")) {
                return navigate("Заметки")
            } else {
                console.log("остаемся в редактировании")
            }
        }else{
            return navigate("Заметки")
        }
    }

    addTaskButton = () =>{
        //запрос на сервер на сохранение новой заметки
        TasksStorage.addTask()
        return navigate("Заметки")
    }

    //функция-обработчик изменения состояния заголовка
    onTitleChangeHandler = (title) =>{
        TasksStorage.setTitle(title)
        this.changes = true
    }

//функция-обработчик изменения состояния заметки
    onBodyChangeHandler = (body) =>{
        TasksStorage.setBody(body)
        this.changes = true
    }

    render() {
        return (
            <View style={appCommonStyle.container}>
             <View style={taskViewCreateStyle.task_form}>
                <View style={taskViewCreateStyle.task_content}>
                    <TextInput style={taskViewCreateStyle.title} defaultValue={TasksStorage.task.title} onChangeText={this.onTitleChangeHandler} placeholder="Title"/>
                    <TextInput multiline style={taskViewCreateStyle.text} defaultValue={TasksStorage.task.body} onChangeText={this.onBodyChangeHandler}  placeholder="Напишите заметку сюда"/>
                </View>
                <View style={taskViewCreateStyle.button_container}>
                    <Button buttonStyle={taskViewCreateStyle.button_close} onPress={this.redirect} title={"X"}/>
                </View>
             </View>
                <Button buttonStyle={taskViewCreateStyle.button_save} onPress={this.jumpToCreateNewTask} title={"Сохранить"}/>
            </View>

        );
    }
}


export default CreateNewTask;