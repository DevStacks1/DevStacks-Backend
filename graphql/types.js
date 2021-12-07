import { gql } from "apollo-server-core"
import { Types_Users } from "../models/usuario/tipos.js"
import { ProjectTypes } from "../models/proyecto/tipos.js"
import { Inscription_Types } from "../models/inscripcion/tipos.js";
import { Enums_Types } from "../models/enums/tipos.js"
import { Autenticacion_types } from "./auth/types.js";

const GlobalTypes = gql`
  scalar Date
`;

const tipos = [
  Autenticacion_types,
  GlobalTypes,
  Types_Users,
  ProjectTypes,
  Inscription_Types,
  Enums_Types
]

export {tipos}