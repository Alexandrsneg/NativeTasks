import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from "react-native";

const PORT = `3000`
const HOST = `http://127.0.0.1:${PORT}`
const API_URL = `${HOST}/api`


export const ApiService = async ({url, method, body}) => {

        const TOKEN = await AsyncStorage.getItem("token")
        const ApiUrl = `${API_URL + url + (!!TOKEN ? `?access_token=${TOKEN}` : "")}`

        return fetch(ApiUrl, {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        }).then(response => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json()
            } else {
                console.warn("Ошибка (ApiService) HTTP: ", response.status)
            }
        })
}

