import React from "react";
import Task from "./Task";



const Tasks = ({tasks,handleTaskClick,handleRemoveTask}) =>{
    return (
        <>
        {tasks.map(task => 
        <Task handleTaskClick={handleTaskClick} handleRemoveTask ={handleRemoveTask} task={task}/>)}
        </>
    )   
};

export default Tasks;