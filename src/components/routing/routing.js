import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from "../registrationScreens/authScreen";
import RegistrationScreen from "../registrationScreens/registrationScreen";
import AllTasksScreen from "../tasksScreen/allTasksScreen";
import SideBar from "./sideBar";
import userStorage from "../../repository/local/userStorage";
import {observer} from "mobx-react";
import EditTasksScreen from "../tasksScreen/editTaskScreen";
import CreateNewTask from "../tasksScreen/createTask";


const Drawer = createDrawerNavigator();

class Routing extends Component{


    render() {
        return (
            userStorage.isAuth ?
                <NavigationContainer >
                    <Drawer.Navigator drawerContent={(props)=> <SideBar {...props} />}>
                        <Drawer.Screen name="Заметки" component={AllTasksScreen} />
                        <Drawer.Screen name="Редактировать" component={EditTasksScreen} />
                        <Drawer.Screen name="Создать" component={CreateNewTask} />
                    </Drawer.Navigator>
                </NavigationContainer> :
                <NavigationContainer >
                    <Drawer.Navigator drawerContent={(props)=> <SideBar {...props} />}>
                        <Drawer.Screen name="Авторизация" component={AuthScreen} />
                        <Drawer.Screen name="Регистрация" component={RegistrationScreen} />
                    </Drawer.Navigator>
                </NavigationContainer>
        );
    }
}

export default observer(Routing);