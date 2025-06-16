import Task from "../models/Task.js";

async function getAllTasks() {
    const tasks = await Task.findAll();
    return tasks;
}

async function getTaskById(id) {
    const task = await Task.findByPk(id);
    return task;
}

async function addTask(data) {
    const task = await Task.create(data);
    return task;
}

async function modifyTask(id, data) {
    const taskSelected = await Task.findByPk(id);

    if (taskSelected) {
        await taskSelected.update(data);
        return taskSelected;

    } else {
        console.log("No existe tarea con id: ", id);
        return;
    }
}

async function deleteTask(id) {
    const taskSelected = await Task.findByPk(id);

    if (taskSelected) {
        await taskSelected.destroy();
        return taskSelected;

    } else {
        console.log("No existe tarea con id: ", id);
        return;
    }
}

export default {
    getAllTasks,
    getTaskById,
    addTask,
    modifyTask,
    deleteTask
}