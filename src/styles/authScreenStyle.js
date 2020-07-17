import {StyleSheet} from "react-native";

export const authStyles = StyleSheet.create({
    container:{
        backgroundColor: '#D0E3C4',
        padding: 10,
        paddingTop: 200,
        flex: 1,
        alignContent: 'center'
    },
    textInputs: {
        marginVertical: 2,
        paddingHorizontal: 5,
        height: 40,
        borderColor: '#3B4F2B',
        borderWidth: 1,
        marginBottom: 1,
        color: 'black',

    },
    buttons: {
        marginTop: 5,
        paddingHorizontal: 5,
        height: 40,
        borderColor: '#3B4F2B',
        backgroundColor: "#D0E3C4",
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        color: 'white'
    }
});