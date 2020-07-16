import {action, decorate, observable} from "mobx";


class HistoryService {

    state = {
        past: [],
        present: 0,
        future: [],
    };


    canUndo = this.state.past.length > 0;

    canRedo = this.state.future.length > 0;


    updateState = (value) => {
        this.state.past.push(this.state.present);
        this.state.present = value;
    };


    undo = () => {
        this.state.future.push(this.state.present);
        this.state.present  = this.state.past.pop()
    };


    redo = () => {
        this.state.past.push(this.state.present);
        this.state.present = this.state.past.pop()
    };

}

decorate(HistoryService, {
    state: observable,
    canRedo: observable,
    canUndo: observable,
    updateState: action,
    undo: action,
    redo: action
})

const historyService = new (HistoryService);

export default historyService;
