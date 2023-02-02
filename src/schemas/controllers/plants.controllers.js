import { GraphQLError } from "graphql";
import Plants from "../../models/Plants";

const getPlantByName = async (_, {name}) => {
    const plant = await Plants.findOne(name);
    if (!plant) throw new GraphQLError(`Plant with name ${name} not found`);
    return plant;
}

export {
    getPlantByName
}