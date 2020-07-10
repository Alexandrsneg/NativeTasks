import AsyncStorage from '@react-native-community/async-storage';
import {action, decorate, observable} from "mobx";
import {ApiService} from "../rest/apiService";
import {Alert} from "react-native";
import AuthScreen from "../../components/registrationScreens/authScreen";

class UserStorage {
    constructor() {
        this.getToken()
    }

    email = ""
    password=""
    token = ""


    //!! конвертация в булевое значение для проверки на авторизацию
    isAuth = ""


    getToken = async () => {
     const token = await AsyncStorage.getItem("token")
        this.isAuth = token
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
            console.warn("email: " + this.email)
            console.warn("password: " + this.password)
            const response = await ApiService({
                url: "/Users/login",
                method: "POST",
                body: {
                    email: this.email,
                    password: this.password
                }
            })
            AsyncStorage.setItem("token", response.id).then(r => console.log(r))
            this.saveToken(response.id)
            Alert.alert("Авторизован")
        } catch(err){
            Alert.alert("Ошибка UserStorage: " , err.response.status)
        }

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