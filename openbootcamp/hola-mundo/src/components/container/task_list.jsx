import React from 'react'
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {


  const defaultTask = new Task("Example", "Default Description", false, LEVELS.NORMAL);

  const changeState = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  }

  return (
    <div>
        <div>
            Your Task:

        </div>
        <TaskComponent task={ defaultTask }/>
    </div>
  )
}


export default TaskListComponent

