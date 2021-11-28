import { gql } from 'apollo-server-express';

const tiposEnums = gql`
  enum Enum_EstadoUsuario {
    PENDING
    AUTHORIZED
    NO_AUTHORIZED
  }

  enum Enum_Rol {
    STUDENT
    LEADER
    ADMINISTRATOR
  }

  enum Enum_EstadoProyecto {
    ACTIVE
    INACTIVE
  }

  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }

  enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
  }

  enum Enum_EstadoInscripcion {
    ACEPTADO
    RECHAZADO
    PENDIENTE
  }
`;

export { tiposEnums };
