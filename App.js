/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, { Component } from 'react';
import Routing from "./src/components/routing/routing";




class App extends Component{

    render() {
        return (
                <Routing/>
        );
    }
}

export default App;