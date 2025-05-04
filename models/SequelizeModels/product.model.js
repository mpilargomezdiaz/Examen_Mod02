import { DataTypes } from 'sequelize';
import { MySQLConnection } from '../../databases/mysql.js'


const sequelize = MySQLConnection();

// Modelo de Producto (sequelize).

const Product = sequelize.define('Product', {
    id_product: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    product_code: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    product_price: {
        type: DataTypes.STRING(7),
        allowNull: false,
    }
}, {
    tableName: 'products',
    timestamps: false
});

export default Product;

  // Función que nos permite registrar un nuevo producto dentro de la base de datos de MySQL.

 export async function insertProduct(product_name, product_code, product_price) {
    try {
      const newProduct = await Product.create({ product_name, product_code, product_price });
      console.log('Producto añadido:', newProduct.toJSON());
      return newProduct;
    } catch (error) {
      console.error('Error al añadir el producto:', error);
    }
  }