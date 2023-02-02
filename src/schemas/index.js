import { gql } from "apollo-server";
import { createSchema } from "graphql-yoga";
import { getPlantByName } from "./controllers/plants.controllers";
import Plants from "../models/Plants";
import { GraphQLError } from "graphql";
const typeDefs = gql`
  type Query {
    zombie(name: String!): Zombie!
    plant(name: String!): Plant!
    area(name: String!): Area!
    achivement(name: String!): Achievement!
  }

  type Plant {
    _id: ID!
    name: String!
    image: String!
    sun_cost: Int!
    recharge: String
    boost: Boolean
    damage: String
    toughness: String
    range: String
    usage: String
  }

  type Zombie {
    _id: ID!
    name: String!
    image: String!
    toughness: String
    damage: Int
    absorbs: Int
    sun_cost: Int
    brain_cost: Int
  }

  type Area {
    _id: ID!
    name: String!
    image: String!
    number_of_levels: Int
    plants: [Plant]
    zombies: [Zombie]
    to_unlock: String!
  }

  type Achievement {
    _id: ID!
    name: String!
    description: String
    image: String!
  }
`;

export const schema = createSchema({
  typeDefs,
  resolvers: {
    Query: {
      plant: async (_, args) => {
        const plant = await Plants.findOne({name: args.name});
        if (!plant) throw new GraphQLError(`Plant with name ${args.name} not found`);
        return plant;
      },
    },
  },
});
