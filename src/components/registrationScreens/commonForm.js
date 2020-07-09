import React, { Component } from 'react';
import UserStorage from "../../repository/local/userStorage";
import {StyleSheet, TextInput, View} from "react-native";
import {Button} from "react-native-elements";

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
    onLoginChangeHandler = (event) =>{
        UserStorage.saveEmail(event.target.value)
    }
    //функция-обработчик изменения состояния инпута пароля
    onPasswordChangeHandler = (event) =>{
        UserStorage.savePassword(event.target.value)
    }

    render() {
        return (
                <View style={styles.container}>
                    <TextInput style={styles.textInputs} defaultValue={UserStorage.email} onChange={this.onLoginChangeHandler}
                           placeholder= 'логин'/>
                    <TextInput style={styles.textInputs} defaultValue={UserStorage.password} onChange={this.onPasswordChangeHandler}
                           placeholder='пароль'/>
                    <Button buttonStyle={styles.buttons}
                        onPress={this.props.storageFun} title={this.props.buttonName}/>
                </View>
        );
    }
}


export default CommonForm