import AsyncStorage from '@react-native-community/async-storage';
import {action, decorate, observable} from "mobx";
import {ApiService} from "../rest/apiService";
import {Alert} from "react-native";
import AuthScreen from "../../components/registrationScreens/authScreen";
import {navigate} from "@react-navigation/routers/src/CommonActions";

class UserStorage {
    // constructor() {
    //     this.getToken()
    // }

    email = ""
    password=""
    token = ""


    //!! конвертация в булевое значение для проверки на авторизацию
    isAuth = ""


    // getToken = async () => {
    //  const token = await AsyncStorage.getItem("token")
    //     this.isAuth = token
    // }


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
            await AsyncStorage.setItem("token", response.id)
            this.saveToken(response.id)
            this.isAuth = true
            navigate("Заметки")
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