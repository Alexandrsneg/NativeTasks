import {action, decorate, observable} from "mobx";
import {ApiService} from "../rest/apiService";

class TasksStore {

    tasksData = {
        tasks : []
    }

    task = {
        id : null,
        title : "",
        body : ""
    }

    warning = {
        isError: false,
        message: "Что-то пошло не так повторите попытку позже"
    }


    taskReturned = (task) =>{
        this.task.id = task.id
        this.task.title = task.title
        this.task.body = task.body

    }

    flagForButton

    setTitle = (title) => {
        this.task.title = title
    }


    setBody= (body) => {
        this.task.body = body
    }

    //записываем таски с сервера в объект таскДата
    setTasks = (tasks) =>{
        this.tasksData.tasks = tasks
    }

    setTask = (task) =>{
        this.task = task
    }

    changeButton = (flag) =>{
        this.flagForButton = !flag
        this.getTasks()
    }

    //получаем все имеющиеся таски с сервера
    getTasks = () => {
        ApiService({
            url : "/tasks",
            method: "GET"
        }).then(response => this.setTasks(response)).catch(error =>{
            this.warning.isError = true
        })
    }

   //добавлчем новую таску в массив тасок
    addTask = () =>{
        ApiService({
            url: "/tasks",
            method: "POST",
            body: this.task
        }).then(response => {
            this.getTasks()
        })
    }

    getIndexOfTask = id => {
         return this.tasksData.tasks.findIndex(element => {
            return element.id === id
        })
    }

    //редактируем таску по айди
    editTask= (id) =>{
        let index = this.getIndexOfTask(id)
        console.warn(index)
        ApiService({
            url: `/tasks/${id}`,
            method: "PATCH",
            body: this.task
        }).then(response => {
            response = this.task
            this.tasksData.tasks[index] = this.task
        })
    }

    //меняем статус по айди
    changeStatusOfTask= (id, flag) =>{
        ApiService({
            url: `/tasks/${id}`,
            method: "PATCH",
            body: {"done" : !flag}
        }).then(response => this.changeButton(response))
    }


    deleteTask = (id) => {
        ApiService({
            url : `/tasks/${id}`,
            method : "DELETE"
        }).then(response => this.getTasks()).catch(error =>{
            this.warning.isError = true
        })
    }

    //получаем таску по айди
    getTaskById= (id) =>{
        ApiService({
            url: `/tasks/${id}`,
            method: "GET"
        }).then(response =>{
            this.setTask(response)
        }).catch(error =>{
            this.warning.isError = true
        })
    }

    clearTask = () => {
        this.task.title=""
        this.task.body=""
        this.task.id=null
    }


}

    decorate(TasksStore, {
        tasksData: observable,
        task: observable,
        flagForButton: observable,
        warning:observable,
        setTitle: action,
        setBody: action,
        setTask:action,
        setTasks: action,
        getTasks: action,
        addTask: action,
        editTask: action,
        changeStatusOfTask: action,
        deleteTask: action,
        getTaskById: action,
        taskReturned: action
    })

const tasksStore = new TasksStore();

export default tasksStore;