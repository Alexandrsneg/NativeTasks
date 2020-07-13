import {StyleSheet} from "react-native";

export const taskViewCreateStyle = StyleSheet.create({

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
        flex: 9,
    },

    title: {
        paddingLeft: 100,
        fontSize: 20,
        fontWeight: "800",
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5
    },

    text: {
        fontSize: 10,
        height: 80,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5
    },

    button_container: {
        flex: 1,
        fontSize: 10
    },

    button_close: {
        height: 30,
        width: 30,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        color: 'white',
        backgroundColor: "red",
        padding: 2,
        marginTop: 3,
        marginLeft: 4
    },

    button_save: {
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
    }

});