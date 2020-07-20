import React, { Component } from 'react';
import CommonForm from "./commonForm";
import UserStorage from "../../repository/local/userStorage"
import {observer} from "mobx-react";




class AuthScreen extends Component{

    onAuthUser = () => {
        UserStorage.authUser()
    }


    render() {
        return (
                <CommonForm storageFun ={this.onAuthUser} buttonName={"Авторизоваться"} authScreen={true} />
        );
    }
}

export default observer(AuthScreen);