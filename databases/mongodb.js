import mongoose from 'mongoose';

// Conexión a MongoDB.

export async function MongoDBConnection() {
mongoose.connect('mongodb://127.0.0.1:27017/userdb', {
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.error('Error de conexión a MongoDB:', err);
});
}