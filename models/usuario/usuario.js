import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// import { Enum_Rol, Enum_EstadoUsuario } from '../enums/enums';

// interface User {
//   correo: string;
//   identificacion: string;
//   nombre: string;
//   apellido: string;
//   rol: Enum_Rol;
//   estado: Enum_EstadoUsuario;
// }

const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Lastname: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      // (email) => {
      //   if (email.includes('@') && email.includes('.')) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // },
      message: 'El formato del correo electrónico está malo.',
    },
  },
  Identification: {
    type: String,
    required: true,
    unique: true,
  },
  Role: {
    type: String,
    required: true,
    enum: ['STUDENT', 'LEADER', 'ADMINISTRATOR'],
  },
  State: {
    type: String,
    enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
    default: 'PENDIENTE',
  },
});


const UserModel = model('users', userSchema);

export { UserModel };
