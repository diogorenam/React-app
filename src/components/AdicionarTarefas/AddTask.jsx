import React,  { useState } from "react";
import "./AddTask.css"
import Button from "../button/Button";
const AddTask = ({handleTaskAdition}) => {
    const [inputDate, setInputDate] = useState('')
    const handIputChange = (e) =>{
        setInputDate(e.target.value)//pegando a String digitada pelo usuario
        
    }
    const handleTaskClick = () =>{
        handleTaskAdition(inputDate);
        setInputDate('');
    }
    return( 
        <div className="add-task-container">
            <input onChange={handIputChange} value={inputDate} className="add-task-input" type="text" />
            <div className="add-task-button-container">
            <Button onClick={handleTaskClick}>Adicionar</Button>

            </div>
        </div>
       
     );
}
export default AddTask;