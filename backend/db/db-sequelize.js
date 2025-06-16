import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/productos.db',
    logging: false // Logs SQL en consola
})

export default sequelize;