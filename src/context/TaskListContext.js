import React, {createContext, useState, useEffect} from 'react';
import TaskList from '../components/TaskList';
import uuid from 'uuid/v4';



export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {

    const initialState = JSON.parse(localStorage.getItem('tasks' || []));

    const [tasks, setTasks] = useState(initialState);

    useEffect(()=> {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks])

    const addTask = (title) =>{
        setTasks([...tasks, {title:title, id:uuid()}])
    }

    const removeTask = (id) =>{
        setTasks(tasks.filter(task=> task.id !== id))
    };

    const clearList = () => {
        setTasks([]);
    }

    return  <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList}}>
                {props.children}
            </TaskListContext.Provider>
};

export default TaskListContextProvider;
