import { gql } from 'apollo-server-express';

const tiposUsuario = gql`
    type Usuario {
        _id: ID!
        Name: String!
        Lastname: String!
        Identification: String!
        Email: String!
        Role: Enum_Rol!
        State: Enum_EstadoUsuario
    }
    type Query {
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
    }
    type Mutation {
        crearUsuario(
        Name: String!
        Lastname: String!
        Identification: String!
        Email: String!
        Role: Enum_Rol!
        State: Enum_EstadoUsuario
        ): Usuario,

        editarUsuario(
        _id: String!
        Name: String!
        Lastname: String!
        Identification: String!
        Email: String!
        Role: Enum_Rol!
        State: Enum_EstadoUsuario
        ): Usuario,

        eliminarUsuario(_id: String, Email: String): Usuario
    }
    `;

export { tiposUsuario };