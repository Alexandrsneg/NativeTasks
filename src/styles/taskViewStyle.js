import {StyleSheet} from "react-native";

export const taskViewStyle = StyleSheet.create({

    container:{
        backgroundColor: '#D0E3C4',
        padding: 10,
        paddingTop: 200,
        flex: 1,
        alignContent: 'center'
    },
    task_form:{
        flexDirection: 'row',
        backgroundColor: '#D0E3C4',
        padding: 10,
        borderColor: '#ADC698',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5
    },

    task_content: {
        flex: 5,
    },

    title: {
        paddingLeft: 100,
        fontSize: 20,
        fontWeight: "800",
        color: '#312e2e'
    },

    text: {
        fontSize: 10,
        color: '#312e2e',
    },

    button_container: {
        flex: 2,
        fontSize: 10
    },

    button_done: {
        height: 40,
        borderRadius: 5,
        color: 'white',
        backgroundColor: "#81A861",
        marginBottom: 2
    },

    button_not_done: {
        height: 40,
        borderRadius: 5,
        color: 'black',
        backgroundColor: "#E0ACA4",
        marginBottom: 2
    },

    button_edit: {
        height: 40,
        borderRadius: 5,
        color: 'black',
        borderColor: "#3B4F2B",
        borderWidth: 1,
        backgroundColor: "#D0E3C4",
        marginBottom: 2,
    },

    button_delete: {
        height: 40,
        borderRadius: 5,
        color: 'white',
        backgroundColor: "#C05746",
        marginBottom: 2
    }
});