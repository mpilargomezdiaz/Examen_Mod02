import { insertClient } from '../../models/SequelizeModels/client.model.js';

// Controlador para registrar un nuevo cliente dentro de la base de datos de MySQL.

export async function mysql_insertClient (req, res) {
    await insertClient(req.body.client_name, req.body.client_lastnames, req.body.client_dni, req.body.client_card);
    res.json({message: "El cliente fue insertado correctamente"})
};