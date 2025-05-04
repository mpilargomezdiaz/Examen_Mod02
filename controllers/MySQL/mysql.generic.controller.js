import { connectToDatabase } from '../../databases/mysql.connection.js';

// Controlador para conectarse a la base de datos de MySQL.

export async function mysql_connection () {
    await connectToDatabase();
};

