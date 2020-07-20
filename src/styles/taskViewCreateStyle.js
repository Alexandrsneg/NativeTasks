import {StyleSheet} from "react-native";

export const taskViewCreateStyle = StyleSheet.create({

    container:{
        backgroundColor: '#D0E3C4',
        padding: 10,
        paddingTop: 200,
        flex: 1,
        alignContent: 'center'
    },

    history_btn_container:{
        flexDirection: 'row',
        alignSelf: 'stretch'
    },

    button_undo_container: {
        flex: 1,
        marginBottom: 2,
        marginRight:1

    },

    button_redo_container: {
        flex: 1,
        marginBottom: 2,
        marginLeft:1
    },

    history_btn_undo:{
        backgroundColor: '#D0E3C4',
        borderColor: '#ADC698',
        borderWidth: 1,
    },

    history_btn_redo:{
        backgroundColor: '#D0E3C4',
        borderColor: '#ADC698',
        borderWidth: 1,
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
        flex: 9,
    },

    title: {
        paddingLeft: 100,
        fontSize: 20,
        fontWeight: "800",
        color: '#312e2e',
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5
    },

    text: {
        fontSize: 10,
        height: 80,
        color: '#312e2e',
        backgroundColor: 'white',
        borderRadius: 5,
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
        borderRadius: 5,
        color: 'white',
        backgroundColor: "#C05746",
        padding: 2,
        marginTop: 3,
        marginLeft: 4
    },

    button_save: {
        backgroundColor: '#81A861',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
    },


    text_bigTitle: {
        fontSize: 40,
        textAlign: 'center',
        color: '#312e2e',
        marginBottom: 10
    }

});