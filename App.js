/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from "./src/components/registrationScreens/authScreen";
import RegistrationScreen from "./src/components/registrationScreens/registrationScreen";
import AllTasksScreen from "./src/components/tasksScreen/allTasksScreen";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

class App extends Component{

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

export default App;