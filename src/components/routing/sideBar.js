import React, {Component} from "react";
import userStorage from "../../repository/local/userStorage";
import {NavigationContainer} from "@react-navigation/native";
import AllTasksScreen from "../tasksScreen/allTasksScreen";
import AuthScreen from "../registrationScreens/authScreen";
import RegistrationScreen from "../registrationScreens/registrationScreen";
import {Alert, StyleSheet, Text, View} from "react-native";
import UserStorage from "../../repository/local/userStorage";
import {Button} from "react-native-elements";
import { DrawerActions } from '@react-navigation/native';


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#7922CC',
        padding: 10,
        paddingTop: 200,
        flex: 1,
        alignContent: 'center'
    },
    text: {
        height: 40,
        marginBottom: 1,
        color: 'white'

    },
    buttons: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 1,
        color: 'white'
    },
    buttonLogout: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 1,
        color: 'white',
        backgroundColor: "red"
    }
});

class SideBar extends Component{

    jumpToNotes = () => this.props.navigation.jumpTo('Заметки')
    jumpToAuth = () => this.props.navigation.jumpTo('Авторизация')
    jumpToReg = () => this.props.navigation.jumpTo("Регистрация")

    logout = () => {
        this.props.navigation.jumpTo('Авторизация')
        Alert.alert("Logouting")
    }

    render() {
        return (
            userStorage.isAuth ?
                <View style={styles.container}>
                    <Text style={styles.text}>Имя пользователя</Text>
                    <Button buttonStyle={styles.buttons}
                            onPress={this.jumpToNotes} title={"Заметки"}/>
                    <Button buttonStyle={styles.buttonLogout}
                            onPress={this.logout} title={"Выйти"}/>
                </View> :
                <View style={styles.container}>
                    <Button buttonStyle={styles.buttons}
                            onPress={this.jumpToAuth} title={"Авторизоваться"}/>
                    <Button buttonStyle={styles.buttons}
                            onPress={this.jumpToReg} title={"Зарегистрироваться"}/>
                </View>

        );
    }
}


export default SideBar;