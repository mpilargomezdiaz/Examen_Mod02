import { DataTypes } from 'sequelize';
import { MySQLConnection } from '../../databases/mysql.js'
import Client from '../SequelizeModels/client.model.js';
import Product from '../SequelizeModels/product.model.js';

const sequelize = MySQLConnection();

/* 
Modelo de la tabla que relaciona la entidad Clients con la entidad Products (sequelize).
Al tratarse de una relación con cardinalidad N:M, se crea una tabla.
*/

const Client_Product = sequelize.define('Client_Product', {
    id_client_product: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fk_id_client: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'id_client',
        }
    },
    fk_id_product: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id_product',
        }
    }
},
    {
        tableName: 'clients_products',
        timestamps: false
    });

export default Client_Product;