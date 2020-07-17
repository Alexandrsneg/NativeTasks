import React from "react";
import {Alert, Text, TextInput, View} from "react-native";
import {appCommonStyle} from "../../styles/appCommonStyle";
import {Button} from "react-native-elements";
import {taskViewCreateStyle} from "../../styles/taskViewCreateStyle";
import tasksStorage from "../../repository/local/tasksStorage";
import {observer} from "mobx-react";
import historyService from "../../repository/local/historyService";



class CommonTaskForm extends React.Component{


    //флаг на изменения заметки
    changes = false;

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
                this.changes=false
                {this.props.jump()}
            }
        });
    };


    //функция-обработчик изменения состояния заголовка
    onTitleChangeHandler = (title) =>{
        historyService.updateState()
        tasksStorage.setTitle(title)
        this.changes = true
    }

//функция-обработчик изменения состояния заметки
    onBodyChangeHandler = (body) =>{
        historyService.updateState()
        tasksStorage.setBody(body)
        this.changes = true

    }

    render() {
        return (
            <View style={appCommonStyle.container}>
                <View style={taskViewCreateStyle.task_form}>
                    <View style={taskViewCreateStyle.task_content}>
                        <TextInput style={taskViewCreateStyle.title} value={tasksStorage.task.title} onChangeText={this.onTitleChangeHandler} placeholder="Title"/>
                        <TextInput multiline style={taskViewCreateStyle.text} value={tasksStorage.task.body} onChangeText={this.onBodyChangeHandler}  placeholder="Напишите заметку сюда"/>
                    </View>
                    <View style={taskViewCreateStyle.button_container}>
                        <Button buttonStyle={taskViewCreateStyle.button_close} onPress={this.safetyClose} title={"X"}/>
                    </View>
                </View>
                <Button buttonStyle={taskViewCreateStyle.button_save} onPress={this.props.storageFun} title={"Сохранить"}/>

                < Button onPress={this.props.undoBtn} title={"undo"}/>
                    <Button onPress={this.props.redoBtn} title={"redo"}/>



            </View>

        );
    }
}


export default observer(CommonTaskForm);