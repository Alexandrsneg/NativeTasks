import {StyleSheet} from "react-native";

export const sideBarStyle = StyleSheet.create({
    container:{
        backgroundColor: '#7922CC',
        paddingTop: 200,
        flex: 1,
        alignContent: 'center',
    },
    text: {
        height: 40,
        marginBottom: 20,
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,

    },
    buttons: {
        height: 40,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: 'white',
        marginBottom: 3,
        color: 'white',
    },
    buttonLogout: {
        height: 40,
        borderColor: 'white',
        borderTopWidth:1,
        borderBottomWidth:1,
        marginTop: 430,
        color: 'white',
        backgroundColor: "red",
    }
});