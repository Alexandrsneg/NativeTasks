import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {observer,} from "mobx-react";
import tasksStorage from "../../repository/local/tasksStore";
import historyService from "../../repository/local/historyService";
import {NAVIGATION_EDIT} from "../../constants";




//многоразовый компонент-шаблон для заметок
class TaskView extends Component{

   jump = this.props.jumps

    redirect = () =>{
        tasksStorage.getTaskById(this.props.id)
        this.jump.navigation.navigate(NAVIGATION_EDIT, {id: this.props.id})
        historyService.clearHistory(tasksStorage.task)
    }

    render() {
        return (
            <View style={style.task_form}>
                <View style={style.task_content}>
                        <Text style={style.title}>{this.props.title}</Text>
                        <Text style={style.text}>{this.props.body}</Text>
                </View>
                    <View style={style.button_container}>
                        {this.props.done ?
                            <Button  buttonStyle={style.button_done}
                                    onPress={() =>tasksStorage.changeStatusOfTask(this.props.id, this.props.done)} title={"Готово"}/> :
                            <Button titleStyle={{color: "black"}} buttonStyle={style.button_not_done}
                                    onPress={() => tasksStorage.changeStatusOfTask(this.props.id, this.props.done)}  title={"Не готово"}/>
                        }
                            <Button titleStyle={{color: "black"}}  buttonStyle={style.button_edit} onPress={this.redirect} title={"Изменить"}/>
                            <Button buttonStyle={style.button_delete} onPress={()=> tasksStorage.deleteTask(this.props.id)} title={"Удалить"}/>
                    </View>
            </View>
        );
    }
}

const style = StyleSheet.create({

    container:{
        backgroundColor: '#D0E3C4',
        padding: 10,
        paddingTop: 200,
        flex: 1,
        alignContent: 'center'
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
        flex: 5,
    },

    title: {
        paddingLeft: 100,
        fontSize: 20,
        fontWeight: "800",
        color: '#312e2e'
    },

    text: {
        fontSize: 10,
        color: '#312e2e',
    },

    button_container: {
        flex: 2,
        fontSize: 10
    },

    button_done: {
        height: 40,
        borderRadius: 5,
        color: 'white',
        backgroundColor: "#81A861",
        marginBottom: 2
    },

    button_not_done: {
        height: 40,
        borderRadius: 5,
        color: 'black',
        backgroundColor: "#E0ACA4",
        marginBottom: 2
    },

    button_edit: {
        height: 40,
        borderRadius: 5,
        color: 'black',
        borderColor: "#3B4F2B",
        borderWidth: 1,
        backgroundColor: "#D0E3C4",
        marginBottom: 2,
    },

    button_delete: {
        height: 40,
        borderRadius: 5,
        color: 'white',
        backgroundColor: "#C05746",
        marginBottom: 2
    }
});


export default observer(TaskView);