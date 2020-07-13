import React, { Component } from 'react';
import CommonForm from "./commonForm";
import UserStorage from "../../repository/local/userStorage"



class RegistrationScreen extends Component{

    onRegUser = () => UserStorage.regUser()

    render() {
        return (
            <CommonForm storageFun ={this.onRegUser} buttonName={"Зарегистрироваться"} />
        );
    }
}

export default RegistrationScreen;