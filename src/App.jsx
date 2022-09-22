import React, { useEffect, useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "./components/Tarefas/Tasks";
import AddTask from "./components/AdicionarTarefas/AddTask";
import Header from "./components/Header/Header";
import taskDetails from "./components/detalhes/taskDetails"

import "./App.css";

const App = () => {
  //o metodo useState é usado para poder atualizar uma informação
  const [tasks, setTasks] = useState([
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

  useEffect(()=>{
    const fecthtask = async () => {
      const {data} = await  axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")

      setTasks(data);
    };
    fecthtask();
  },[]);

  //Adicionar uma nova task
  const handleTaskAdition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  // remove task
  const handleRemoveTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  //Marcar com verde as taks concluidas
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };
  //retornar as tasks
  return (
    <Router>
     
      <div className="container">
        <Header/>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAdition={handleTaskAdition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleRemoveTask={handleRemoveTask}
              />
            </>
          )}
        />
       <Route path="/:tasktitle" exact component={taskDetails}/>
      </div>
    </Router>
  );
};

export default App;
