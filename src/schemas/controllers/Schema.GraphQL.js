import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    zombie(name: String!): Zombie!
    plant(name: String!): Plant!
    area(name: String!): Area!
    achievement(name: String!): Achievement!
    getZombiesPerArea(name: String!): [Zombie]
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

export default typeDefs;