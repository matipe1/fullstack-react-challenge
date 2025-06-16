import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/tasks/'
})

async function getAllTasks() {
    const { data } = await api.get();
    return data;
}

// async function getTaskById(id) {
//     const { data } = await api.get(`${id}`);
//     return data;
// }

async function addTask(task) {
    await api.post('', task);

}

export default {
    getAllTasks,
    // getTaskById,
    addTask
}