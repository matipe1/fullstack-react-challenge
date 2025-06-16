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

  // Uso de servicios
  async function fetchTasks() {
      const response = await taskSvc.getAllTasks();
      setTasks(response);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function handleAddTask(newTaskData) {
    await taskSvc.addTask(newTaskData);
    await fetchTasks();
    alert(`Se agrego una nueva tarea: ${newTaskData.id}`)
    handleViewAllTasks();
  }

  async function handleUpdateTask(id, newTaskData) {
    await taskSvc.updateTask(id, newTaskData);
    await fetchTasks();

    alert(`Se actualizo una nueva tarea: ${id}`);
    handleViewAllTasks();
  }

  async function handleDeleteTask(id) {
    await taskSvc.deleteTask(id);
    await fetchTasks();

  }

  // Funciones para la lógica
  function handleCreateTask() {
    navigate('tasks/new')
  }

  function handleViewTask(id) {
    navigate(`/tasks/${id}`);
  }

  function handleEditTask(id) {
    navigate(`/tasks/edit/${id}`);
  }

  function handleViewAllTasks() {
    navigate('/tasks');
  }

  return (
    <>
      <Routes>
        <Route path="/tasks" element={
          <TaskList
            tasks={tasks}
            handleViewTask={handleViewTask}
            handleCreateTask={handleCreateTask}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask} />
          } />

        <Route path="/tasks/:id" element={
          <TaskItem
            tasks={tasks}
            handleEditTask={handleEditTask}
            handleViewAllTasks={handleViewAllTasks} />
          } />

        <Route path="/tasks/new" element={
          <TaskForm 
          tasks={tasks}
          onSubmit={handleAddTask}
          handleViewAllTasks={handleViewAllTasks}/>
          } />
        
        <Route path="/tasks/edit/:id" element={
          <TaskForm 
          tasks={tasks}
          onSubmit={handleUpdateTask}
          handleViewAllTasks={handleViewAllTasks} />
          } />
        
        <Route path="*" element={<Navigate to="/tasks" replace />} />
      </Routes>
    </>
  )
}

export default App
