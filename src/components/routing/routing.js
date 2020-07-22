import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from "../registrationScreens/authScreen";
import RegistrationScreen from "../registrationScreens/registrationScreen";
import AllTasksScreen from "../tasksScreen/allTasksScreen";
import SideBar from "./sideBar";
import userStore from "../../repository/local/userStore";
import {observer} from "mobx-react";
import EditTasksScreen from "../tasksScreen/editTaskScreen";
import CreateNewTask from "../tasksScreen/createTask";


const Drawer = createDrawerNavigator();

class Routing extends Component{


    render() {
        return (
            <NavigationContainer >
                <Drawer.Navigator drawerContent={(props)=> <SideBar {...props} />}>
                    {userStore.isAuth ?
                        <>
                        <Drawer.Screen name ="TASKS" component={AllTasksScreen} />
                        <Drawer.Screen name="EDIT" component={EditTasksScreen} />
                        <Drawer.Screen name="CREATE" component={CreateNewTask} />
                        </>
                    :
                        <>
                        <Drawer.Screen name="AUTH" component={AuthScreen} />
                        <Drawer.Screen name="REGISTRATION" component={RegistrationScreen} />
                        </>}
                    </Drawer.Navigator>
                </NavigationContainer>
        );
    }
}


export default observer(Routing);