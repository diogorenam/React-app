import React from "react";
import Task from "./Task";



const Tasks = ({tasks,handleTaskClick}) =>{
    return (
        <>
        {tasks.map(task => <Task 
					 handleTaskClick={handleTaskClick} task={task
        } />)}
        </>
    )   
};

export default Tasks;