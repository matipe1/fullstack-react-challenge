import express from 'express';
import tasksSvc from '../services/tasks.service.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await tasksSvc.getAllTasks()
        res.json(tasks);

        if (!tasks.length > 0) {
            console.log('Sin tareas');
        }
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error interno del servidor' })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await tasksSvc.getTaskById(id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Tarea no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);

        if (data) {
            const newTask = await tasksSvc.addTask(data);
            res.status(201).json({
                message: 'Tarea creada correctamente',
                newTask,
            })
        } else {
            res.status(400).json({ message: "No se han ingresado datos" })
        }
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error interno del servidor' })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        // console.log("Id parametro: ", id, " Body: ", data)

        if (id && data) {
            const updatedTask = await tasksSvc.modifyTask(id, data);
            // console.log("Tarea actualizada: ", updatedTask);

            res.sendStatus(204);
        } else {
            res.status(400).json({ message: "No se han ingresado datos correctos" })
        }
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error interno del servidor' })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const deletedTask = await tasksSvc.deleteTask(id);
            // console.log("Tarea eliminada: ", deletedTask);

            res.sendStatus(204);
        } else {
            res.status(400).json({ message: "No se ha ingresado el id" })
        }
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error interno del servidor' })
    }
});

export default router;