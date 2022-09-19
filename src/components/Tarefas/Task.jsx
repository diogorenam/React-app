import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import './Task.css';
import {useHistory} from "react-router-dom";

const Task = ({task,handleTaskClick,handleRemoveTask}) => {
    const history = useHistory();

    const handletaskdetailsClick = () => {
        history.push(`/${task.title}`)
    }
    return (
        <div className='task-container' style={task.completed ? {borderLeft:'6px solid chartreuse'}:{}}>
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
            {task.title}
            </div>
            <div className="buttons-container"> 
                <button className= "remove-task-button" onClick={ () => handleRemoveTask(task.id)}><CgClose/></button>
                <button className= "se-task-button" onClick={handletaskdetailsClick}> <CgInfo/></button>
            </div>
        </div>

    )
    //return (<div className="task-container"> {task.title}</div>)
}
 
export default Task;