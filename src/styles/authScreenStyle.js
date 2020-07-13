import {StyleSheet} from "react-native";

export const authStyles = StyleSheet.create({
    container:{
        backgroundColor: '#7922CC',
        padding: 10,
        paddingTop: 200,
        flex: 1,
        alignContent: 'center'
    },
    textInputs: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: 1,
        color: 'white'

    },
    buttons: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        color: 'white'
    }
});