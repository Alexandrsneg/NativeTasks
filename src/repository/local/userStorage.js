import {ApiService} from "../rest/apiService"
import {action, decorate, observable} from "mobx";
import { AsyncStorage } from 'react-native';

class UserStorage {

    email = ""
    password=""
    token = ""


    //!! конвертация в булевое значение для проверки на авторизацию
    isAuth= AsyncStorage.getItem("token")


    saveEmail = (email) => {
        this.email = email
    }


    savePassword = (password) => {
        this.password = password
    }

    saveToken = (token) => {
        this.token = token
    }


    authUser = () =>{
        return ApiService({
            url: "/Users/login",
            method: "POST",
            body: {
                email: this.email,
                password: this.password
            }
        }).then(response =>{
            AsyncStorage.setItem("token", response.id).then(r => console.log(r))
            this.saveToken(response.id)
            window.location.href = "/notes"
        })
    }

    regUser = () =>{
        ApiService({
            url: "/Users",
            method: "POST",
            body: {
                email: this.email,
                password: this.password
            }
        }).then(r => console.log(r))
     }
}

decorate(UserStorage, {
    email: observable,
    token: observable,
    password: observable,
    isAuth: observable,
    saveEmail: action,
    savePassword: action,
    authUser: action,
    regUser: action
})

const userStorage = new UserStorage();

export default userStorage;