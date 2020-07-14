import React from "react";
import TasksStorage from "../../repository/local/tasksStorage";
import {Alert, Text, TextInput, View} from "react-native";
import {navigate} from "@react-navigation/routers/src/CommonActions";
import {appCommonStyle} from "../../styles/appCommonStyle";
import {taskViewStyle} from "../../styles/taskViewStyle";
import {Button} from "react-native-elements";
import TaskStorage from "../../repository/local/tasksStorage";
import {taskViewCreateStyle} from "../../styles/taskViewCreateStyle";
import tasksStorage from "../../repository/local/tasksStorage";
import {observer} from "mobx-react";



class CommonTaskForm extends React.Component{

    // componentDidMount() {
    //     tasksStorage.getTasks()
    // }

    //флаг на изменения заметки
    changes;

    safetyClose = () => {
        return new Promise((resolve) => {
            if(this.changes) {
                Alert.alert(
                    "Внесенные данные не сохранены!",
                    "Уверены, что хотите выйти",
                    [
                        {text: "Нет, остатья в заметке", onPress: () => {resolve(false)}},
                        {text: "Да, выйти без сохранения", style: "cancel",
                            onPress: () => {
                                resolve(true)
                                {this.props.jump()}
                            }
                        }
                    ],
                    {cancelable: false}
                );
            }
            else {
                {this.props.jump()}
            }
        });
    };


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
                        <TextInput style={taskViewCreateStyle.title} defaultValue={tasksStorage.task.title} onChangeText={this.onTitleChangeHandler} placeholder="Title"/>
                        <TextInput multiline style={taskViewCreateStyle.text} defaultValue={tasksStorage.task.body} onChangeText={this.onBodyChangeHandler}  placeholder="Напишите заметку сюда"/>
                    </View>
                    <View style={taskViewCreateStyle.button_container}>
                        <Button buttonStyle={taskViewCreateStyle.button_close} onPress={this.safetyClose} title={"X"}/>
                    </View>
                </View>
                <Button buttonStyle={taskViewCreateStyle.button_save} onPress={this.props.storageFun} title={"Сохранить"}/>
            </View>

        );
    }
}


export default observer(CommonTaskForm);