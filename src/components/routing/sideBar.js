import React, {Component} from "react";
import userStorage from "../../repository/local/userStorage";
import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Button} from "react-native-elements";
import AsyncStorage from '@react-native-community/async-storage';
import {observer} from "mobx-react";
import {sideBarStyle} from "../../styles/sideBarStyle";
import {appCommonStyle} from "../../styles/appCommonStyle";



class SideBar extends Component{

    jumpToNotes = () => this.props.navigation.jumpTo("Заметки")
    jumpToAuth = () => this.props.navigation.jumpTo("Авторизация")
    jumpToReg = () => this.props.navigation.jumpTo("Регистрация")

    logout = () => {
        AsyncStorage.clear()
        userStorage.isAuth = false
    }

    render() {
        return (
            userStorage.isAuth ?
                <View style={sideBarStyle.container}>
                    <Text style={sideBarStyle.text}>{userStorage.email}</Text>
                    <Button type={'clear'} buttonStyle={sideBarStyle.buttons}
                            onPress={this.jumpToNotes} title={"Заметки"}/>
                    <Button buttonStyle={sideBarStyle.buttonLogout}
                            onPress={this.logout} title={"Выйти"}/>
                </View> :
                <View style={sideBarStyle.container}>
                    <Button type={'clear'} buttonStyle={sideBarStyle.buttons}
                            onPress={this.jumpToAuth} title={"Авторизоваться"}/>
                    <Button type={'clear'} buttonStyle={sideBarStyle.buttons}
                            onPress={this.jumpToReg} title={"Зарегистрироваться"}/>
                </View>

        );
    }
}


export default observer(SideBar);