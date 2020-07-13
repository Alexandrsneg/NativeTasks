import {StyleSheet} from "react-native";

export const taskViewStyle = StyleSheet.create({

    container:{
        backgroundColor: '#7922CC',
        padding: 10,
        paddingTop: 200,
        flex: 1,
        alignContent: 'center'
    },
    task_form:{
        flexDirection: 'row',
        backgroundColor: '#6F2CF5',
        padding: 10,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 5
    },

    task_content: {
        flex: 5,
    },

    title: {
        paddingLeft: 100,
        fontSize: 20,
        fontWeight: "800",
        color: 'white'
    },

    text: {
        fontSize: 10,
        fontWeight: "800",
        color: 'white',
    },

    button_container: {
        flex: 2,
        fontSize: 10
    },

    button_done: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        color: 'white',
        backgroundColor: "green",
        marginBottom: 2
    },

    button_not_done: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        color: 'black',
        backgroundColor: "yellow",
        marginBottom: 2
    },

    button_edit: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        color: 'white',
        backgroundColor: "blue",
        marginBottom: 2
    },

    button_delete: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        color: 'white',
        backgroundColor: "red",
        marginBottom: 2
    }
});