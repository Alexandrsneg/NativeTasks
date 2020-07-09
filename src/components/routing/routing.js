import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from "../registrationScreens/authScreen";
import RegistrationScreen from "../registrationScreens/registrationScreen";


const Drawer = createDrawerNavigator();

class Routing extends Component{

    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Авторизация" component={AuthScreen} />
                    <Drawer.Screen name="Регистрация" component={RegistrationScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default Routing;