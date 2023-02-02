import { gql } from "apollo-server";
import { createSchema } from "graphql-yoga";

const typeDefs = gql`
type Query {
    zombie: Zombie!
    plant: Plant!
    area: Area!
    achivement: Achievement!
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
      plant: () => "world",
    },
  },
});
