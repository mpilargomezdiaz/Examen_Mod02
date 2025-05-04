import express, {json} from "express";
import { mysql_connection } from './controllers/MySQL/mysql.generic.controller.js';
import { mysql_insertClient } from "./controllers/MySQL/mysql.user.controller.js";
import { mysql_insertProduct } from "./controllers/MySQL/mysql.product.controller.js";
import { mongodb_connection, mongodb_createNewUser } from './controllers/MongoDB/mongodb.generic.controller.js';

const app = express();
app.use(json());

/* ---------------------- ENDPOINTS CORRESPONDIENTES A MySQL ----------------------  */

// Petición Get para conectarse a la base de datos de MySQL.

app.get("/mysql", mysql_connection);

// Petición Post que permite registar un nuevo cliente dentro de la base de datos de MySQL.

app.post("/insertClient", mysql_insertClient);

// Petición Post que permite registar un nuevo producto dentro de la base de datos de MySQL.

app.post("/insertProduct",  mysql_insertProduct);

/* ---------------------- ENDPOINTS CORRESPONDIENTES A MongoDB ----------------------  */

// Petición Get para conectarse a la base de datos de MongoDB.

app.get("/mongodb", mongodb_connection);

// Petición Post que permite crear un nuevo usuario (email y contraseña) dentro de la base de datos de MongoDB.

app.post("/createUser", mongodb_createNewUser);


app.listen(3001);