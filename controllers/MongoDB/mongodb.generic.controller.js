import { MongoDBConnection } from '../../databases/mongodb.js';
import { postUser } from '../../models/MongooseModels/user.model.js';


// Controlador para conectarse a la base de datos de MongoDB.

export async function mongodb_connection () {
    await MongoDBConnection();
};

// Controlador para crear nuevos usuarios en la base de datos de MongoDB.

export async function mongodb_createNewUser (req, res) {
    await postUser(req.body.email, req.body.pass);
    res.json({message: "Creado"})
};

