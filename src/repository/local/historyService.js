import {action, decorate, observable,toJS} from "mobx";
import tasksStorage from "./tasksStorage";


class HistoryService {

    state = {
        past: [],
        present: 0,
        future: []
    };


    initPresent = (value) =>{
        this.state.present = value
    }


    updateState = (value) => {
        this.state.past.push(this.state.present);
        this.state.present = value;
    };


    undo = () => {
        if (this.state.past.length > 0) {
            this.state.future.push(this.state.present)
            this.state.present = this.state.past.pop()
            tasksStorage.taskReturned(this.state.present)
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
        this.state.past = []
        this.state.present = 0
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
