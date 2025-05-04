import { Sequelize } from 'sequelize';

// Configuración de MySQL.

export function MySQLConnection() {
    return new Sequelize('supermarket', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        logging: false
    });
}