import mongoose from 'mongoose';

// Modelo de Usuario (Mongoose).

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true, 
    match: [/\S+@\S+\.\S+/, 'El email no es válido'] 
  },
  pass: { 
    type: String, 
    required: true
   }
});

const User = mongoose.model('User', userSchema);

// Función para crear un nuevo usuario dentro de la base de datos de MongoDB.

export async function createUser(userData) {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    console.log('Usuario creado:', savedUser);
    return savedUser;
  } catch (error) {
    console.error('Error al crear usuario:', error);
  }
};

// Función que se encarga de crear un nuevo usuario con los datos que le ingresemos.

export async function postUser(email, pass) {
  try {
    const newUser = await createUser({ email, pass });
    // console.log('Usuario creado:', newUser.toJSON());
    return newUser;
  } catch (error) {
    console.error('Error al crear usuario:', error);
  }
}