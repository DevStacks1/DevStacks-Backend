import { InscriptionModel } from './inscripcion.js';

const Inscriptions_Resolvers = {
    Query: {
        Inscriptions: async (parent, args) => {
            const inscriptions = await InscriptionModel.find().populate('Name_project').populate('Student');
            return inscriptions;
        },
    },
    Mutation: {
        CreateInscription: async (parent, args) => {
            const NewInscription = await InscriptionModel.create({
                Inscription_State: args.Inscription_State,
                Name_project: args.Name_project,
                Student: args.Student,
            });
            return NewInscription;
        },
        AcceptInscriptions: async (parent, args) => {
            const InscriptionOk = await InscriptionModel.findByIdAndUpdate(
                args.id,
                {
                    Inscription_State: 'ACCEPTED',
                    Income_Date: Date.now(),
                },
                { new: true }
            );
            return InscriptionOk;
        },
    },
};

export { Inscriptions_Resolvers };