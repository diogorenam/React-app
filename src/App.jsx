import React, { useState } from "react";
import './App.css'
import {v4 as uuidv4} from 'uuid'
import Tasks from './components/Tarefas/Tasks'
import AddTask from './components/AdicionarTarefas/AddTask'
const App = ()=>{
//o metodo useState é usado para poder atualizar uma informação 
 const [tasks,setTasks] = useState([
  {
    id: "1",
    title: "Estudar programação",
    completed: false,
  },
  {
    id: "2",
    title: "Academia",
    completed: true,
  },
  {
    id: "3",
    title: "Trabalho",
    completed: true,
  },
  
 ]);
//Adicionar uma nova task 
 const handleTaskAdition = (taskTitle) =>{
    const newTasks = [...tasks,{
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]
    setTasks(newTasks);
 }
//Marcar com verde as taks concluidas 
 const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) return {...task, completed: !task.completed};
      return task;
    });
    setTasks(newTasks);
   
 }
 //retornar as tasks
  return (
    <>
      <div className="container">
        <AddTask handleTaskAdition = {handleTaskAdition} />
      <Tasks tasks={tasks} handleTaskClick ={handleTaskClick}/>
    </div>
   
    </>

  ) 

}

export default App;