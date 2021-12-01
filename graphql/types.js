import { gql } from "apollo-server-core"
import { tiposUsuario } from "../models/usuario/tipos.js"
import { tiposProyecto } from "../models/proyecto/tipos.js"
import { tiposAvance } from "../models/avance/tipos.js"
import { tiposEnums } from "../models/enums/tipos.js"

const tiposGlobales = gql`
  scalar Date
`;

const tipos = [
  tiposGlobales,
  tiposUsuario,
  tiposProyecto,
  tiposAvance,
  tiposEnums
]

export {tipos}