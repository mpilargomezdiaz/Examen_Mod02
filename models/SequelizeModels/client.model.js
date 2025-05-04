import { DataTypes } from 'sequelize';
import { MySQLConnection } from '../../databases/mysql.js'


const sequelize = MySQLConnection();

// Modelo de Cliente (sequelize).

const Client = sequelize.define('Client', {
    id_client: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    client_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    client_lastnames: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    client_dni: {
        type: DataTypes.CHAR(9),
        allowNull: false,
        unique: true
      },
      client_card: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
  }, {
    tableName: 'clients',
    timestamps: false
  });

  export default Client;

  // Función que nos permite registrar un nuevo cliente dentro de la base de datos de MySQL.

  export async function insertClient(client_name, client_lastnames, client_dni, client_card) {
    try {
      const newClient = await Client.create({ client_name, client_lastnames, client_dni, client_card });
      console.log('Cliente añadido:', newClient.toJSON());
      return newClient;
    } catch (error) {
      console.error('Error al añadir al cliente:', error);
    }
  }

  