import React, { Component } from 'react';
import {StyleSheet, Text, View} from "react-native";
import TaskView from "./taskView";
import TaskStorage from "../../repository/local/tasksStorage";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";
import {appCommonStyle} from "../../styles/appCommonStyle";
import {navigate} from "@react-navigation/routers/src/CommonActions";



const styles = StyleSheet.create({

    button_add: {
        backgroundColor: 'grey',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
    }
});

class AllTasksScreen extends Component{

    componentDidMount() {
        TaskStorage.getTasks()
    }

    jumpToCreateNewTask = () => this.props.navigation.jumpTo("Создать")

    render() {
        return (
            <View style={appCommonStyle.container}>
                {TaskStorage.tasksData.tasks.map((value) => {
                    return <TaskView key={value.id}
                                     done={value.done}
                                     title={value.title}
                                     body={value.body}
                                     id={value.id}
                    />})}
            <Button buttonStyle={styles.button_add} onPress={this.jumpToCreateNewTask} title={"+"}/>

            </View>

        );
    }
}

export default observer(AllTasksScreen);