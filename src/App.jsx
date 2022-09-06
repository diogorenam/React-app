import React, { useState } from "react";
import './App.css'
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask'
const App = ()=>{
//o metodo useState é usado para poder atualizar uma informação 
 const [tasks, setslks] = useState([
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
  return (
    <>
      <div className="container">
        <AddTask/>
      <Tasks tasks={tasks}/>
    </div>
   
    </>

  ) 

}

export default App;