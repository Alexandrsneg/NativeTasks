import {StyleSheet} from "react-native";

export const sideBarStyle = StyleSheet.create({
    container:{

        flexDirection: 'column',
        backgroundColor: '#ADC698',
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        height: 40,
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
        color: 'black',
    },
    buttonLogout: {
        height: 40,
        borderColor: 'white',
        borderTopWidth:1,
        borderBottomWidth:1,
        marginTop: 430,
        color: 'white',
        backgroundColor: "#C05746",
    }
});