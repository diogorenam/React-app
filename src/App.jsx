import React, { useState } from "react";
import './App.css'
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

 const handleTaskAdition = (taskTitle) =>{
    const newTasks = [...tasks,{
      title: taskTitle,
      id: Math.random(10),
      completed: false,
    }]
    setTasks(newTasks);
 }
  return (
    <>
      <div className="container">
        <AddTask handleTaskAdition = {handleTaskAdition}/>
      <Tasks tasks={tasks}/>
    </div>
   
    </>

  ) 

}

export default App;