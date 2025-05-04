import { MySQLConnection } from './mysql.js'
import Client from '../models/SequelizeModels/client.model.js';
import Product from '../models/SequelizeModels/product.model.js';
import Client_Product from '../models/SequelizeModels/client_product.model.js';

const sequelize = MySQLConnection();

// Función para conectarse con la base de datos de MySQL y crear las tablas en caso de no estar ya creadas.

export async function connectToDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Conexión establecida correctamente.');
      await Client.sync();
      await Product.sync();
      await Client_Product.sync();
      console.log('Modelos correctamente sincronizados con la base de datos.');
    } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error);
    }
  }