import React, { useContext, useState } from 'react'
import {TaskListContext} from '../context/TaskListContext'


const TaskForm = () => {

    const {addTask, clearList} = useContext(TaskListContext);

    const [title, setTitle]=useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle('');
    };

    return (
      <form className="form" onSubmit={handleSubmit}>
          <input type="text"
                 className="task-input"
                 placeholder="Add Task..."
                 required
                 onChange={handleChange}
                 value={title} />
        
        <div className="buttons">
            <button type="submit" className="btn add-task-btn">Add Task</button>
            <button type="submit" className="btn clear-btn" onClick={clearList}>Clear</button>
        </div>
      </form>
    )
}

export default TaskForm
