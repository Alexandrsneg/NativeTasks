import AsyncStorage from '@react-native-community/async-storage';
import {action, decorate, observable} from "mobx";
import {ApiService} from "../rest/apiService";
import {Alert} from "react-native";

class UserStorage {

    email = ""
    password=""
    token = ""


    //!! конвертация в булевое значение для проверки на авторизацию
    isAuth = ""


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
            Alert.alert("Ошибка UserStorage auth: " , err.response.status)
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
            Alert.alert("Ошибка UserStorage reg: ")
        }

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