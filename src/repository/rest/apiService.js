import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from "react-native";

const PORT = `3000`
const HOST = `http://127.0.0.1:${PORT}`
const API_URL = `${HOST}/api`


export const ApiService = async ({url, method, body}) => {

        const TOKEN = await AsyncStorage.getItem("token")
        const ApiUrl = `${API_URL + url + (!!TOKEN ? `?access_token=${TOKEN}` : "")}`
        console.warn("ApiService: start fetching")
        return fetch(ApiUrl, {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        }).then(response => {
            console.warn("ApiService: end fetching111")
            if (response.status >= 200 && response.status <= 299) {
                console.warn("ApiService: returning response.json")
                return response.json()
            } else {
                console.warn("Ошибка HTTP1: ", response.status)
                console.warn("response ", response)
            }
        })
}

