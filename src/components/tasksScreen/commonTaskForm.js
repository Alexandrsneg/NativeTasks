import React from "react";
import {Alert, StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import tasksStorage from "../../repository/local/tasksStore";
import {observer} from "mobx-react";
import historyService from "../../repository/local/historyService";
import {toJS} from "mobx";
import Container from "../commonComponents/container";



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
        historyService.initPresent(toJS(tasksStorage.task))
        tasksStorage.setTitle(title)
        historyService.updateState(toJS(tasksStorage.task))
        this.changes = true
    }

//функция-обработчик изменения состояния заметки
    onBodyChangeHandler = (body) =>{
        historyService.initPresent(toJS(tasksStorage.task))
        tasksStorage.setBody(body)
        historyService.updateState(toJS(tasksStorage.task))
        this.changes = true

    }


    render() {
        return (
            <Container>
                {this.props.editTask ?
                    <View>
                    <Text style={style.text_bigTitle}>
                        Редактирование заметки
                    </Text>
                    <View style={style.history_btn_container}>
                        <View style={style.button_undo_container}>
                            <Button buttonStyle={style.history_btn_undo} onPress={this.props.undoBtn}
                                    title={"отмена"}/>
                        </View>
                        <View style={style.button_redo_container}>
                            <Button buttonStyle={style.history_btn_redo} onPress={this.props.redoBtn}
                                    title={"повтор"}/>
                        </View>
                    </View>
                    </View> :
                    <View>
                    <Text style={style.text_bigTitle}>
                    Создание новой заметки
                    </Text>
                    </View>
                }
                <View style={style.task_form}>
                    <View style={style.task_content}>
                        <TextInput style={style.title} value={tasksStorage.task.title} onChangeText={this.onTitleChangeHandler} placeholder="Title"/>
                        <TextInput multiline style={style.text} value={tasksStorage.task.body} onChangeText={this.onBodyChangeHandler}  placeholder="Напишите заметку сюда"/>
                    </View>
                    <View style={style.button_container}>
                        <Button buttonStyle={style.button_close} onPress={this.safetyClose} title={"X"}/>
                    </View>
                </View>
                <Button buttonStyle={style.button_save} onPress={this.props.storageFun} title={"Сохранить"}/>

            </Container>

        );
    }
}

const style = StyleSheet.create({
    history_btn_container:{
        flexDirection: 'row',
        alignSelf: 'stretch'
    },

    button_undo_container: {
        flex: 1,
        marginBottom: 2,
        marginRight:1

    },

    button_redo_container: {
        flex: 1,
        marginBottom: 2,
        marginLeft:1
    },

    history_btn_undo:{
        backgroundColor: '#D0E3C4',
        borderColor: '#ADC698',
        borderWidth: 1,
    },

    history_btn_redo:{
        backgroundColor: '#D0E3C4',
        borderColor: '#ADC698',
        borderWidth: 1,
    },

    task_form:{
        flexDirection: 'row',
        backgroundColor: '#D0E3C4',
        padding: 10,
        borderColor: '#ADC698',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5
    },

    task_content: {
        flex: 9,
    },

    title: {
        paddingLeft: 100,
        fontSize: 20,
        fontWeight: "800",
        color: '#312e2e',
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5
    },

    text: {
        fontSize: 10,
        height: 80,
        color: '#312e2e',
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5
    },

    button_container: {
        flex: 1,
        fontSize: 10
    },

    button_close: {
        height: 30,
        width: 30,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        color: 'white',
        backgroundColor: "#C05746",
        padding: 2,
        marginTop: 3,
        marginLeft: 4
    },

    button_save: {
        backgroundColor: '#81A861',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
    },


    text_bigTitle: {
        fontSize: 40,
        textAlign: 'center',
        color: '#312e2e',
        marginBottom: 10
    }
});


export default observer(CommonTaskForm);