// import './App.css'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';
import TaskForm from './components/TaskForm';

import taskSvc from './services/tasks.service.js';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTasks() {
      const response = await taskSvc.getAllTasks();
      setTasks(response);
    }
    fetchTasks();
  }, []);

  async function handleAddTask(newTaskData) {
    const newTask = await taskSvc.addTask(newTaskData);
    setTasks([...tasks, newTask]);
    navigate('/tasks');
  }

  function alta() {
    navigate('tasks/new')
  }

  function consultarDetalle(id) {
    navigate(`/tasks/${id}`);
    // console.log(id) -- Devuelve correctamente el ID
  }


  return (
    <>
      <Routes>
        <Route path="/tasks" element={
          <TaskList
            tasks={tasks}
            consultarDetalle={consultarDetalle}
            alta={alta} />
          } />

        <Route path="/tasks/new" element={
          <TaskForm onSubmit={handleAddTask} />
          } />

        <Route path="/tasks/:id" element={
          <TaskItem
            tasks={tasks} />
          } />
        
        {/* <Route path="/tasks/edit" element={
          <TaskForm onSubmit={handleAddTask} />
          } /> */}
        
        <Route path="*" element={<Navigate to="/tasks" replace />} />
      </Routes>
    </>
  )
}

export default App
