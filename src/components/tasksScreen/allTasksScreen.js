import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
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
    },

    scroll: {
        marginTop:100,
        marginBottom:30
    }
});

class AllTasksScreen extends Component{

    componentDidMount() {
        TaskStorage.getTasks()
    }

    jumpToCreateNewTask = () => this.props.navigation.navigate("Создать")


    render() {
        return (
            <View style={appCommonStyle.container}>
                <ScrollView style={styles.scroll}>
                {TaskStorage.tasksData.tasks.map((value) => {
                    return <TaskView key={value.id}
                                     done={value.done}
                                     title={value.title}
                                     body={value.body}
                                     id={value.id}
                                     jumps={this.props}
                    />})}
            <Button buttonStyle={styles.button_add} onPress={this.jumpToCreateNewTask} title={"+"}/>
            </ScrollView>
            </View>
        );
    }
}

export default observer(AllTasksScreen);