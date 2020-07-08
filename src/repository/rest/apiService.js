import { AsyncStorage } from 'react-native';

const PORT = `3000`
const HOST = `http://127.0.0.1:${PORT}`
const API_URL = `${HOST}/api`


const TOKEN = AsyncStorage.getItem("token")

export const ApiService = ({url, method, body}) =>{
    const ApiUrl = `${API_URL + url + (!!TOKEN ? `?access_token=${TOKEN}` : "")}`
  return fetch(ApiUrl,{
      method,
      headers : {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body : JSON.stringify(body)
  }).then(response => {
      if (response.status >=200 && response.status <=299){
          return response.json()
      }
      else {
          alert("Ошибка HTTP: " + response.status)
      }
  }).catch(error => {
      return Promise.reject('There has been a problem with your fetch operation:' + error)
  })
}

