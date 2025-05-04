import { insertProduct } from '../../models/SequelizeModels/product.model.js';

// Controlador para registrar un producto dentro de la base de datos de MySQL.

export async function mysql_insertProduct (req, res) {
    await insertProduct(req.body.product_name, req.body.product_code, req.body.product_price);
    res.json({message: "El producto fue insertado correctamente"})
};