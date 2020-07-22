import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import TaskView from "./taskView";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";
import tasksStore from "../../repository/local/tasksStore";
import {NAVIGATION_CREATE} from "../../constants";
import Container from "../commonComponents/container";
import Warnings from "../commonComponents/warnings";
import UserStorage from "../../repository/local/userStore";



class AllTasksScreen extends Component{


    componentDidMount() {
        tasksStore.getTasks()
    }

    jumpToCreateNewTask = () => {
        tasksStore.clearTask()
      this.props.navigation.navigate(NAVIGATION_CREATE)
    }

    warningOk = () => tasksStore.warning.isError = false

    render() {
        return (
            <Container>
                <Text style={styles.text_bigTitle}>
                    Все заметки
                </Text>
                {tasksStore.warning.isError ?
                    <>
                        <Warnings warningMessage={tasksStore.warning.message}
                                  buttonOk={this.warningOk}/>
                    </>
                    :
                <>
                <ScrollView style={styles.scroll}>
                {tasksStore.tasksData.tasks.map((value) => {
                    return <TaskView key={value.id}
                                     done={value.done}
                                     title={value.title}
                                     body={value.body}
                                     id={value.id}
                                     jumps={this.props}
                    />})}
            <Button buttonStyle={styles.button_add} onPress={this.jumpToCreateNewTask} title={"+"}/>
            </ScrollView>
                    </>
                }
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    },

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

export default observer(AllTasksScreen);