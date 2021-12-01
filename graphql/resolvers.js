import { resolversUsuario } from "../models/usuario/resolvers.js";
import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversAvance } from "../models/avance/resolvers.js";
const resolvers = [resolversUsuario, resolversProyecto, resolversAvance]

export {resolvers}