import React, { Component } from 'react';
import CommonForm from "./commonForm";
import UserStorage from "../../repository/local/userStorage"
import {observer} from "mobx-react";



class RegistrationScreen extends Component{

    onRegUser = () => UserStorage.regUser()

    render() {
        return (
            <CommonForm storageFun ={this.onRegUser} buttonName={"Зарегистрироваться"} authScreen={false}  />
        );
    }
}

export default observer(RegistrationScreen);