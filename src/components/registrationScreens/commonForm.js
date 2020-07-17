import React, { Component } from 'react';
import UserStorage from "../../repository/local/userStorage";
import {StyleSheet, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";
import {authStyles} from "../../styles/authScreenStyle";
import {appCommonStyle} from "../../styles/appCommonStyle";




//многоразовый компонент-шаблон для форм регистрации/авторизации
class CommonForm extends Component{


    //функция-обработчик изменения состояния инпута логина
    handleEmail = (email) => {
        UserStorage.saveEmail(email)

    }
    //функция-обработчик изменения состояния инпута пароля
    handlePassword = (pass) => {
        UserStorage.savePassword(pass)
    }

    render() {
        return (
                <View style={appCommonStyle.container}>
                    <TextInput style={authStyles.textInputs}  onChangeText={this.handleEmail}
                           placeholder= 'логин'/>
                    <TextInput style={authStyles.textInputs}  onChangeText={this.handlePassword}
                           placeholder='пароль'/>
                    <Button titleStyle={{color: "#3B4F2B"}} buttonStyle={authStyles.buttons}
                        onPress={this.props.storageFun} title={this.props.buttonName}/>
                </View>
        );
    }
}


export default CommonForm