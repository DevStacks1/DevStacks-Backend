import { ModeloAvance } from './avance.js';

const Avance_Resolvers = {
    Query: {
        Avances: async (parent, args) => {
        const avances = await ModeloAvance.find().populate('Project').populate('CreatedBy');
        return avances;
        },
        filtrarAvance: async (parents, args) => {
        const avanceFiltrado = await ModeloAvance.find({ Project: args.ProjectId })
            .populate('Project')
            .populate('CreatedBy');
        return avanceFiltrado;
        },
    },
    Mutation: {
        crearAvance: async (parents, args) => {
        const avanceCreado = await ModeloAvance.create({
            Date: args.Date,
            Observations: args.Observations,
            Project: args.Project,
            CreatedBy: args.CreatedBy,
        });
        return avanceCreado;
        },
    },
};

export { Avance_Resolvers }