import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/tasks/'
})

async function getAllTasks() {
    const { data } = await api.get();
    return data;
}

// La comento, ya que no la usé porque decidí trabajar con la lista de tareas
// completa y buscar por aquella tarea que tenia el id del cual necesitaba
// async function getTaskById(id) {
//     const { data } = await api.get(`${id}`);
//     return data;
// }

async function addTask(task) {
    await api.post('', task);
}

async function updateTask(id, task) {
    await api.put(`/${id}`, task);
}

async function deleteTask(id) {
    await api.delete(`/${id}`);
}

export default {
    getAllTasks,
    // getTaskById,
    addTask,
    updateTask,
    deleteTask
}