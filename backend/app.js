import express from 'express';
import cors from 'cors';
import sequelize from './db/db-sequelize.js';
import tasksModel from './models/Task.js';
import tasksRoute from './routes/tasks.js';

const app = express()
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json({ message: 'Prueba de funcionamiento API' })
})

app.use('/api/tasks', tasksRoute);

async function DBInit() {
    try {
        await sequelize.sync()

    } catch (error) {
        console.error('Error al sincronizar la db: ', error)
    }
}
DBInit();

app.listen(PORT, (req, res) => {
    console.log(`servidor escuchando en puerto http://localhost:${PORT}`)
})