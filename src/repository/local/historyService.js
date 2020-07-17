import {action, decorate, observable,toJS} from "mobx";
import tasksStorage from "./tasksStorage";


class HistoryService {

    state = {
        past: [{
            id : null,
            title : "",
            body : ""
        } ],
        present: null,
        future: []
    };


    updateState = () => {
        this.state.present = toJS(tasksStorage.task);
        this.state.past.push(this.state.present);
    };


    undo = () => {
        if (this.state.past.length > 1) {
            this.state.future.push(this.state.present)
            this.state.present = this.state.past.pop()
            tasksStorage.taskReturned(this.state.present)
            console.warn(this.state.present)
        }
    };


    redo = () => {
        if (this.state.future.length > 0) {
            this.state.past.push(this.state.present)
            this.state.present = this.state.future.pop()
            tasksStorage.taskReturned(this.state.present)
        }
    };

    clearHistory = ()=>{
        console.warn("cleared")
        this.state.past = [{
            id : null,
            title : "",
            body : ""
        }]
        this.state.present = null
        this.state.future.clear()
    }

}

decorate(HistoryService, {
    state: observable,
    canRedo: observable,
    canUndo: observable,
    updateState: action,
    undo: action,
    redo: action,
    clearHistory: action
})

const historyService = new (HistoryService);

export default historyService;
