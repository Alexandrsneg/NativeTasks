import React, { Component } from 'react';
import CommonForm from "./commonForm";
import UserStorage from "../../repository/local/userStorage"



class AuthScreen extends Component{

    onAuthUser = () => UserStorage.authUser()

    render() {
        return (
                <CommonForm storageFun ={this.onAuthUser} buttonName={"Авторизоваться"} />
        );
    }
}

export default AuthScreen;