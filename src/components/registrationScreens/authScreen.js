import React, { Component } from 'react';
import CommonForm from "./commonForm";
import UserStorage from "../../repository/local/userStorage"
import {Alert} from "react-native";
import {navigate} from "@react-navigation/routers/src/CommonActions";
import {observer} from "mobx-react";




class AuthScreen extends Component{

    onAuthUser = () => {
        UserStorage.authUser()
    }


    render() {
        return (
                <CommonForm storageFun ={this.onAuthUser} buttonName={"Авторизоваться"} />
        );
    }
}

export default observer(AuthScreen);