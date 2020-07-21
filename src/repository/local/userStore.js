import AsyncStorage from '@react-native-community/async-storage';
import {action, decorate, observable} from "mobx";
import {ApiService} from "../rest/apiService";
import {Alert} from "react-native";

class UserStore {

    email = ""
    password=""
    token = ""



    isAuth = false

    warning = {
        isError: false,
        message: ""
    }

    saveEmail = (email) => {
        this.email = email
    }

    savePassword = (password) => {
        this.password = password
    }

    saveToken = (token) => {
        this.token = token
    }


    authUser = async () =>{
        try {
            const response = await ApiService({
                url: "/Users/login",
                method: "POST",
                body: {
                    email: this.email,
                    password: this.password
                }
            })
            await AsyncStorage.setItem("token", response.id)
            this.saveToken(response.id)
            this.isAuth = true
        } catch(err){
            let status = err.response.status
            this.warning.isError = true
            this.warning.message = "Не получилось авторизоваться, статус ошибки: " + status
        }

    }

    regUser = () =>{
        try {
            ApiService({
                url: "/Users",
                method: "POST",
                body: {
                    email: this.email,
                    password: this.password
                }
            }).then( r => this.isAuth = true)
        } catch {
            Alert.alert("Ошибка UserStore reg: ")
        }

     }
}

decorate(UserStore, {
    email: observable,
    token: observable,
    password: observable,
    isAuth: observable,
    warning: observable,
    saveEmail: action,
    savePassword: action,
    authUser: action,
    regUser: action
})

const userStorage = new UserStore();

export default userStorage;