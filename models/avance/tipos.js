import { gql } from 'apollo-server-express';

const tiposAvance = gql`
    type Avance {
        _id: ID!
        descripcion: String!
        observaciones: [String]
        proyecto: Proyecto!
        creadoPor: Usuario!
    }
    type Query {
        Avances: [Avance]
        filtrarAvance(idProyecto: String!): [Avance]
    }
    type Mutation {
        crearAvance(descripcion: String!, proyecto: String!, creadoPor: String!): Avance
    }
    `;

export { tiposAvance };