import React, {Component} from "react";
import userStorage from "../../repository/local/userStore";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-elements";
import AsyncStorage from '@react-native-community/async-storage';
import {observer} from "mobx-react";
import {NAVIGATION_AUTH, NAVIGATION_REGISTRATION, NAVIGATION_TASKS} from "../../constants";



class SideBar extends Component{

    jumpToNotes = () => this.props.navigation.navigate(NAVIGATION_TASKS)
    jumpToAuth = () => this.props.navigation.navigate(NAVIGATION_AUTH)
    jumpToReg = () => this.props.navigation.navigate(NAVIGATION_REGISTRATION)

    logout = () => {
        AsyncStorage.clear()
        userStorage.isAuth = false
    }

    render() {
        return (
            userStorage.isAuth ?
                <View style={style.container}>
                    <Text style={style.text}>{userStorage.email}</Text>
                    <Button titleStyle={{color: "black"}} type={'clear'}  buttonStyle={style.buttons}
                            onPress={this.jumpToNotes} title={"Заметки"}/>
                    <Button  buttonStyle={style.buttonLogout}
                            onPress={this.logout} title={"Выйти"}/>
                </View> :
                <View style={style.container}>
                    <Button titleStyle={{color: "#3B4F2B"}} type={'clear'} buttonStyle={style.buttons}
                            onPress={this.jumpToAuth} title={"Авторизоваться"}/>
                    <Button titleStyle={{color: "#3B4F2B"}} type={'clear'} buttonStyle={style.buttons}
                            onPress={this.jumpToReg} title={"Зарегистрироваться"}/>
                </View>

        );
    }
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: '#ADC698',
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        height: 40,
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,

    },
    buttons: {
        height: 40,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: 'white',
        marginBottom: 3,
        color: 'black',
    },
    buttonLogout: {
        height: 40,
        borderColor: 'white',
        borderTopWidth:1,
        borderBottomWidth:1,
        marginTop: 430,
        color: 'white',
        backgroundColor: "#C05746",
    }
});


export default observer(SideBar);