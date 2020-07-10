import React, { Component } from 'react';
import UserStorage from "../../repository/local/userStorage";
import {StyleSheet, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {observer} from "mobx-react";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#7922CC',
        padding: 10,
        paddingTop: 200,
        flex: 1,
        alignContent: 'center'
    },
    textInputs: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: 1,
        color: 'white'

    },
    buttons: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        color: 'white'
    }
});


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
                <View style={styles.container}>
                    <TextInput style={styles.textInputs} defaultValue={UserStorage.email} onChangeText={this.handleEmail}
                           placeholder= 'логин'/>
                    <TextInput style={styles.textInputs} defaultValue={UserStorage.password} onChangeText={this.handlePassword}
                           placeholder='пароль'/>
                    <Button buttonStyle={styles.buttons}
                        onPress={this.props.storageFun} title={this.props.buttonName}/>
                </View>
        );
    }
}


export default CommonForm