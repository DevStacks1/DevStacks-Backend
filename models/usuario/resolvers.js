import { UserModel } from './usuario.js';

const resolversUsuario = {
    Query: {
        Usuarios: async (parent, args) => {
        const usuarios = await UserModel.find();
        console.log("entro a usuarios");
        return usuarios;
        },
        Usuario: async (parent, args) => {
        const usuario = await UserModel.findOne({ _id: args._id });
        return usuario;
        },
    },
    Mutation: {
        crearUsuario: async (parent, args) => {
        
        const usuarioCreado = await UserModel.create({
            Name: args.Name,
            Lastname: args.Lastname,
            Identification: args.Identification,
            Email: args.Email,
            Role: args.Role,
        });

        if (Object.keys(args).includes('State')) {
            usuarioCreado.State = args.State;
        }

        return usuarioCreado;
        },
        editarUsuario: async (parent, args) => {
        const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
            Name: args.Name,
            Lastname: args.Lastname,
            Identification: args.Identification,
            Email: args.Email,
            Role: args.Role,
            State: args.State,
        });

        return usuarioEditado;
        },
        eliminarUsuario: async (parent, args) => {
        if (Object.keys(args).includes('_id')) {
            const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id });
            return usuarioEliminado;
        } else if (Object.keys(args).includes('Email')) {
            const usuarioEliminado = await UserModel.findOneAndDelete({ Email: args.Email });
            return usuarioEliminado;
        }
        },
    },
};

export { resolversUsuario };