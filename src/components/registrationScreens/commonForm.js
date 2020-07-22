import React, { Component } from 'react';
import UserStore from "../../repository/local/userStore";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import Container from "../commonComponents/container";
import {observer} from "mobx-react";
import Warnings from "../commonComponents/warnings";





//многоразовый компонент-шаблон для форм регистрации/авторизации
class CommonForm extends Component{


    //функция-обработчик изменения состояния инпута логина
    handleEmail = (email) => {
        UserStore.saveEmail(email)

    }
    //функция-обработчик изменения состояния инпута пароля
    handlePassword = (pass) => {
        UserStore.savePassword(pass)
    }

    warningOk = () => UserStore.warning.isError = false

    render() {
        return (
                <Container>
                        {this.props.authScreen ?
                            <Text style={style.text_bigTitle}>
                                Экран авторизации
                            </Text> :
                            <Text style={style.text_bigTitle}>
                                Экран регистрации
                            </Text>
                        }
                    {UserStore.warning.isError ?
                        <>
                            <Warnings warningMessage={UserStore.warning.message}
                                      buttonOk={this.warningOk}/>
                        </>
                        :
                        <>
                        <TextInput style={style.textInputs} onChangeText={this.handleEmail}
                                   placeholder='логин'/>
                        <TextInput style={style.textInputs} onChangeText={this.handlePassword}
                                   placeholder='пароль'/>
                        <Button titleStyle={{color: "#3B4F2B"}} buttonStyle={style.buttons}
                        onPress={this.props.storageFun} title={this.props.buttonName}/>
                        </>
                    }
                </Container>
        );
    }
}

const style = StyleSheet.create({

    text_bigTitle: {
        fontSize: 40,
        textAlign: 'center',
        color: '#312e2e',
        marginBottom: 10
    },
    textInputs: {
        marginVertical: 2,
        paddingHorizontal: 5,
        height: 40,
        borderColor: '#3B4F2B',
        borderWidth: 1,
        marginBottom: 1,
        color: 'black',

    },
    buttons: {
        marginTop: 5,
        paddingHorizontal: 5,
        height: 40,
        borderColor: '#3B4F2B',
        backgroundColor: "#D0E3C4",
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        color: 'white'
    }
});




export default observer(CommonForm)