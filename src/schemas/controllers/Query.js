import { GraphQLError } from "graphql";
import Plants from "../../models/Plants";
import Zombies from '../../models/Zombies';
import Area from '../../models/Areas';
import Achievement from '../../models/Achievement';

const notFound = (name, args) => {
    return `${name} with name ${args} not found`
}

const Query = {
    plant: async (_, args) => {
        const plant = await Plants.findOne({name: args.name});
        if (!plant) throw new GraphQLError(notFound('Plant', args.name));
        return plant;
    },
    zombie: async (_, args) => {
        const zombie = await Zombies.findOne({name: args.name});
        if (!zombie) throw new GraphQLError(notFound('Zombie', args.name));
        return zombie;
    },
    achievement: async (_, args) => {
        const achievement = await Achievement.findOne({name: args.name});
        if (!achievement) throw new GraphQLError(notFound('Achievement', args.name));
        return achievement;
    },
    area: async (_, args) => {
        const area = await Area.findOne({name: args.name});
        if (!area) throw new GraphQLError(notFound('Area', args.name));
        return area;
    },
    getZombiesPerArea: async (_, args) => {
        const area = await Area.findOne({ name: args.name }).populate('zombies');
        if (!area) throw new GraphQLError(notFound('Area', args.name));
        return area.zombies;
    } 
}

export default Query;