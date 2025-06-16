import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db-sequelize.js';

class Task extends Model{};

Task.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
    /*
    createdAt se genera automaticamente
    dado el valor timestamps: true
    que declare abajo en las opciones
    en la inicializacion del modelo
    */
}, {
    sequelize,
    modelName: 'Task',
    tableName: 'task',
    timestamps: true,
    updatedAt: false
});

export default Task;