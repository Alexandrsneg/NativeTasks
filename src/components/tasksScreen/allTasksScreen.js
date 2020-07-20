import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import TaskView from "./taskView";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";
import {appCommonStyle} from "../../styles/appCommonStyle";
import tasksStorage from "../../repository/local/tasksStorage";




const styles = StyleSheet.create({

    button_add: {
        backgroundColor: '#ADC698',
        borderRadius: 5,
    },

    scroll: {
        marginBottom:30
    },

    text_bigTitle: {
        fontSize: 40,
        textAlign: 'center',
        color: '#312e2e',
        marginTop:100,
        marginBottom: 10
    }
});

class AllTasksScreen extends Component{


    componentDidMount() {
        tasksStorage.getTasks()
    }

    jumpToCreateNewTask = () => {
        tasksStorage.clearTask()
      this.props.navigation.navigate("Создать")
    }


    render() {
        return (
            <View style={appCommonStyle.container}>
                <Text style={styles.text_bigTitle}>
                    Все заметки
                </Text>
                <ScrollView style={styles.scroll}>
                {tasksStorage.tasksData.tasks.map((value) => {
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